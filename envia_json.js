$(function(){	
$( "form" ).on( "submit", function( event ) {
	//document.getElementById('botao_enviar').disabled=true;
	event.preventDefault();
	var dados = $( this ).serialize(); 
       $.ajax({
           type: "post",		   
           url: "http://localhost:8080",
		   cache:false,		   
           dataType: "json",
           success: function (json) {
			   consloe.log('sadsa');
               if (json) {
                   alert("Dados enviados com sucesso!");
                   location.reload(true);
               } else {
                   alert("Os dados não foram enviados!");
               }
           },
           data: dados,
       });	

});
	 
});
		
