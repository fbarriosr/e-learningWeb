var page = require('page');

var yo = require('yo-yo');

var empty = require('empty-element');



var main = document.getElementById('main-container');

var FBRef;

var cursoKey ;

var imagenName = "";

var file = null;

page('/curso', function(ctx,next){	
  require('dropify/dist/js/dropify.js');

  cursoKey = sessionStorage.getItem("curso");
	load();
});

function load(ctx,next){
  console.log('----------Curso page--------');
  console.log("Curso Storage:", cursoKey);  

  loadHeader();
  loadPage();

  loadImages();
   
  loadFooter();
  console.log('++++++++++Curso page++++++++'); 
  $('.dropify').dropify();
  $('.dropify-clear').hide();
  $('.dropify-infos').hide();

  
}

function btnActios(){
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
  $('.dropify').dropify();

  $('#input2').on('change',function (){
      var filePath = $(this).val();
      console.log(filePath);
  });

  var fileButton = document.getElementById('input2');
  
  fileButton.addEventListener('change', function(e){

    // get file

    file = e.target.files[0];

    var nameRand = Math.floor((Math.random() * 100000000) + 1);

    imagenName = nameRand+'_'+file.name;
    console.log('file',file);
    console.log('image',imagenName);

  });
}

function loadHeader(){
  console.log('------------loadHeader() ------------');
  const empty = require('empty-element'); 
  const headerTemplate= require('./header');
  const header = document.getElementById('header-container');
  empty(header).appendChild(headerTemplate('CURSO'));
  console.log('************loadHeader() ************');

  $('#btnBack').click(function(){ 
   console.log('btnBack');
   var content = document.getElementById('addPhoto');
   empty(content);
   page('/');
  });
}

function loadFooter(){
  console.log('------------loadFooter() ------------');
  const empty = require('empty-element');
  const footer = document.getElementById('footer-container');
  const footerTemplate= require('../home/footer');
  empty(footer).appendChild(footerTemplate);
  console.log('************loadFooter() ************');
}

function loadPage(){
  console.log('------------loadPage() ------------');
  const aux = yo`
    <div class="container" >
    <div class="row">
          <div class="row" id="addPhoto" >
        
          </div>
      </div> 
    </div>
  `;
  const main = document.getElementById('main-container');
  main.appendChild(aux);
  console.log('************loadPage() ************');
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

}

function loadNewCurse(){
  var content = document.getElementById('addPhoto');
  var templateNewCurso = require('./newCurso');

  empty(content).appendChild(templateNewCurso("image1.png", 'Nombre','Tipo','Fecha','Descripción','btnSave','Guardado')); 
  btnActios();
}

function loadCurse(cursoKey){
  return firebase.database().ref().child('curso/'+cursoKey)
                            .once('value')
                            .then(function(result){
                              var datos = result.val();
                              if (datos == null){
                                const aux = yo`
                                          <h3 style="padding: 10px;" > Error de la key</h3>
                                `;
                                empty(main).appendChild(aux); 
                                return null;
                              }else {
                                console.log('Datos then:',datos);
                                 var content = document.getElementById('addPhoto');
                                 var templateNewCurso = require('./newCurso');
                                 empty(content).appendChild(templateNewCurso("image1.png", datos.name,datos.type,datos.date,datos.description,'btnUpdate','Actualizar'));
                                 return true;
                              }
                            })
                            .then(function(dato)  {
                              if (dato != null) {
                                $('#btnUpdate').click(function(){
                                  btnUpdate(cursoKey);
                                });
                                $('#btnUpdate2').click(function(){
                                  btnUpdate2(cursoKey);
                                });
                                datapickerInit();
                                $('.dropify').dropify();
                              }
                              
                               
                            })
                            .catch(function(err){
                              console.log('Error', err.code);
                            })

}


function btnUpdate(cursoKey){
  console.log("-***btnSave**-");
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
     $('#fieldNone').modal('open');  
  }else { 
     const FBRefaux =firebase.database().ref().child('curso/'+cursoKey); 
     console.log('FBRef:', FBRefaux);
     actualizarInfo(FBRefaux,name,type,date,img,description);
  }
}


function btnUpdate2(cursoKey){
  
  console.log("-***btnSave**-");
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
     $('#fieldNone').modal('open');
  }else { 
     const FBRefaux =firebase.database().ref().child('curso/'+cursoKey); 
     console.log('FBRef:', FBRefaux);   
     actualizarInfo(FBRefaux,name,type,date,img,description);
  }
}



function btnSave(){
  console.log("-***btnSave**-");
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
     $('#fieldNone').modal('open');  
  }else { 
     const FBRefaux =firebase.database().ref().child('curso/'); 
     console.log('FBRef:', FBRefaux);
     guardarInfo(FBRefaux,name,type,date,img,description);
  }
}


function btnSave2(){
  
  console.log("-***btnSave**-");
  var name = $('#last_name2').val();
  var type = $('#type_name2').val();  
  var date = $('#date_name2').val();
  var description = $('#description_name2').val();
  var img =  imagenName;

  console.log("DATA ");
  console.log("name: ",name);
  console.log("type: ",type);
  console.log("date: ",date);
  console.log("img: ",img);
  console.log("description: ",description);

  if (name == "" || type_name == "" || date == "" || img == "" || description == "" || img == "" ){
     console.log("vacio ");  
     $('#fieldNone').modal('open');
  }else { 
     const FBRefaux =firebase.database().ref().child('curso/'); 
     console.log('FBRef:', FBRefaux);   
     guardarInfo(FBRefaux,name,type,date,img,description);
  }
}


function guardarInfo(FBRefaux,name, type,date,imgName,description){ 
   var aux= FBRefaux.push({
    name: name,
    type: type,
    date: date,
    img: null,
    description: description
    });
   
    console.log('Guardado');
   

   
    imgName = Math.floor((Math.random() * 100000000) + 1) + '_' + imgName ;
    console.log('imgName',imgName);

    $('#fieldGood').modal('open');
    var cursoKeyAux = aux.getKey();
    console.log("push key:", cursoKeyAux);
    sessionStorage.setItem("curso", "cursoKeyAux");

    var storageRef = firebase.storage().ref('cursos/' + imgName);

    // upload file

    var task = storageRef.put(file);

    task.on('state_changed',

        function progress(snapshot){
            var porcentaje = (snapshot.bytesTransferred/snapshot.totalBytes ) * 100;
            console.log("%:", porcentaje);
        },

        function error(err){

        },

        function complete(){ 
          envio = true;
          console.log("envio:",envio);
          $('#fieldGood').modal('open');
        }
    );


   // page('/curso');

}

function actualizarInfo(FBRefaux,name, type,date,img,description){ 
   var aux= FBRefaux.update({
    name: name,
    type: type,
    date: date,
    img: img,
    description: description
    });
    console.log('Actualizado');
    $('#fieldGood').modal('open');
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
function EventGood(event){
    event.preventDefault();
    location.reload();
    console.log('good');
}



