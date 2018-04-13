var page = require('page');

var yo = require('yo-yo');
var empty = require('empty-element');
var templateEmpty = require('./templateEmpty');
var btnAdd = require('./btnAdd');
var cursos = require('./cursos');

var imagesFBRef = firebase.database().ref().child('curso').orderByKey();
var paginaActual = 1;

var main = document.getElementById('main-container');

page('/', function(ctx,next){	
	load();
});

function load(ctx,next){
	
	//empty(main).appendChild(templateEmpty );
	console.log("Home page");	  
    loadImages();
}


function loadImages(){
  imagesFBRef.on("value",function(snapshot){

    var datos = snapshot.val();
    // load paginador
    var itemPorPagina = 8;

    if (datos == null){
      empty(main).appendChild(templateEmpty ); 
      //paginato(0,1);

    }else {
/*
      var numeroImagenes = Object.keys(datos).length;
      var numeroPaginas = Math.ceil(numeroImagenes/itemPorPagina) ;
      console.log("numeroImagenes",numeroImagenes);
      console.log("itemPorPagina",itemPorPagina);
      console.log("numeroPaginas",numeroPaginas);



      const aux2 = yo`
	      			</div>
	  			</div> 
	  		</div>
	
      `;
      */

      const aux = yo`
	      <div class="container" >
				<div class="row">
		      		<div class="row" id="addPhoto" >
						
		      		</div>
	  			</div> 
	  	  </div>
      `;
       
      //paginato(numeroPaginas,paginaActual);
	

	  empty(main).appendChild(templateEmpty);
	  //
	  main.appendChild(aux);

	 
	  var content = document.getElementById('addPhoto');


	  content.appendChild(btnAdd("curso.php","btnAdd"));


     // var template=cursos(datos,itemPorPagina,numeroImagenes,0);
     // empty(main).appendChild(template); 
     
      
    }
  })
}




