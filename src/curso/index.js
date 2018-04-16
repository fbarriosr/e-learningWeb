var page = require('page');

var yo = require('yo-yo');
var empty = require('empty-element');
var templateNewCurso = require('./newCurso');
var btnAdd = require('../home/btnAdd');
var card= require('../home/card');

var footerTemplate= require('../home/footer');

var header = document.getElementById('header-container');
var main = document.getElementById('main-container');
var footer = document.getElementById('footer-container');
var FBRef;

var cursoKey = sessionStorage.getItem("curso");

page('/curso', function(ctx,next){	
	load();
});

function load(ctx,next){
 
  console.log("Curso Storage:", cursoKey);  
	console.log("Curso page");	
  headerLoad(); 
  loadImages();

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

function headerLoad(){
  var headerTemplate = require('./header');
  empty(header).appendChild(headerTemplate('CURSO'));
  //footer.appendChild(footerTemplate);

 $('#btnBack').click(function(){ 
   console.log('btnBack');
   var content = document.getElementById('addPhoto');
   empty(content);
   page('/');
 });
}

function loadImages(){
  console.log( "ready Clases!" );
  console.log( "cursoKey:" ,cursoKey);   

  if (cursoKey == 'null') {
      console.log( "load newCurso:  " );   
      loadNewCurse();
  } else {
      console.log( "load Curso:  " ); 
      loadCurse(cursoKey);
  }
  //var content = document.getElementById('addPhoto');
  //content.appendChild(btnAdd("btnAdd"));
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
  empty(content).appendChild(templateNewCurso("image1.png", 'Nombre','Tipo','Fecha','Descripción','btnSave','Guardado'));
}

function loadCurse(cursoKey){
  var FBRef;
  FBRef = firebase.database().ref().child('curso/'+cursoKey); 
  FBRef.once("value",function(snapshot){
    var datos = snapshot.val();
    var claseKey = null;

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
    }else {
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
      empty(content).appendChild(templateNewCurso("image1.png", datos.name,datos.type,datos.date,datos.description,'btnSave','Actualizar'));

    

    }
  });
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

    //window.open("curso?curso="+cursoKeyAux,"_self");
    sessionStorage.setItem("curso", "cursoKeyAux");
    page('/curso');
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



