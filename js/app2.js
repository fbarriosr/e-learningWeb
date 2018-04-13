// Initialize Firebase
var config = {
  apiKey: "AIzaSyAP7YCpyEuV3p-mJUGnKVMb17j_0TMkbEo",
  authDomain: "e-learning-62f78.firebaseapp.com",
  databaseURL: "https://e-learning-62f78.firebaseio.com",
  projectId: "e-learning-62f78",
  storageBucket: "e-learning-62f78.appspot.com",
  messagingSenderId: "482827545650"
};
firebase.initializeApp(config);



var url = window.location.href;
let params = new URL(url).searchParams;
var cursoKey = params.get('curso'); 

var FBRef;

$(document).ready(function() {


    console.log( "ready Clases!" );   
    console.log( "cursoKey" ,cursoKey);   

    if (cursoKey == null) {
      FBRef = firebase.database().ref().child('curso/');
      loadImagesEmpty();

    } else {
      FBRef = firebase.database().ref().child('curso/'+cursoKey); 
      loadImages();



    }



     
});

function loadImagesEmpty() {

  document.getElementById('addPhoto').innerHTML = ` 
    <div class="row " style="padding-top:80px; padding-left:20px; padding-right:20px;">
        <div class="col s12 hide-on-med-and-up">
          <div class="card">
            <div class="card-image">
              <img src="assets/image1.png">
            </div>
            <div class="card-content">
              <div class="row">
                  <div class="input-field col s12">
                    <input id="last_name" type="text" class="validate">
                    <label for="last_name">Nombre</label>
                  </div>
                  <div class="input-field col  s12">
                    <input id="type_name" type="text" class="validate">
                    <label for="type_name">Tipo</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="date_name" type="text" class="datepicker">
                    <label for="date_name">Fecha</label>
                  </div>
                  <div class="input-field col  s12">
                    <input id="description_name" type="text" class="validate">
                    <label for="description_name">Descripción</label>
                  </div>
                </div>
              </div>
              <div class="card-action center-align">
                <a id="btnSave" class="waves-effect waves-light btn">Guardar</a>
              </div>
            </div>    
          </div>
        </div>
        <div class="col s12 center-align ">
          <div class="card horizontal hide-on-small-only">
            <div class="card-image ">
              <img src="assets/image1.png">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col m4 l6">
                      <input id="last_name2" type="text" class="validate">
                      <label for="last_name">Nombre</label>
                    </div>
                    <div class="input-field col  m4 l6">
                      <input id="type_name2" type="text" class="validate">
                      <label for="type_name">Tipo</label>
                    </div>
                    <div class="input-field col m4 l6">
                      <input id="date_name2" type="text" class="datepicker">
                      <label for="date_name">Fecha</label>
                    </div>
                    <div class="input-field col m12 l6">
                      <input id="description_name2" type="text" class="validate">
                      <label for="description_name">Descripción</label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-action">
                <a  id="btnSave2" class="waves-effect waves-light btn" >Guardar</a>
              </div>
            </div>
          </div>
        </div>    
      </div>
      <div id="fieldNone" class="modal">
          <p style="text-align: center;">Estimado Debes Ingresar Todos los Campos.</p>
      </div>
       <div id="fieldGood" class="modal">
          <p style="font-weight: bolder; text-align: center;">Dato Ingresado. <br></p>
      </div>

  `;
 
  $('#btnSave').click(function(){

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

  });

  $('#btnSave2').click(function(){

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

  });

  $('#fieldGood').find('#close-modal').click(function(event){
      event.preventDefault();
      location.reload();
      console.log('good');
  });

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
      window.open("curso.php?curso="+cursoKeyAux,"_self");
  }


            
  $(function(){
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
    });

}

