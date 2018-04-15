var page = require('page');

var yo = require('yo-yo');
var empty = require('empty-element');
var templateEmpty = require('./templateEmpty');
var btnAdd = require('./btnAdd');
var cursos = require('./cursos');
var card= require('./card');
var footerTemplate= require('./footer');

var header = document.getElementById('header-container');
var main = document.getElementById('main-container');
var footer = document.getElementById('footer-container');

var imagesFBRef = firebase.database().ref().child('curso').orderByKey();
var paginaActual = 1;
var itemPorPagina = 8;

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

    if (datos == null){
      empty(main).appendChild(templateEmpty ); 
      loadFooter(0,paginaActual);

    }else {

      const numeroImagenes = Object.keys(datos).length;
      const numeroPaginas = Math.ceil(numeroImagenes/itemPorPagina) ;
      console.log("numeroImagenes",numeroImagenes);
      console.log("itemPorPagina",itemPorPagina);
      console.log("numeroPaginas",numeroPaginas);
      const inicio = 0;
      
      writeImage(datos, itemPorPagina,numeroImagenes,inicio)

      loadFooter(numeroPaginas,paginaActual);

    }

    $('.curso').click(function(){ 
     const auxKey = $('.curso').attr("alt"); 
     console.log('btnCurso');
     console.log('key:', auxKey);
     window.open("curso?curso="+auxKey,"_self");

    });

    $('#btnAdd').click(function(){ 
     console.log('btnAdd');
     window.open("curso","_self");
       //window.open("curso?curso=uno","_self");
    });


  });

}


function writeImage(datos, itemPorPagina,numeroImagenes,inicio){

  const aux = yo`
    <div class="container" >
    <div class="row">
          <div class="row" id="addPhoto" >
        
          </div>
      </div> 
    </div>
  `;

  empty(main).appendChild(aux);

  var content = document.getElementById('addPhoto');
  content.appendChild(btnAdd("btnAdd"));

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
      content.appendChild(card(key,datos[key].name,datos[key].img,datos[key].date));
      console.log("url",key);
    }
    i= i+1;  
  } 


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
    li.appendChild(right);

    $('#btnRight').click(function(){
        if (paginaActual == numeroPaginas){
        }else {
          var aux = `#pag_`+paginaActual;
          $(aux).removeClass("active");
          paginaActual = paginaActual +1;
          var inicioItems = itemPorPagina * (paginaActual-1 )  ;
          console.log("btnRight");
          console.log("paginaActual", paginaActual);
          var aux = `#pag_`+paginaActual;
          $(aux).addClass("active");
         // writeImageDom(datos,itemPorPagina,numeroImagenes,inicioItems);
        }
      });

      $('#btnLeft').click(function(){
          if (paginaActual == 1){
          }else {
            var aux = `#pag_`+paginaActual;
            $(aux).removeClass("active");
            paginaActual = paginaActual -1;
            var inicioItems = itemPorPagina * (paginaActual-1 ) ;
            console.log("btnLeft");
            console.log("paginaActual", paginaActual);
            var aux = `#pag_`+paginaActual;
            $(aux).addClass("active");
           // writeImageDom(datos,itemPorPagina,numeroImagenes,inicioItems);
          }
      });

  }
}







