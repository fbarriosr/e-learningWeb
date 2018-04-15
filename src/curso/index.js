var page = require('page');

var yo = require('yo-yo');
var empty = require('empty-element');
var templateNewCurso = require('./newCurso');
var btnAdd = require('../home/btnAdd');

var footerTemplate= require('../home/footer');

var header = document.getElementById('header-container');
var main = document.getElementById('main-container');
var footer = document.getElementById('footer-container');
var FBRef;

var url = window.location.href;
let params = new URL(url).searchParams;
var cursoKey = params.get('curso'); 

page('/curso', function(ctx,next){	
	load();
});

function load(ctx,next){
	console.log("Curso page");	
  headerLoad(); 
  loadImages();
}

function headerLoad(){
  var headerTemplate= require('../home/header');
  empty(header).appendChild(headerTemplate('CURSO'));
}

function loadImages(){
  

  console.log( "ready Clases!" );
  console.log( "url:" ,url);    
  console.log( "cursoKey:" ,cursoKey);   

  if (cursoKey == null) {
      console.log( "load newCurso" );   
      loadNewCurse();
      loadFooter(0,0);
  } else {
     // loadCurse(cursoKey);
  }

}


function loadNewCurse(){

  FBRef = firebase.database().ref().child('curso/'); 

  console.log('FBRef:', FBRef);
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

  content.appendChild(templateNewCurso("image1.png", 'Nombre','Tipo','Fecha','Descripción','btnSave','Guardado'));

  $('#btnSave').click(function(){
    btnSave();
  });
  $('#btnSave2').click(function(){
    btnSave2();
  });
  $('#fieldGood').find('#close-modal').click(function(event){
    EventGood(event);
  });

  datapickerInit();


}
/*
function loadCurse(cursoKey){
  var FBRef;
  FBRef = firebase.database().ref().child('curso/'+cursoKey); 

  FBRef.on("value",function(snapshot){

    var datos = snapshot.val();
    var claseKey = null;
    // load paginador
    var itemPorPagina = 8;

    if (datos == null){
      const aux = yo`
        <div class="container" >
        <div class="row">
              <div class="row" id="addPhoto" >
                <br>
                <h3 style="padding: 10px;" > Error de la key</h3>
              </div>
          </div> 
        </div>
      `;

      empty(main).appendChild(aux); 
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
  	  content.appendChild(btnAdd("curso.php","btnAdd"));

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
          content.appendChild(card("curso.php?curso=",key,datos[key].name,datos[key].img,datos[key].date));
          console.log("url",key);
        }
        i= i+1;  
      } 

      loadFooter(numeroPaginas,paginaActual);

    }
  });
}*/


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

    var numbers= require('../home/pagination');

     for (var i = 1; i <= numeroPaginas; i++){
      if (i == paginaActual){
        li.appendChild(numbers(i,"active")); 
        }else {
        li.appendChild(numbers(i,"waves-effect")); 
      } 
    }

  }
}



function btnSave(){
  console.log("DATA ");

  var name = $('#last_name').val();
  var type = $('#type_name').val();  
  var date = $('#date_name').val();
  var description = $('#description_name').val();
  var img = "https://firebasestorage.googleapis.com/v0/b/e-learning-62f78.appspot.com/o/image1.png?alt=media&token=d145adf4-30f4-4295-8a8f-e74971e4b27b";

  console.log("DATA ");
  console.log("name: ",name);
  console.log("type: ",type);
  console.log("date: ",date);
  console.log("img: ",img);
  console.log("description: ",description);

  if (name == "" || type_name == "" || date == "" || img == "" || description == ""  ){
     console.log("vacio ");  
     alert("Debes Completar los campos pedidos");
  }else { 
     guardarInfo(name,type,date,img,description);
  }
}


function btnSave2(){
  console.log("DATA ");
  
  var name = $('#last_name2').val();
  var type = $('#type_name2').val();  
  var date = $('#date_name2').val();
  var description = $('#description_name2').val();
  var img = "https://firebasestorage.googleapis.com/v0/b/e-learning-62f78.appspot.com/o/image1.png?alt=media&token=d145adf4-30f4-4295-8a8f-e74971e4b27b";

  console.log("DATA ");
  console.log("name: ",name);
  console.log("type: ",type);
  console.log("date: ",date);
  console.log("img: ",img);
  console.log("description: ",description);

  if (name == "" || type_name == "" || date == "" || img == "" || description == ""  ){
     console.log("vacio ");  
     //alert("Debes Completar los campos pedidos");
     $('#fieldNone').modal('open');

  }else { 
     guardarInfo(name,type,date,img,description);
  }
}





function EventGood(event){
    event.preventDefault();
    location.reload();
    console.log('good');
}

function guardarInfo(name, type,date,img,description){ 
   var aux= FBRef.push({
    name: name,
    type: type,
    date: date,
    img: img,
    description: description
    });
    console.log('Guardado');
    $('#fieldGood').modal('open');

    var cursoKeyAux = aux.getKey();
    console.log("push key:", cursoKeyAux);
    window.open("curso?curso="+cursoKeyAux,"_self");
}

function datapickerInit(){
    $('.datepicker').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
          selectMonths: true,
          selectYears: 100, // Puedes cambiarlo para mostrar más o menos años
          today: 'Hoy',
          clear: 'Limpiar',
          close: 'Ok',
          labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Selecciona un mes',
        labelYearSelect: 'Selecciona un año',
    });
}



