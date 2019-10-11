var width = parseInt($("#container_canvas").width());
var height = parseInt($("#container_canvas").height());
var marcat = null;
var rotation = 0;
var num_alertes = 0;

function actualitzarAlertes()
{
	if (num_alertes>0)
		$("#alertes").show();
	else
		$("#alertes").hide();
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
  $('.nav-tabs a').on('shown.bs.tab', function(event){
    var x = $(event.target).text();         // active tab
    var y = $(event.relatedTarget).text();  // previous tab
    $(".act span").text(x);
    $(".prev span").text(y);
  });
});
