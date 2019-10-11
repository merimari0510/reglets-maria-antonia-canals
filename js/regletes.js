$(".regleta").dblclick(function(){
  //obtenim el contingut de l'element clicat (regleta)
  var contingut_data = $(this).html();
  var id = $(this).attr("id");

  //incrementem el nombre de elements que hi ha del tipus
  var num_elements = parseInt($("#num_"+id).html())+1;
  $("#num_" + id).html(num_elements);

  //id del nou element a inserir
  var id_nou = id + "_" + num_elements;
  var height_regleta = parseInt($(".regleta").height());
  var width_regleta = parseInt($("."+id).width());
  var posicio_x =  parseInt($("#container_canvas").width())/2 - width_regleta/2;
  var posicio_y =  parseInt($("#container_canvas").height())/2 - height_regleta/2;
  var color_regleta = $("."+id).css('background-color');

  draw_regleta(id_nou ,posicio_x, posicio_y, width_regleta, height_regleta, color_regleta);
});

//Dibuixa la regleta id_nou a la posicio (posicio_left,posicio_top) de mida width_regleta x height_regleta de colo color_regleta amb un border border_width_regleta border_color_regleta
function draw_regleta(id_nou,posicio_left, posicio_top, width_regleta, height_regleta, color_regleta) {
	var width = parseInt($("#container_canvas").width());
	var height = parseInt($("#container_canvas").height());

	var box = new Konva.Rect({
		x: posicio_left,
		y: posicio_top,
		width: width_regleta,
		height: height_regleta,
		fill: color_regleta,
		stroke: '#6c757d',
		strokeWidth: 1,
		id: id_nou,
		name: id_nou,
		shadowColor: '#6c757d',
		shadowBlur: 10,
		shadowOffset: {
			x : 5,
			y : 5
		},
		shadowOpacity: 0.6,
		draggable: true
	});

//Canviem el punt de rotació al centre. PEr defecte el punt de rotació està en el lateral inferior.
  box.offsetX(box.width() / 2);
  box.offsetY(box.height() / 2);

	//console.log("box x:"+posicio_left+" y:"+posicio_top+" width:"+width_regleta+" height:"+height_regleta+" fill:"+color_regleta+" id_nou:"+id_nou+" name:"+id_nou);

	//Quan el ratolí passa per sobre la regleta, es mostra el cursor "move"
	box.on('mouseenter', function(e) {
			document.body.style.cursor = 'move';
	});

	//Quan el ratolí surt de la regleta, es mostra el cursor per defecte
	box.on('mouseleave', function(e) {
			document.body.style.cursor = 'default';
	});

	layer.add(box);

	var container = stage.container();
    container.tabIndex = 1;
    container.focus();

    const DELTA = 0.0001;

	/*Mous la regleta marcada a partir de les tecles del teclat */
	container.addEventListener('keydown', function(e) {
		// get the shape that was clicked on
		if (marcat == null)
		{
			//afegir una alerta d'error: Clica dos vegades sobre una regleta per marcar un element.
			num_alertes++;
			actualitzarAlertes();
		}
		else
		{
			const DELTA = 4;

			var shapes = stage.find('Rect');
			var shape_actual = null;

			shapes.each(function(shape) {
				//console.log("Shape: "+shape.id());
				if (shape.id() == marcat)
				{
					shape_actual = shape;
				}
			});

			if (e.keyCode === 37)
      {
				shape_actual.x(shape_actual.x() - DELTA);
			}
      else if (e.keyCode === 38)
      {
				shape_actual.y(shape_actual.y() - DELTA);
			}
      else if (e.keyCode === 39)
      {
				shape_actual.x(shape_actual.x() + DELTA);
			}
      else if (e.keyCode === 40)
      {
				shape_actual.y(shape_actual.y() + DELTA);
			}
      else if (e.keyCode === 46) //Delete
      {
        shape_actual.destroy();
        var transformers = stage.find('Transformer');
    		var transformer_actual = null;

    		transformers.each(function(transformer) {
    			if (marcat!=null && transformer.id() == 'transformer_'+marcat)
    			{
    				transformer_actual.destroy();
    				marcat = null;
    				num_alertes = 0;
    			}
    		});
      }
      else
      {
				return;
			}

			e.preventDefault();
			layer.batchDraw();
		}
	});

	layer.draw();
}
