var possui_rede_social_sim= $('#possui_rede_social_sim');
var possui_rede_social_nao= $('#possui_rede_social_nao');
/*
function get_lista_de_categorias(categorias_json){
  categorias=JSON.parse(categorias_json);
}*/



possui_rede_social_sim.click("on",function(){	
	var qual_rede_social_div= document.getElementById('qual_rede_social_div');	
	qual_rede_social_div.style.visibility = 'visible';
});


possui_rede_social_nao.click("on",function(){	
	var qual_rede_social_div= document.getElementById('qual_rede_social_div');	
	qual_rede_social_div.style.visibility = 'hidden';
});

