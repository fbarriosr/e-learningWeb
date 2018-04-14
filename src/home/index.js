var page = require('page');

var yo = require('yo-yo');
var empty = require('empty-element');
var templateEmpty = require('./templateEmpty');
var btnAdd = require('./btnAdd');
var cursos = require('./cursos');
var card= require('./card');
var footerTemplate= require('./footer');

var imagesFBRef = firebase.database().ref().child('curso').orderByKey();
var paginaActual = 1;

var header = document.getElementById('header-container');
var main = document.getElementById('main-container');
var footer = document.getElementById('footer-container');

page('/', function(ctx,next){	
	load();
});

function load(ctx,next){
	
	console.log("Home page");	 
  headerLoad(); 
  loadImages();
}

function headerLoad(){

  var headerTemplate= require('./header');
  empty(header).appendChild(headerTemplate('CURSOS'));
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

      var numeroImagenes = Object.keys(datos).length;
      var numeroPaginas = Math.ceil(numeroImagenes/itemPorPagina) ;
      console.log("numeroImagenes",numeroImagenes);
      console.log("itemPorPagina",itemPorPagina);
      console.log("numeroPaginas",numeroPaginas);

      const aux = yo`
	      <div class="container" >
				<div class="row">
		      		<div class="row" id="addPhoto" >
						
		      		</div>
	  			</div> 
	  	  </div>
      `;

  	  main.appendChild(aux);
  	 
  	  var content = document.getElementById('addPhoto');
  	  content.appendChild(btnAdd("curso","btnAdd"));

      var inicio = 0;
      var i = 0;
      var final = 0;
      if ( (inicio+itemPorPagina)>numeroImagenes){
        final = numeroImagenes; 
      } else {
        final = inicio+itemPorPagina;
      }
      console.log('final', final);
      console.log('inicio', inicio);
      
      for (var key in datos){
        if (i >= inicio && i< final){
          content.appendChild(card("curso?curso=",key,datos[key].name,datos[key].img,datos[key].date));
          console.log("url",key);
        }
        i= i+1;  
      } 

      loadFooter(numeroPaginas,paginaActual);

    }
  });
}


function loadFooter(numeroPaginas, paginaActual){
  footer.appendChild(footerTemplate);
  var paginas = document.getElementById('paginas');

  if(numeroPaginas == 0 | numeroPaginas == 1)
  {
    console.log("Sin paginas");
  } 
  else {
    var resultado = "";
    var liPaginas ="";
    console.log("numeroPaginas",numeroPaginas);
    console.log("paginaActual",paginaActual);

    const  pagination = yo`<ul class="pagination" id="pagina">
                          </ul>`;

    paginas.appendChild(pagination);          
    var li = document.getElementById('pagina');

    const  left = yo`<li class="waves-effect">
                      <a id="btnLeft"><i class="material-icons">chevron_left</i></a>
                    </li>`;
    const  right= yo`<li class="waves-effect">
                      <a id="btnRight" ><i class="material-icons">chevron_right</i></a>
                    </li>`;
    li.appendChild(left);

    var numbers = require('./pagination');

     for (var i = 1; i <= numeroPaginas; i++){
      if (i == paginaActual){
        li.appendChild(numbers(i,"active")); 
        }else {
        li.appendChild(numbers(i,"waves-effect")); 
      } 
    }

  }
}




