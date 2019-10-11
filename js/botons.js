$( "#ZoomIn" ).on("click tap", ampliar );
$( "#ZoomOut" ).on("click tap", reduir );
$( "#download_U" ).on( "click tap", save_picture );
$( "#download_L" ).on( "click tap", save_picture );
$( "#rotate_left_U" ).on( "click tap", rotate_left_regleta );
$( "#rotate_left_L" ).on( "click tap", rotate_left_regleta );
$( "#rotate_right_U" ).on( "click tap", rotate_right_regleta );
$( "#rotate_right_L" ).on( "click tap", rotate_right_regleta );
$( "#trash_U" ).on( "click tap", trash_element );
$( "#trash_L" ).on( "click tap", trash_element );
$( "#write_U" ).on( "click tap", write_text );
$( "#write_L" ).on( "click tap", write_text );
$( "#bring_front_U" ).on( "click tap", bring_front_regleta );
$( "#bring_front_L" ).on( "click tap", bring_front_regleta );
$( "#bring_under_U" ).on( "click tap", bring_under_regleta );
$( "#bring_under_L" ).on( "click tap", bring_under_regleta );

/*
	Ampliar el marc de treball
*/
function ampliar()
{
	var oldScale = stage.scaleX();

	var posicio_x =  parseInt($("#container_canvas").width())/2;
	var posicio_y =  parseInt($("#container_canvas").height())/2;

	var mousePointTo = {
	  x: posicio_x / oldScale - stage.x() / oldScale,
	  y: posicio_y / oldScale - stage.y() / oldScale
	};

	var newScale = oldScale * scaleBy;

	stage.scale({ x: newScale, y: newScale });

	var newPos = {
	  x: -(mousePointTo.x - posicio_x / newScale) * newScale,
	  y: -(mousePointTo.y - posicio_y / newScale) * newScale
	};

	stage.position(newPos);
	stage.batchDraw();
}

/*
	Reduir el marc de treball
*/
function reduir()
{
	var oldScale = stage.scaleX();

	var posicio_x =  parseInt($("#container_canvas").width())/2;
	var posicio_y =  parseInt($("#container_canvas").height())/2;

	var mousePointTo = {
	  x: posicio_x / oldScale - stage.x() / oldScale,
	  y: posicio_y / oldScale - stage.y() / oldScale
	};

	var newScale = oldScale / scaleBy;

	stage.scale({ x: newScale, y: newScale });

	var newPos = {
	  x: -(mousePointTo.x - posicio_x / newScale) * newScale,
	  y: -(mousePointTo.y - posicio_y / newScale) * newScale
	};

	stage.position(newPos);
	stage.batchDraw();
}

/* Guarda en el sistema una captura de pantalla */
function save_picture()
{
	var link1 = document.getElementById('download_U');
	var link2 = document.getElementById('download_L');
	var image = stage.toDataURL();
	link1.href = image;
	link2.href = image;
	link1.download = 'reglets.png';
	link2.download = 'reglets.png';
}

/*
	Si hi ha alguna regleta marcada:
		girar cap a l'esquerra
	Si no hi ha alguna regleta marcada:
		apareixerà un error indicant que cal «Clicar dos vegades sobre una regleta per marcar un element.»
*/
function rotate_left_regleta()
{
	if (marcat != null)
	{
		var node_actual = search_shape();

		node_actual.offsetX(node_actual.width() / 2);
		node_actual.offsetY(node_actual.height() / 2);

	 		var rotate = node_actual.rotation();

		if (rotate - 45 <0)
			rotate = 360 - rotate - 45;
		else
			rotate = rotate - 45;

		node_actual.rotation(rotate);
		layer.draw();
	}
	else
	{
		//afegir una alerta d'error: Clica dos vegades sobre una regleta per marcar un element.
		num_alertes++;
		actualitzarAlertes();
	}
}

/*
	Si hi ha alguna regleta marcada:
		girar cap a la dreta
	Si no hi ha alguna regleta marcada:
		apareixerà un error indicant que cal «Clicar dos vegades sobre una regleta per marcar un element.»
*/
function rotate_right_regleta()
{
	if (marcat != null)
	{
		var node_actual = search_shape();

		node_actual.offsetX(node_actual.width() / 2);
		node_actual.offsetY(node_actual.height() / 2);

		var rotate = node_actual.rotation();

		if (rotate + 45 >360)
			rotate = rotate + 45 - 360;
		else
			rotate = rotate + 45;

		node_actual.rotation(rotate);
		layer.draw();
	}
	else
	{
		//afegir una alerta d'error: Clica dos vegades sobre una regleta per marcar un element.
		num_alertes++;
		actualitzarAlertes();
	}
}

