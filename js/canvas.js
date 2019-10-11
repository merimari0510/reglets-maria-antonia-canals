//Konva

var stage = new Konva.Stage({
    container: 'container_canvas',
    width: width,
    height: height,
    draggable: true
});

stage.on('dragstart', function () {
  document.body.style.cursor = 'move';
});

stage.on('dragend', function () {
  document.body.style.cursor = 'default';
});

stage.on('click tap', function (e) {
	if (e.target === stage)
	{
		stage.find('Transformer').destroy();
		layer.draw();
		return;
	}
	// do nothing if clicked NOT on our rectangles
	/*if (!e.target.hasName('tipus')) {
		alert('clik tap transformer not our rectangles');
		return;
	}*/

	// remove old transformers
	// TODO: we can skip it if current rect is already selected
	stage.find('Transformer').destroy();

	// create new transformer
	var tr = new Konva.Transformer({
		id: 'transformer_'+e.target.id(),
		node: e.target,
		centeredScaling: true,
		rotationSnaps: [0, 90, 180, 270],
		resizeEnabled: false
	});

	layer.add(tr);

	tr.attachTo(e.target);

	layer.draw();
})

var layer = new Konva.Layer();

/*Afegeix un event «click». Cada vegada que es clica sobre un element en el layer, apareix un missatge indicant que has clicat sobre l'element evt.target */
/*layer.on('click', function(evt) {
	// get the shape that was clicked on
	var shape = evt.target;
	alert('you clicked on "' + shape.id() + '"');
});*/

/*
	Busca l'element marcat.
	Si existeix element marcat, retorna l'objecte del canvas amb id igual a l'element marcat.
	Si no existeix element marcat, retorna null.
*/
function search_shape()
{
	var shapes = stage.find('Rect');
	var node_actual = null;

	//Per tots els «shapes» que existeixen, comprovo que sigui el marcat
	shapes.each(function(shape) {
		if (shape.id() == marcat)
			node_actual = shape;
	});

	return node_actual;
}

var container = stage.container();

$('#container_canvas').on('click tap', function(evt) {
	//if (evt.target.tagName === 'CANVAS') {
		var texts = stage.find('Text');
		var textNode = null;

		texts.each(function(textNode) {
			var textAreaNode = document.getElementById("textarea" + textNode.id());
			if (textAreaNode)
			{
				var transformers = stage.find('Transformer');
				var tr = null;

				transformers.each(function(transformer) {
					if (transformer.id() == 'transformer_'+textNode.id())
					{
						tr = transformer;
					}
				});

				/*if($('#textarea'+textNode.id()).val()=="")
				{
					$('#textarea'+textNode.id()).remove();
					tr.destroy();
					console.log("textarea eliminat i tr destruit");
				}		*/

				if (tr == null)
					$('#textarea'+textNode.id()).css('outline',' 5px auto -webkit-focus-ring-color');
			}

		});
	//}
});

/*Afegeix un event «click». Cada vegada que es clica sobre un element en el layer, apareix un missatge indicant que has clicat sobre l'element evt.target */
layer.on('dblclick dbltap', function(evt) { //Afegir event dbltap.
	var box = evt.target;

	if (marcat == null || marcat != box.id())
	{
		var shapes = stage.find('Rect');
		var node_actual = null;

		//Per tots els «shapes» que existeixen, comprovo que sigui el marcat
		shapes.each(function(shape) {
			if (shape.id() == box.id())
			{
				node_actual = shape;
				node_actual.strokeWidth(5);
				node_actual.stroke('#6D98D6');
			}
			else
			{
				shape.strokeWidth(1);
				shape.stroke('#6c757d');
			}
		});
				layer.draw();

		if (node_actual != null)
		{
			marcat = box.id();
			num_alertes = 0;
			actualitzarAlertes();
		}
	}
	else
	{
		var shapes = stage.find('Rect');
		var node_actual = null;

		//Per tots els «shapes» que existeixen, comprovo que sigui el marcat
		shapes.each(function(shape) {
			if (shape.id() == box.id())
			{
				node_actual = shape;
				node_actual.strokeWidth(1);
				node_actual.stroke('#6c757d');
			}
		});

		layer.draw();

		marcat = null;

	}
});