function loadImages() {

  FBRef.on("value",function(snapshot){
    var datos = snapshot.val();
    var claseKey = null;
    if (datos == null){
      document.getElementById('addPhoto').innerHTML = `
        <br>
        <h3 style="padding: 10px;" > Error de la key</h3>
      `;  
    }else {
    console.log("Curso key",cursoKey); 
    console.log("nombre Curso",datos.name);
    console.log("datos Curso",datos);
   
    var resultado = ` 
     <div class="fixed-action-btn">
       <a id="btnAdd" class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></a>
      </div>

      <div class="row " style="padding-top:80px; padding-left:20px; padding-right:20px;">
          <div class="col s12 hide-on-med-and-up">
            <div class="card">
              <div class="card-image">
                <img src="`+datos.img+`"> 
              </div>
              <div class="card-content">
                <div class="row">
                    <div class="input-field col s12">
                      <input id="last_name" type="text" class="validate">
                      <label for="last_name">`+datos.name+`</label>
                    </div>
                    <div class="input-field col  s12">
                      <input id="type_name" type="text" class="validate">
                      <label for="type_name">`+datos.type+`</label>
                    </div>
                    <div class="input-field col s12">
                      <input id="date_name" type="text" class="datepicker">
                      <label for="date_name">`+datos.date+`</label>
                    </div>
                    <div class="input-field col  s12">
                      <input id="description_name" type="text" class="validate">
                      <label for="description_name">`+datos.description+`</label>
                    </div>
                  </div>
                </div>
                <div class="card-action center-align">
                  <a id="btnUpdate" class="waves-effect waves-light btn">Actualizar</a>
                </div>
              </div>    
            </div>
          </div>
          <div class="col s12 center-align ">
            <div class="card horizontal hide-on-small-only">
              <div class="card-image " style="background-color:transparent;">
                <img src="`+datos.img+`">
                <div class="file-field input-field" style="padding-left:10px;padding-right:10px;">
                  <div class="btn btn-floating btnImage">
                    <i class="material-icons">image</i>
                    <input type="file" (change)="onFileSelection($event)">
                  </div>
                  <div class="file-path-wrapper">
                    <input id="imageInputLbl" class="file-path validate" type="text">
                  </div>
                   
                </div>
                <div  id= "progressImage" style="padding-left:20px;padding-right:20px;">
                  <div class="progress ">
                      <div class="determinate" style="width: 70%"></div>
                  </div> 
                </div>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <form class="col s12">
                    <div class="row">
                    
                      <div class="input-field col m4 l6">
                        <input id="last_name2" type="text" class="validate">
                        <label for="last_name">`+datos.name+`</label>
                      </div>
                      <div class="input-field col  m4 l6">
                        <input id="type_name2" type="text" class="validate">
                        <label for="type_name">`+datos.type+`</label>
                      </div>
                      <div class="input-field col m4 l6">
                        <input id="date_name2" type="text" class="datepicker">
                        <label for="date_name">`+datos.date+`</label>
                      </div>
                      <div class="input-field col m12 l6">
                        <input id="description_name2" type="text" class="validate">
                        <label for="description_name">`+datos.description+`</label>
                      </div>
                    </div>

                  </form>
                </div>
                <div class="card-action">
                  <a  id="btnUpdate2" class="waves-effect waves-light btn" >Actualizar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fieldNone" class="modal">
            <p style="text-align: center;">Estimado Debes Ingresar Todos los Campos.</p>
        </div>
         <div id="fieldGood" class="modal">
            <p style="font-weight: bolder; text-align: center;">Dato Ingresado. <br></p>
        </div>
  
    `;

    if (datos.clases != null){
      resultado += `
          <div class="col s12 left-align">
           <h3>Clases</h3>
          </div> 
          <div class="row" style="padding-top:80px; padding-left:20px; padding-right:20px;">
        `;
      for (var key in datos.clases){  
        resultado += `
            <a href="clase.php?curso=`+cursoKey+`&clase=`+key+`" style="text-decoration:none;color:black;">
              <div class="col s6 m3" >
                <div class="card hoverable">
                  <div class="card-image">
                    <img src="`+datos.clases[key].img+`">  
                  </div>
                  <div class="card-content">
                    <span class="card-title">`+datos.clases[key].name+`</span>
                  </div>
                </div>
              </div>
            </a>
        `;
      }
      resultado += ` </div>  `;
    } 

     document.getElementById('addPhoto').innerHTML = resultado;

      $('#progressImage').hide();
        $('#imageInputLbl').hide();

    
   
    $('#btnUpdate').click(function(){

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
 
    });

    $('#btnUpdate2').click(function(){

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

    });

    $('#fieldGood').find('#close-modal').click(function(event){
        event.preventDefault();
        location.reload();
        console.log('good');
    });

    function guardarInfo(name, type,date,img,description){ 
        FBRef.update({
        name: name,
        type: type,
        date: date,
        img: img,
        description: description
        });

        console.log('Guardado');
        $('#fieldGood').modal('open');
    }

    $('#btnAdd').click(function(){
      var poto = "watos";
      console.log("btnAdd watos");
      if (claseKey != null) {
        window.open("clase.php?curso="+cursoKey+"&clase="+claseKey,"_self");
      }else {
        window.open("clase.php?curso="+cursoKey,"_self");
      }
      
    });


    $(function(){
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
    });
            
    }
  })


}