/*
	Si hi ha alguna regleta marcada:
		elimina l'element marcat
	Si no hi ha alguna regleta marcada:
		apareixerà un error indicant que cal «Clicar dos vegades sobre una regleta per marcar un element.»
*/
function trash_element()
{
	if (marcat != null)
	{
		var shape_actual = search_shape();
		shape_actual.destroy();

		var transformers = stage.find('Transformer');
		var transformer_actual = null;

		transformers.each(function(transformer) {
			if (transformer.id() == 'transformer_'+marcat)
			{
				transformer_actual = transformer;
				transformer_actual.destroy();
				marcat = null;
				num_alertes = 0;
			}
		});

		layer.draw();
	}
	else
	{
		//afegir una alerta d'error: Clica dos vegades sobre una regleta per marcar un element.
		num_alertes++;
	}
	actualitzarAlertes();
}

/* Eliminar tot el contingut del marc de treball */
function trash_all()
{
	//Buscar tots els Rectangles
    var shapes = stage.find('Rect');
    shapes.each(function(shape) {
  		shape.destroy();
    });

    //Buscar totes les imatges
    var images = stage.find('Image');
    images.each(function(image) {
  		image.destroy();
    });

    //Buscar tots els texts
    var texts = stage.find('Text');
    texts.each(function(text) {
  		text.destroy();
    });

	//Buscar tots els transformers
    var transformers = stage.find('Transformer');
    transformers.each(function(transformer) {
  		transformer.destroy();
    });

	//Elimina tots els textarea
	$("textarea").remove();

    layer.draw();

	marcat = null;
}