stage.add(layer);

var canvas = document.getElementById('container_canvas');

$("#container_canvas").append("<div id='zoom'><button id='ZoomIn' class='btn btn-primary' aria-label='ZoomIn' type='button' data-toggle='tooltip' data-html='true' title=\"Acosta't\" data-placement='left'><i class='fas fa-search-plus'></i></button><button id='ZoomOut' aria-label='ZoomOut' class='btn btn-primary' type='button' data-toggle='tooltip' data-html='true' title=\"Allunya't\" data-placement='left'><i class='fas fa-search-minus'></i></button></div>");

if ($("#botons_mes_gran_1200").css('display') == 'block')
	$("#contenidor_alertes_mes_gran_1200").append("<div id='alertes' class='alert alert-warning fade in '><img src='https://www.prisma.cat/informacio/img/creu_vermella.png' style='margin-left: 2px; margin-right: 2px;'>Clica 2 vegades sobre un reglet per marcar 1 element.</div>");

if ($("#botons_1200").css('display') == 'block')
	$("#contenidor_alertes_1200").append("<div id='alertes' class='alert alert-warning fade in '><img src='https://www.prisma.cat/informacio/img/creu_vermella.png' style='margin-left: 2px; margin-right: 2px;'>Clica 2 vegades sobre un reglet per marcar 1 element.</div>");

$("#alertes").hide();

/*canvas.addEventListener('mousemove', function(evt)
{
  var mousePos = getMousePos(canvas, evt);
  var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
}, false);*/

function getMousePos(canvas, evt)
{
  return {
    x: evt.clientX,
    y: evt.clientY
  };
}

var scaleBy = 1.01;

stage.on('wheel', e => {
	e.evt.preventDefault();
	var oldScale = stage.scaleX();

	var mousePointTo = {
	  x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
	  y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
	};

	var newScale =
	  e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
	stage.scale({ x: newScale, y: newScale });

	var newPos = {
	  x:
		-(mousePointTo.x - stage.getPointerPosition().x / newScale) *
		newScale,
	  y:
		-(mousePointTo.y - stage.getPointerPosition().y / newScale) *
		newScale
	};

	stage.position(newPos);
	stage.batchDraw();
});


// Scroll
/*var scrollLayers = new Konva.Layer();
stage.add(scrollLayers);

const PADDING = 5;

var verticalBar = new Konva.Rect({
    width: 10,
    height: 100,
    fill: 'grey',
    opacity: 0.8,
    x: stage.width() - PADDING - 10,
    y: PADDING,
    id: 'vertical_bar',
    draggable: true,
    dragBoundFunc: function (pos) {
        pos.x = stage.width() - PADDING - 10;
        pos.y = Math.max(Math.min(pos.y, stage.height() - this.height() - PADDING), PADDING);
        return pos;
    }
});
scrollLayers.add(verticalBar);
scrollLayers.draw();

verticalBar.on('dragmove', function () {
    // delta in %
    const availableHeight = stage.height() - PADDING * 2 - verticalBar.height();
    var delta = (verticalBar.y() - PADDING) / availableHeight;

    layer.y(-stage.height() * delta);
    layer.batchDraw();
});


var horizontalBar = new Konva.Rect({
    width: 100,
    height: 10,
    fill: 'grey',
    opacity: 0.8,
    x: PADDING,
    y: stage.height() - PADDING - 10,
    id: 'horizontal_bar',
    draggable: true,
    dragBoundFunc: function (pos) {
        pos.x = Math.max(Math.min(pos.x, stage.width() - this.width() - PADDING), PADDING);
        pos.y = stage.height() - PADDING - 10;

        return pos;
    }
});
scrollLayers.add(horizontalBar);
scrollLayers.draw();

horizontalBar.on('dragmove', function () {
    // delta in %
    const availableWidth = stage.width() - PADDING * 2 - horizontalBar.width();
    var delta = (horizontalBar.x() - PADDING) / availableWidth;

    layer.x(-stage.width() * delta);
    layer.batchDraw();
    console.log("horitzontalBar"+layer.x() + "y" + layer.y());
});*/
