<!DOCTYPE html>
<html lang="ca">
<head>
  <title>Reglets</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <!-- Responsive meta tag -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Theme color -->
  <meta name="theme-color" content="#303B5B">
  <!-- Descripció de la pàgina -->
  <meta name="Description" content="Mòdul per fer activitats del curs de reglets.">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
  <!-- Material Design Bootstrap -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.0/css/mdb.min.css">

  <link rel="manifest" href="json/manifest.json">


  <!-- Variables -->
  <link rel="stylesheet" href="css/variables.css">
  <!-- @media > 1200px -->
  <link rel="stylesheet" href="css/media_extra_large_devices.css" media="screen and (min-width:1200px)">
  <!-- @media >992px i < 1200 px -->
  <link rel="stylesheet" href="css/media_large_devices.css" media="screen and (max-width:1200px)">
  <!-- @media <992px > 768 px -->
  <link rel="stylesheet" href="css/media_medium_devices.css" media="screen and (max-width:992px)">
  <!-- @media <768px > 600 px -->
  <link rel="stylesheet" href="css/media_small_devices.css" media="screen and (max-width:768px)">
  <!-- @media <600px >350px -->
  <link rel="stylesheet" href="css/media_extra_small_devices.css" media="screen and (max-width:600px)">
  <!-- @media <350px -->
  <link rel="stylesheet" href="css/media_extra_extra_small_devices.css" media="screen and (max-width: 370px)">
  <!-- Reglets -->
 <link rel="stylesheet" href="css/components.css">
 <!-- Botons per operar el canvas -->
 <link rel="stylesheet" href="css/botons.css">
 <!-- Estructura del lloc web -->
 <link rel="stylesheet" href="css/estructura.css">
 <!-- Alertes -->
 <link rel="stylesheet" href="css/alertes.css">
 
 <!-- JQuery -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <!-- Browser -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/bowser/1.9.4/bowser.min.js"></script>
 