/*
	Genera un requadre amb un element «Sense text» en gris que es pot modificar el contingut però no es pot moure.
	Quan es modifica el contingut es canvia de color i ja no es pot editar.
	Després de modificar-lo es podrà desplaçar-lo
*/
function write_text()
{
    //inserir un text a modificar en el centre del canvas
    //calculem el nombre d'elements que hi ha de tipus texts_marc
    var num_elements = (parseInt($("#num_texts_marc").html())+1);
    $("#num_texts_marc").html(num_elements);

    //id del nou element a inserir
    var id_nou = "texts_marc" + "_" + num_elements;
    var proporcio_font_size = parseFloat($("#proporcio_mida_actual_elements").css("font-size")) + 2 * parseFloat($("#proporcio_mida_actual_elements").html());
    var posicio_left = $("#container_canvas").width()/2;
    var posicio_top = $("#container_canvas").height()/2;

    var textNode = new Konva.Text({
        text: 'Some text here',
        x: posicio_left,
        y: posicio_top,
        fontSize: proporcio_font_size,
        width: 255,
        id: id_nou,
        name: id_nou,
        verticalAlign: 'middle',
        padding: 10,
        align: 'center',
        fill: '#858585',
        draggable: true
    });

	layer.add(textNode);

	layer.draw();

	textNode.on('transform', function() {
		//Reset  de la escala.
        textNode.setAttrs({
          width: textNode.width() * textNode.scaleX(),
          scaleX: 1
        });
		layer.draw();
    });

	/*
		Quan es fa dobleclick o dobletouch, s'edita el text. Una vegada finalitzada l'edició (presionant la tecla INTRO), el color del text canvia.
	*/
	textNode.on('dblclick dbltap', (e) => {
		// S'amaga el textNode
        textNode.hide();
        layer.draw();

        // Es busca la posició relativa del textNode a stage
        var textPosition = textNode.getAbsolutePosition();

        // Es busca la posició del container del stage
        var stageBox = stage.container().getBoundingClientRect();

		// Cordenades corresponent al container_canvas
		var coord = $("#container_canvas").offset();

        // La posicio del textarea passa a ser la suma de les posicions (la posicio relativa del textNode dintre del stage + la posició relativa del canvas a la pantalla) + 10
        var areaPosition = {
          x: textPosition.x + coord.left + 10,
          y: textPosition.y + coord.top + 10
        };

        // Creem un textarea i l'hi afegim un estil
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);

        textarea.value = textNode.text();
		textarea.id = 'textarea'+textNode.id();
        textarea.style.position = 'absolute';
        textarea.style.top = areaPosition.y - 9 + 'px';
        textarea.style.left = areaPosition.x - 9 + 'px';
        textarea.style.width = textNode.width() + 'px';
        textarea.style.height = 46 + 'px';
        textarea.style.fontSize = textNode.fontSize() + 'px';
        textarea.style.border = 'none';
        textarea.style.padding = '5px';
        textarea.style.margin = '0px';
        textarea.style.overflow = 'hidden';
        textarea.style.background = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.lineHeight = textNode.lineHeight();
        textarea.style.fontFamily = textNode.fontFamily();
        textarea.style.transformOrigin = 'left top';
        textarea.style.textAlign = textNode.align();
        textarea.style.color = '#858585';
        rotation = textNode.rotation();
        var transform = '';
        if (rotation) {
          transform += 'rotateZ(' + rotation + 'deg)';
        }

        var px = 0;

        // also we need to slightly move textarea on firefox
        // because it jumps a bit
        var isFirefox =
          navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (isFirefox) {
          px += 2 + Math.round(fontSize / 20);
        }
        transform += 'translateY(-' + px + 'px)';

        textarea.style.transform = transform;

        // reset height
        textarea.style.height = 'auto';
        // after browsers resized it we can set actual value
        textarea.style.height = 46 + 'px';

        textarea.focus();

		//Es treu el textArea que s'ha afegit per editar el text
        function removeTextarea()
		{
          textarea.parentNode.removeChild(textarea);
          window.removeEventListener('click tap', handleOutsideClick);
          textNode.show();
          layer.draw();
        }

		//Es redimensiona la mida del textarea
        function setTextareaWidth(newWidth)
		{
          if (!newWidth) {
            // set width for placeholder
            newWidth = textNode.placeholder.length * textNode.fontSize();
          }
          // some extra fixes on different browsers
          var isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
          );
          var isFirefox =
            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
          if (isSafari || isFirefox) {
            newWidth = Math.ceil(newWidth);
          }

          var isEdge =
            document.documentMode || /Edge/.test(navigator.userAgent);
          if (isEdge) {
            newWidth += 1;
          }
          textarea.style.width = newWidth + 'px';
        }

		/*
			Quan apretes una tecla:
				- Si és un SHIFT + INTRO, realitza un salt de línia en el textarea.
				- Si s'apreta la tecla INTRO sense el SHIFT, es modifica el text i es canvia de color.
				- Si s'apreta ESC, s'elimina la modificació que s'estava fent (incloent el textarea).
		*/
        textarea.addEventListener('keydown', function(e) {
			// hide on enter
			// but don't hide on shift + enter
			if (e.keyCode === 13 && !e.shiftKey)
			{
				textNode.text(textarea.value);
				textNode.fill('#0C8599');
				removeTextarea();
			}
			// on esc do not set value back to node
			if (e.keyCode === 27)
			{
				removeTextarea();
			}
			scale = textNode.getAbsoluteScale().x;
			setTextareaWidth(textNode.width() * scale);
			textarea.style.height = 'auto';
			textarea.style.height = textNode.fontSize() + 20 + 'px';

			if(textarea.value == "")
			{
				textNode.destroy();

				var transformers = stage.find('Transformer');
				var tr = null;

				transformers.each(function(transformer) {
					if (transformer.id() == 'transformer_'+textNode.id)
					{
						tr = transformer;
					}
				});
			}
        });

		//Si cliques sobre un lloc que no és un textarea, elimina el textarea
        function handleOutsideClick(e)
		{
          if (e.target !== textarea) {
            removeTextarea();
          }
        }
        setTimeout(() => {
          window.addEventListener('click tap', handleOutsideClick);
        });
      });

}

/*
	Si hi ha alguna regleta marcada:
		posa per sobre d'una altre regleta
	Si no hi ha alguna regleta marcada:
		apareixerà un error indicant que cal «Clicar dos vegades sobre una regleta per marcar un element.»
*/
function bring_front_regleta()
{
	if (marcat != null)
	{
		var shape_actual = search_shape();

		shape_actual.moveToTop();
		layer.draw();
	}
	else //afegir una alerta d'error: Clica dos vegades sobre una regleta per marcar un element.
	{
		num_alertes++;
		actualitzarAlertes();
	}
}

/*
	Si hi ha alguna regleta marcada:
		posa per sota d'una altre regleta
	Si no hi ha alguna regleta marcada:
		apareixerà un error indicant que cal «Clicar dos vegades sobre una regleta per marcar un element.»
*/
function bring_under_regleta()
{
	if (marcat != null)
	{
		var shape_actual = search_shape();
		shape_actual.moveToBottom();
		layer.draw();
	}
	else //afegir una alerta d'error: Clica dos vegades sobre una regleta per marcar un element.
	{
		num_alertes++;
		actualitzarAlertes();
	}
}