</head>
<body>
			 <script>
				var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
				var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
				
				if (!es_chrome && !es_firefox)
				{
					$('body').html("<div id='activitat' class='marc_activitat'><img id='capcalera' src='https://www.prisma.cat/campus/documents/activitat/banner_prisma_rectangle.png'><div id='cos_error'><p style='margin-right: 40px; margin-left: 40px; text-align: center; line-height: 25px;'>Per evitar incompatibilitats és necessari utilitzar el navegador <a href='https://www.google.com/intl/es/chrome/browser/?hl=es' target='_blank' class='navegador'>Chrome</a> o <a href='https://www.mozilla.org/es-ES/firefox/new/' target='_blank' class='navegador'>Firefox</a>.</p><p style='margin-right: 40px; margin-left: 40px; text-align: center; line-height: 25px; text-align: center'>Per a qualsevol dubte podeu enviar-nos un correu a través del formulari d'<a href='https://www.prisma.cat/menu/usuari/suport.php' target='_blank' class='navegador'>Incidències tècniques</a>.</p></div><div id='peu' align='center'><br>Pl. Poeta Marquina 5, 1r-1a · 17002 Girona · 972 21 75 65 · 678 12 36 87 · <a href='https://www.prisma.cat' target='_blank'>www.prisma.cat</a> · secretaria@prisma.cat</div></div>");
				}
			 </script>
			<div id="app" class="container text-center" style="display: none; margin-top: 15px; margin-bottom: 15px; height: 80%; width: 100%;">
			  <div class="row content" style="height: 100%;">
				<div class="col-sm-4 col-md-5 col-lg-4 sidenav" style="padding-left: 0px;">
				  <div class="well no-seleccionable" id="containet_regletes">
					<div id="tipus_1" class="regleta tipus_1"></div>
					<div id="tipus_2" class="regleta tipus_2"></div>
					<div id="tipus_3" class="regleta tipus_3"></div>
					<div id="tipus_4" class="regleta tipus_4"></div>
					<div id="tipus_5" class="regleta tipus_5"></div>
					<div id="tipus_6" class="regleta tipus_6"></div>
					<div id="tipus_7" class="regleta tipus_7"></div>
					<div id="tipus_8" class="regleta tipus_8"></div>
					<div id="tipus_9" class="regleta tipus_9"></div>
					<div id="tipus_10" class="regleta tipus_10"></div>
				  </div>
				  <div class="well no-seleccionable" id="botons_mes_gran_1200">
					<button id="rotate_left_U" class="btn btn-primary" aria-label="Rotate_left" type="button" data-toggle="tooltip" data-html="true" title="Gira el reglet marcat 45º cap a l'esquerra"><i class="fas fa-undo-alt"></i></button>
					<button id="rotate_right_U" class="btn btn-primary" aria-label="Rotate_right" type="button" data-toggle="tooltip" data-html="true" title="Gira el reglet marcat 45º cap a la dreta"><i class="fas fa-redo-alt"></i></button>
					<button id="trash_U" class="btn btn-primary" aria-label="Trash" type="button" data-toggle="tooltip" data-html="true" title="Elimina el reglet marcat"><i class="fas fa-times"></i></button>
					<button id="bring_front_U" class="btn btn-primary" aria-label="Bring Under" type="button" data-toggle="tooltip" data-html="true" title="Passa el reglet davant de tots els altres"><img alt="boto_bring_under" src="https://camo.githubusercontent.com/8ffd4c6d2da6624ddd477387fc85dcbd2da0ad4c/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3831393434362f3934393139342f63363131396566362d303337382d313165332d393538392d6633383931313335386132622e706e67" style="margin-top: -4px;"></button>
					<button id="bring_under_U" class="btn btn-primary" aria-label="Bring Front" type="button" data-toggle="tooltip" data-html="true" title="Passa el reglet darrere de tots els altres"><img alt="boto_bring_front" src="https://camo.githubusercontent.com/2aa7e01edeebcaf694cd496f91c51bb30a66cc3a/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3831393434362f3934393139352f63363431633234382d303337382d313165332d383962352d3132656333326564313431652e706e67" style="margin-top: -4px;"></button>
					<div style="clear: both;"></div>
					<a id="download_U" aria-label="Download"><button id="download_b" class="btn btn-primary" aria-label="Download" type="button" data-toggle="tooltip" data-html="true" title="Descarrega una imatge de l'espai de treball" data-placement='bottom'><i class="fas fa-download"></i></button></a>
					<button id="write_U" class="btn btn-primary" aria-label="Write" type="button" data-toggle="tooltip" data-html="true" title="Afageix un text a l'espai de treball" data-placement='bottom'><i class="fas  fa-font"></i></button>
					<span data-toggle="modal" data-target="#modal_eliminar_tot"><button id="trash_all_U" class="btn btn-primary" aria-label="Trash All" type="button" data-toggle="tooltip" data-html="true" title="Elimina tot el contingut de l'espai de treball" data-target="#modal_eliminar_tot" data-placement='bottom'><i class="fas fa-trash"></i></button></span>
					<span data-toggle="modal" data-target="#modal_help"><button id="help_U" class="btn btn-primary" aria-label="Help" type="button" data-toggle="tooltip" data-html="true" title="Explicació dels components i funcionament de l'aplicació" data-placement='bottom'><i class="fas fa-question" style="font-size: 1.1rem;"></i></button>
				  </div>
				  <div class="well no-seleccionable" id="botons_1200">
					<button id="rotate_left_L" class="btn btn-primary" aria-label="Rotate_left" type="button" data-toggle="tooltip" data-html="true" title="Gira el reglet marcat 45º cap a l'esquerra"><i class="fas fa-undo-alt"></i></button>
					<button id="rotate_right_L" class="btn btn-primary" aria-label="Rotate_right" type="button" data-toggle="tooltip" data-html="true" title="Gira el reglet marcat 45º cap a la dreta"><i class="fas fa-redo-alt"></i></button>
					<button id="trash_L" class="btn btn-primary" aria-label="Trash" type="button" data-toggle="tooltip" data-html="true" title="Elimina el reglet marcat"><i class="fas fa-times"></i></button>
					<button id="bring_front_L" class="btn btn-primary" aria-label="Bring Under" type="button" data-toggle="tooltip" data-html="true" title="Passa el reglet davant de tots els altres"><img alt="boto_bring_under" src="https://camo.githubusercontent.com/8ffd4c6d2da6624ddd477387fc85dcbd2da0ad4c/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3831393434362f3934393139342f63363131396566362d303337382d313165332d393538392d6633383931313335386132622e706e67" style="margin-top: -4px;"></button>
					<button id="bring_under_L" class="btn btn-primary" aria-label="Bring Front" type="button" data-toggle="tooltip" data-html="true" title="Passa el reglet darrere de tots els altres"><img alt="boto_bring_front" src="https://camo.githubusercontent.com/2aa7e01edeebcaf694cd496f91c51bb30a66cc3a/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3831393434362f3934393139352f63363431633234382d303337382d313165332d383962352d3132656333326564313431652e706e67" style="margin-top: -4px;"></button>
					<div style="clear: both;"></div>
					<a id="download_L" aria-label="Download"><button id="download_b" class="btn btn-primary" aria-label="Download" type="button" data-toggle="tooltip" data-html="true" title="Descarrega una imatge de l'espai de treball" data-placement='bottom'><i class="fas fa-download"></i></button></a>
					<button id="write_L" class="btn btn-primary" aria-label="Write" type="button" data-toggle="tooltip" data-html="true" title="Afageix un text a l'espai de treball" data-placement='bottom'><i class="fas  fa-font"></i></button>
					<span data-toggle="modal" data-target="#modal_eliminar_tot"><button id="trash_all_L" class="btn btn-primary" aria-label="Trash All" type="button" data-toggle="tooltip" data-html="true" title="Elimina tot el contingut de l'espai de treball" data-target="#modal_eliminar_tot" data-placement='bottom'><i class="fas fa-trash"></i></button></span>
					<span data-toggle="modal" data-target="#modal_help"><button id="help_L" class="btn btn-primary" aria-label="Help" type="button" data-toggle="tooltip" data-html="true" title="Explicació dels components i funcionament de l'aplicació" data-placement='bottom'><i class="fas fa-question" style="font-size: 1.1rem;"></i></button>
				  </div>
				  <div id="exclusivitat_prisma">
					<p id="logotip_prima"><img src="img/logo_prisma.png"></p>
					<p id="text-exclusiu">Creat per PrisMa per a ús exclusiu al Campus virtual</p>
					<div style="clear: both;"></div>
				  </div>
				  <div id="contenidor_alertes_mes_gran_1200" class="no-seleccionable">
				  </div>
				</div>

				<div id="container_canvas" class="col-sm-8 col-md-7 col-lg-8 text-left content_canvas">
				</div>
				<div id="contenidor_alertes_1200">
				 </div>
			  </div>

			  <!-- Modal: Estàs segur d'eliminar-ho tot?-->
			  <div class="modal fade" id="modal_eliminar_tot" role="dialog">
				<div class="modal-dialog">
				  <div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title modal-warining" id="exampleModalLabel">Alerta!</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
					  <p>Estàs segur que vols eliminar tot l'espai de treball?</p>
					</div>
					<div class="modal-footer">
					  <button id="trash_correct" type="button" class="btn btn-primary" data-dismiss="modal" onclick="trash_all()">Sí</button>
					  <button id="trash_ignore" type="button" class="btn btn-close-warning" data-dismiss="modal">No</button>
					</div>
				  </div>
				</div>
			  </div>
			  <!-- Fi Modal: Estàs segur d'eliminar-ho tot? -->

			  <!-- Modal: Ajuda-->
			  <div class="modal fade" id="modal_help" role="dialog">
				<div class="modal-dialog modal-lg">
				  <div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title modal-warining" id="exampleModalLabel">Ajuda</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
					  <ul class="nav nav-tabs">
						<li><a class="active show" href="#estructura">Estructura</a></li>
						<li><a href="#components">Botons</a></li>
						<li><a href="#funcionament">Funcionament</a></li>
						<!--<li><a href="#audiovisual">Vídeo explicatiu</a></li>-->
					  </ul>

					  <div class="tab-content">
						<div id="estructura" class="help_section tab-pane fade in active">
							<p>L'estructura de l'aplicació es divideix en tres blocs:</p>
							<ul class="fa-ul">
								<li><i  class="fas fa-caret-right"></i>Els reglets.</li>
								<li><i  class="fas fa-caret-right"></i>L'espai de treball.</li>
								<li><i  class="fas fa-caret-right"></i>Els botons per poder treballar amb l'espai de treball.</li>
							</ul>

							<h5>Reglets</h5>
							<p>En aquest bloc hi ha els diferents reglets amb què es pot treballar. </p>
							<p>Fent doble clic a sobre d’un reglet, aquest s’afegirà a l’espai de treball.</p>
							<p style="text-align: center;"><img class="screen_width_all" src="img/imatge_marc_bloc_reglets.jpg" alt="Imatge en la qual es destaca el bloc de els reglets en l'aplicació web" /></p>

							<h5>Espai de treball</h5>
							<p>Aquest bloc correspon al marc on es podran manipular els reglets.</p>
							<p style="text-align: center;"><img class="screen_width_all"  src="img/imatge_marc_bloc_espai_treball.jpg" alt="Imatge en la qual es destaca el bloc de l'espai de treball en l'aplicació web" /></p>
							
							<h5>Botons</h5>
							<p>En aquest bloc hi ha els diferents botons amb què es pot treballar</p>
							<p>Per realitzar qualsevol acció, abans de clicar al botó cal tenir marcat un reglet (en la pestanya «Funcionament» s’explica com fer-ho).</p>
							<p style="text-align: center;"><img src="img/botons_sobre_reglets.jpg" alt="Botons que necessiten tenir un reglet marcada" /></p>
							<p>Es pot veure la descripció de les accions de cada botó en passar-hi el cursor per sobre.</p>
							<p style="text-align: center;"><img src="img/boto_tooltip.jpg" alt="Imatge que indica com es visualitza la descripció breu d'un botó" /></p>
							<p style="text-align: center;"><img  class="screen_width_all" src="img/imatge_marc_bloc_botons.jpg" alt="Imatge en la qual es destaca el bloc dels reglets en l'aplicació web" /></p>
						</div>
						<div id="components" class="help_section tab-pane fade">
							<div id="taula_explicacio_botons" class="table-responsive">
								<table class="table help_section">
								<tbody>
									<tr>
										<th scope="row"><i class="fas fa-undo-alt"></i></th>
										<td>Es gira cap a l'esquera 45º el reglet marcat.</td>
										<th scope="row"><i class="fas fa-download"></i></th>
										<td>Es descarrega una imatge de l’espai de treball.</td>
									</tr>
									<tr>
										<th scope="row"><i class="fas fa-redo-alt"></i></th>
										<td>Es gira cap a la dreta 45º el reglet marcat.</td>
										<th scope="row"><i class="fas fa-font"></i></th>
										<td>S'insereix un camp de text a l’espai de treball.</td>
									</tr>
									<tr>
										<th scope="row"><i class="fas fa-times"></i></th>
										<td>S'esborra el reglet marcat.</td>
										<th scope="row"><i class="fas fa-trash"></i></th>
										<td>S'esborra tot el contingut de l’espai de treball.</td>
									</tr>
									<tr>
										<th scope="row"><img src="img/bring_front.jpg" /></th>
										<td>Es passa el reglet marcat a primer terme, davant de tots els altres reglets de l’espai de treball.</td>
										<th scope="row"><i class="fas fa-search-plus"></i></th>
										<td>S’amplia  la representació visualitzada de l’espai de treball.</td>
									</tr>
									<tr>
										<th><img src='img/bring_front.jpg' /></th>
										<td>Es passa el reglet marcat al fons, darrere de tots els altres reglets de l’espai de treball.</td>
										<th scope="row"><i class="fas fa-search-minus"></i></th>
										<td>Es redueix  la representació visualitzada de l’espai de treball.</td>
									</tr>
								</tbody>
								</table>
							</div>
						</div>
						<div id="funcionament" class="help_section tab-pane fade">
							<p>Per afegir un reglet a l’espai de treball, abans cal seleccionar-lo del bloc de reglets fent-hi doble clic a sobre.</p>
							<p>En clicar a sobre d’un reglet de l’espai de treball, apareix un requadre emmarcant-lo i, en la part superior d’aquest marc, un petit quadre que permet girar lliurement el reglet (per fer-ho només s’hi ha de clicar i, mantenint pitjat el botó del ratolí, moure’l lliurement).</p>
							<p>Per aplicar les accions dels botons en un reglet de l’espai de treball, abans cal seleccionar-lo fent-hi doble clic a sobre. Quan es vulgui desseleccionar, només se li haurà de tornar a fer doble clic.</p>
							<p align="center"><img src="img/regleta.jpg" alt="Imatge d'un reglet" /><img src="img/regleta_enmarcat.jpg" alt="Imatge d'un reglet amb el marc de rotació"  /><img src="img/regleta_rotacio.jpg" alt="Imatge d'un reglet girada" /></p>
							<p>Les accions que es poden realitzar en els reglets marcats són les següents:</p>
							<ul>
								<li>Girar el reglet 45º a la dreta.</li>
								<li>Girar el reglet 45º a l’esquerra.</li>
								<li>Elimnar un reglet.</li>
								<li>assar el reglet a primer terme, davant de tots els reglets.</li>
								<li>Passar el reglet al fons, darrere de tots els reglets.</li>
							</ul>
							<p>Amb el botó <button id="write_U" class="btn btn-primary"><i class="fas  fa-font"></i></button> s’afegeix un text predefinit a l’espai de treball. Per editar aquest text, cal fer-hi doble clic. Per sortir de l’edició cal prémer la tecla <em>Intro</em> per validar els canvis o bé la tecla <em>Escape</em> per cancel·lar-los. Quan es guardi el primer canvi, també es modificarà el color del text.</p>
							<p align="center"><img class="text_canvas" src="img/text.jpg" alt="Imatge d'un text inserit a l'espai de treball" /><img class="text_canvas" src="img/text_editat.jpg" alt="Imatge d'un canvi de text"  /><img class="text_canvas" src="img/text_modificat.jpg" alt="Imatge d'un text amb el canvi de text realitzat" /></p>

							<p>Mantenir pressionat el botó esquerre del ratolí permet moure’s per l’espai de treball.</p>
						</div>
						<div id="audiovisual" class="tab-pane fade embed-container">
						  <iframe src='https://www.youtube.com/embed/MBgLsceUHKo' frameborder='0' allowfullscreen></iframe>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			  <!-- Fi Modal: Ajuda -->


			  <div id="num_elements_marc_treball" style="display: none;">
				<div id="num_tipus_1">0</div>
				<div id="num_tipus_2">0</div>
				<div id="num_tipus_3">0</div>
				<div id="num_tipus_4">0</div>
				<div id="num_tipus_5">0</div>
				<div id="num_tipus_6">0</div>
				<div id="num_tipus_7">0</div>
				<div id="num_tipus_8">0</div>
				<div id="num_tipus_9">0</div>
				<div id="num_tipus_10">0</div>

				<div id="num_texts_marc">0</div>
			  </div>

			  <div id="proporcio_mida_actual_elements" style="display: none;">1</div>
			  
			   <script>
				var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
				var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
				
				if (es_chrome || es_firefox)
				{
					$('#app').css('display','initial');
				}
			 </script>
			 
			  <!-- Bootstrap tooltips -->
			  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
			  <!-- Bootstrap core JavaScript -->
			  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.min.js"></script>
			  <!-- MDB core JavaScript -->
			  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.0/js/mdb.min.js"></script>

			  <!-- Inici JS -->
			  <script type="text/javascript"  src="js/inici.js"></script>

			  <!-- Html2canvas JS (Capturar pantalla)-->
			  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
			  <!-- Konva -->
			  <script src="https://unpkg.com/konva@2.4.2/konva.min.js"></script>

			  <!-- Canvas JS -->
			  <script type="text/javascript"  src="js/canvas.js"></script>
			  <!-- Reglets JS -->
			  <script type="text/javascript" src="js/regletes.js"></script>
			  <!-- Botons JS -->
			  <script type="text/javascript" src="js/botons.js"></script>
			  <!-- TITOL JS -->
			  <script type="text/javascript" src="js/titol.js"></script>

</body>
</html>
