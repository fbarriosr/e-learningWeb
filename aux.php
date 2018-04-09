<div class="row " style="height: 60%vh; width: auto">
        <div id="pagina1" style="width: 100%;"> 
            <div id="divCenterH3" class="columns small-12 text-center align-self-middle " style="height: auto; width: 100%" >
                <br>
                <h3 style="color: #EE9319; padding: 10px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:700"></span> Captura el Mejor<br>Momento del Verano</h3>

                <h5 style="color: #EE9319; padding: 10px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:700"></span> Concurso Fotográfico </h5>
            </div> 
            <div id="columnsInfo" class="columns small-12  text-center align-self-middle"  style="height: auto; width: 100% ">  
                <label id="buttonFotosInside" for="exampleFileUpload" class="button" style="height: auto; ">SUBIR FOTO</label>
                <input type="file" id="exampleFileUpload" class="show-for-sr">
            </div> 
            <div id="columnsInfo" class="columns small-12  text-center align-self-middle"  style="height: auto; width: 100% ">  
                <progress value="0" max="100" id="uploader">0% </progress>
            </div> 
            <div id="divCenterH3" class="columns small-12 text-center align-self-middle " style="height: auto; width: 100%" >
                <br>
                <a href="bases.php">
                  <h6 style="color: #EE9319; padding: 10px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:400"></span> Bases del Concurso </h6>
                </a>
            </div> 
            <div class="row">
              <div class="columns small-12 medium-6" style=" text-align: center;">
              <img src="assets/logoBienestar.png" style="max-width: 200px; min-width: 150px">
            </div>

            <div class="columns small-12 medium-6 "  style=" text-align: center;">
              <img src="assets/logoCorbela.png" style="max-width: 200px; min-width: 150px">
          </div>
            </div>
            
        </div>
        <div id="pagina2">   
            <div id="divCenterH3" class="columns small-12 text-center align-self-middle " style="height: auto; width: 100%" >
                  <br>
                  <h3 style="color: #EE9319; height:auto;padding: 20px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:700"></span> Ingresa tus datos</h3>
            </div> 
            <div class="row" id="rowFillCenter" style="height: auto;">
                <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle"  style="height:40px;margin-top:30px;  ">  
                   <input type="text" id="name" class="middle-label" placeholder="Nombres" style="height:100%;">
            
                </div> 
                <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle" style="height:40px;" >     
                   <input type="text" id="lastName" class="middle-label" placeholder="Apellidos" style="height:100%;">
                </div> 
                <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle" style="height:40px;" >     
                    <input type="text" id="rut"  class="middle-label input_rut"  placeholder="Rut"  style="height:100%;">
                </div> 
                <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle"  style="height:40px; ">  
                   <input type="email" id="email" class="middle-label" placeholder="E-mail" style="height:100%;">     
                </div> 
        
                <div id="butonCol" class="columns small-12  text-center align-self-middle" style="margin-bottom: 20px;" >  
                     <button  id="btnSend" type="button" class="button" style="width: 120px; font-size:22px;  font-family: 'Open Sans', sans-serif;color: white"> Participar</button>
                </div>
            </div>
            <div id="fieldNone" class="modal">
                  <p style="text-align: center;">Estimado Debes Ingresar Todos los Campos.</p>
            </div>

            <div id="fieldGood" class="modal">
                  <p style="font-weight: bolder; text-align: center;">Gracias por Participar. <br></p>
                   <p style="font-weight: bolder; text-align: center;">Tu foto será revisada antes de publicarse. <br></p>
                  <p style="font-weight: bolder; text-align: center;">Mira las Fotos que están participan en el <a href="http://concursos.beneficioslaaraucana.cl/participantesVerano2018/" target="_blank">Sitio</a></p>
            </div>

            <div id="fieldRutMalo" class="modal">
                  <p >Ingrese un rut válido</p>
            </div>

            <div id="fieldMailMalo" class="modal">
                  <p >Ingrese un mail válido.</p>
            </div>
            <div id="fieldRutMailMalo" class="modal">
                  <p >Ingrese un rut y un mail válidos</p>
            </div>
        </div>
      </div> 




       <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Placeholder" id="first_name" type="text" class="validate">
              <label for="first_name">First Name</label>
            </div>
           
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input disabled value="I am not editable" id="disabled" type="text" class="validate">
              <label for="disabled">Disabled</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>
          
        </form>
      </div>







var config = {
  apiKey: "AIzaSyDaQw-Beks8NTus_SKVJ-pqjS_C7CIcBuo",
  authDomain: "concursofotosparaplus.firebaseapp.com",
  databaseURL: "https://concursofotosparaplus.firebaseio.com",
  projectId: "concursofotosparaplus",
  storageBucket: "concursofotosparaplus.appspot.com",
  messagingSenderId: "376306571600"
};

  firebase.initializeApp(config);

 // Get a reference to the storage service, which is used to create references in your storage bucket


  var imagesFBRef = firebase.database().ref().child('registroConcursante');
  var imagenName = "";
  var downloadURL ="";
  var envio = false;
/*
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('exampleFileUpload');

  var imagenName = "";
  var downloadURL ="";

  var envio = false;


  // Listen for file selection

  fileButton.addEventListener('change', function(e){

    // get file

    var file = e.target.files[0];

    var nameRand = Math.floor((Math.random() * 100000000) + 1);

    imagenName = nameRand+'_'+file.name;
    // create a storage ref

    var storageRef = firebase.storage().ref('ConcursoFotosVerano2018/' + imagenName);

    // upload file

    var task = storageRef.put(file);

    task.on('state_changed',

        function progress(snapshot){
            var porcentaje = (snapshot.bytesTransferred/snapshot.totalBytes ) * 100;
            uploader.value = porcentaje;
        },

        function error(err){

        },

        function complete(){
            downloadURL = task.snapshot.downloadURL;
            $('#pagina2').show();
            $('#pagina1').hide();
        }
    );

  });

*/

$(document).ready(function() {
    console.log( "ready!" );   
    paginaUno();
     
});

function paginaDos() {

       document.getElementById('addPhoto').innerHTML = ` 
          <div id="divCenterH3" class="col s-12 text-center center-align " style="height: auto; width: 100%" >
                <br>
                <h3 style="color: #EE9319; height:auto;padding: 20px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:700"></span> Ingresa tus datos</h3>
          </div> 

        <div class="row">
        <form class="col s12">
      
          <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input id="name" type="text" class="validate">
              <label for="name">Nombres</label>
          </div>
          <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input id="lastName" type="text" class="validate">
              <label for="lastName">Apellidos</label>
          </div>

          <div class="input-field col s12">
              <i class="material-icons prefix">folder_shared</i>
              <input id="rut" type="text" class="validate">
              <label for="rut">Rut</label>
          </div>
          

          <div class="input-field col s12">
              <i class="material-icons prefix">mail</i>
              <input id="email" type="email" class="validate">
              <label for="email">E-mail</label>
          </div>
          <div class="input-field col s12">
              <i class="material-icons prefix">phone</i>
              <input id="phone" type="tel" class="validate">
              <label for="phone">Telephone</label>
          </div>
          
        </form>
      
        <div id="butonCol" class="col s12  text-center center-align" style="margin-bottom: 20px;" >  
            <label id="btnSend"  class="btn hoverable" style="width: 120px; font-size:22px;  font-family: 'Open Sans', sans-serif;color: white">Participar</label>
        </div>


        <div id="fieldNone" class="modal">
            <p style="text-align: center;">Estimado Debes Ingresar Todos los Campos.</p>
        </div>

        <div id="fieldGood" class="modal">
            <p style="font-weight: bolder; text-align: center;">Gracias por Participar. <br></p>
            <p style="font-weight: bolder; text-align: center;">Tu foto será revisada antes de publicarse. <br></p>
            <p style="font-weight: bolder; text-align: center;">Mira las Fotos que están participan en el <a href="http://concursos.beneficioslaaraucana.cl/participantesVerano2018/" target="_blank">Sitio</a></p>
        </div>

        <div id="fieldRutMalo" class="modal">
            <p >Ingrese un rut válido</p>
        </div>

        <div id="fieldMailMalo" class="modal">
            <p >Ingrese un mail válido.</p>
        </div>
        <div id="fieldRutMailMalo" class="modal">
            <p >Ingrese un rut y un mail válidos</p>
        </div> 


       `;


      $('#fieldGood').find('#close-modal').click(function(event){
          event.preventDefault();
          location.reload();
          console.log('hola');
      });

      $('#btnSend').click(function(){

          var name = $('#name').val();
          var lastName = $('#lastName').val();  
          var rut = $('#rut').val();
          var email = $('#email').val();
          var phone = $('#phone').val();

          var id = Math.floor((Math.random() * 100000000) + 1);

          console.log("DATA ");
          console.log("name: ",name);
          console.log("lastName: ",lastName);
          console.log("rut: ",rut);
          console.log("email: ",email);
          console.log("phone: ",phone);


          if (name == "" || lastName == "" || rut == "" || email == "" || phone == ""  ){
             console.log("vacio ");  
            // alert("Debes Completar los campos pedidos");
             $('#fieldNone').modal('open');

          }else {
              
              var aux = $.rut.formatear(rut) 
              var es_valido = $.rut.validar(aux);
              var es_mail = validateEmail(email);

              if (es_valido && es_mail){
                 //alert('rut  y email valido');

                 //console.log("rut  y email valido");
                
                
                 var uno = new Promise ((resolve,reject) => {
                      guardarInfoImagenes(name, lastName,rut,email,phone,imagenName,downloadURL)
                  });

                 var dos = new Promise ((resolve,reject) => {
                     envio = true;
                     $('#fieldGood').modal('open');
                  });
                
                 Promise.all([uno,dos]);
                

              }else if (es_valido && !es_mail)
              {
                 $('#fieldMailMalo').modal('open');

              }else if (!es_valido && es_mail)
              {
                 $('#fieldRutMalo').modal('open');
              }else if (!es_valido && !es_mail)
              {
                $('#fieldRutMailMalo').modal('open');

              }
           
             //
           
          }

      });

      $(document).on($.modal.CLOSE,function(){
       console.log('cerrar modal');
       if (envio) {
          location.reload(true);
       }
      })



      function checkRut(rut) {
          // Despejar Puntos
          var valor = rut.value.replace('.','');
          // Despejar Guión
          valor = valor.replace('-','');
          
          // Aislar Cuerpo y Dígito Verificador
          cuerpo = valor.slice(0,-1);
          dv = valor.slice(-1).toUpperCase();
          
          // Formatear RUN
          rut.value = cuerpo + '-'+ dv
          
          // Si no cumple con el mínimo ej. (n.nnn.nnn)
          if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
          
          // Calcular Dígito Verificador
          suma = 0;
          multiplo = 2;
          
          // Para cada dígito del Cuerpo
          for(i=1;i<=cuerpo.length;i++) {
          
              // Obtener su Producto con el Múltiplo Correspondiente
              index = multiplo * valor.charAt(cuerpo.length - i);
              
              // Sumar al Contador General
              suma = suma + index;
              
              // Consolidar Múltiplo dentro del rango [2,7]
              if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
        
          }
          
          // Calcular Dígito Verificador en base al Módulo 11
          dvEsperado = 11 - (suma % 11);
          
          // Casos Especiales (0 y K)
          dv = (dv == 'K')?10:dv;
          dv = (dv == 0)?11:dv;
          
          // Validar que el Cuerpo coincide con su Dígito Verificador
          if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
          
          // Si todo sale bien, eliminar errores (decretar que es válido)
          rut.setCustomValidity('');
          return true;
      }

      function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
      }

      function guardarInfoImagenes(name, lastName,rut,email,phone,imagenName,downloadURL){ 
          imagesFBRef.push({
          name: name,
          lastName: lastName,
          rut: rut,
          email: email,
          phone: phone,
          nameImagen: imagenName,
          urlImagen: downloadURL,
          v: "false",
          v_notP: "false",
          v_p_notW: "false",
          v_p_w: "false",
          score: "0"
          }
        );
      }



}

function paginaUno() {

     document.getElementById('addPhoto').innerHTML = ` 

               <div id="divCenterH3" class="col s-12 text-center center-align " style="height: auto; width: 100%" >
                <br>
                <h3 style="color: #EE9319; height:auto;padding: 20px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:700"></span> Ingresa tus datos</h3>
          </div> 

        <div class="row">
        <form class="col s12">
      
          <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input id="name" type="text" class="validate">
              <label for="name">Nombres</label>
          </div>
          <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input id="lastName" type="text" class="validate">
              <label for="lastName">Apellidos</label>
          </div>

          <div class="input-field col s12">
              <i class="material-icons prefix">folder_shared</i>
              <input id="rut" type="text" class="validate">
              <label for="rut">Rut</label>
          </div>
          

          <div class="input-field col s12">
              <i class="material-icons prefix">mail</i>
              <input id="email" type="email" class="validate">
              <label for="email">E-mail</label>
          </div>
          <div class="input-field col s12">
              <i class="material-icons prefix">phone</i>
              <input id="phone" type="tel" class="validate">
              <label for="phone">Telephone</label>
          </div>
          
        </form>
      
        

        <div id="fieldNone" class="modal">
            <p style="text-align: center;">Estimado Debes Ingresar Todos los Campos.</p>
        </div>

        <div id="fieldGood" class="modal">
            <p style="font-weight: bolder; text-align: center;">Gracias por Participar. <br></p>
            <p style="font-weight: bolder; text-align: center;">Tu foto será revisada antes de publicarse. <br></p>
            <p style="font-weight: bolder; text-align: center;">Mira las Fotos que están participan en el <a href="http://concursos.beneficioslaaraucana.cl/participantesVerano2018/" target="_blank">Sitio</a></p>
        </div>

        <div id="fieldRutMalo" class="modal">
            <p >Ingrese un rut válido</p>
        </div>

        <div id="fieldMailMalo" class="modal">
            <p >Ingrese un mail válido.</p>
        </div>
        <div id="fieldRutMailMalo" class="modal">
            <p >Ingrese un rut y un mail válidos</p>
        </div> 

      <div class="col s12 center-align">

      <div id="columnsInfo" class="col s12  text-center center-align"  style="height: auto; width: 100% ">  
          <label id="buttonFotosInside" for="exampleFileUpload" class="btn hoverable" style="height: auto; width: 100% ">SUBIR FOTO</label>
          <input type="file" id="exampleFileUpload" class="hide">
      </div> 
      <div id="columnsInfo" class="col s12  text-center center-align"  style="height: auto; width: 100% ">  
          <progress value="0" max="100" id="uploader">0% </progress>
      </div>
      
      <div id="butonCol" class="col s12  text-center center-align" style="margin-bottom: 20px;" >  
            <label id="btnSend"  class="btn hoverable" style="width: 120px; font-size:22px;  font-family: 'Open Sans', sans-serif;color: white">Participar</label>
      </div>


      <div class="row">
          <div class="col s12 m4" style=" text-align: center;">
              <img src="assets/logoBienestar.png" style="max-width: 200px; min-width: 150px">
          </div>

          <div class="col s12 m4"  style=" text-align: center;">
              <a href="bases.php">
              <h6 style="color: #EE9319; padding: 40px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:400"></span> Bases del Concurso </h6>
            </a>
          </div>
          <div class="col s12 m4 "  style=" text-align: center; ">
              <img src="assets/logoCorbela.png" style="max-width: 200px; min-width: 150px">
          </div>
      </div>
  






    `;

    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('exampleFileUpload');

    

   

    // Listen for file selection

    fileButton.addEventListener('change', function(e){

      // get file

      var file = e.target.files[0];

      var nameRand = Math.floor((Math.random() * 100000000) + 1);

      imagenName = nameRand+'_'+file.name;
      // create a storage ref

      var storageRef = firebase.storage().ref('fotos/' + imagenName);

      // upload file

      var task = storageRef.put(file);

      task.on('state_changed',

          function progress(snapshot){
              var porcentaje = (snapshot.bytesTransferred/snapshot.totalBytes ) * 100;
              uploader.value = porcentaje;
          },

          function error(err){

          },

          function complete(){
              downloadURL = task.snapshot.downloadURL;
             // paginaDos();
             // $('#pagina2').show();
             // $('#pagina1').hide();
          }
      );

    });

}



/*
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('exampleFileUpload');

  var imagenName = "";
  var downloadURL ="";

  var envio = false;


  // Listen for file selection

  fileButton.addEventListener('change', function(e){

    // get file

    var file = e.target.files[0];

    var nameRand = Math.floor((Math.random() * 100000000) + 1);

    imagenName = nameRand+'_'+file.name;
    // create a storage ref

    var storageRef = firebase.storage().ref('ConcursoFotosVerano2018/' + imagenName);

    // upload file

    var task = storageRef.put(file);

    task.on('state_changed',

        function progress(snapshot){
            var porcentaje = (snapshot.bytesTransferred/snapshot.totalBytes ) * 100;
            uploader.value = porcentaje;
        },

        function error(err){

        },

        function complete(){
            downloadURL = task.snapshot.downloadURL;
            $('#pagina2').show();
            $('#pagina1').hide();
        }
    );

  });

*/



  var aux = firebase.database().ref().child('registroConcursante').orderByChild("rut").equalTo("16105158-6");
           aux.once("value",function(snapshot){

            var datos = snapshot.val();
    
            if (datos!= null){
              for (var key in datos){
                console.log('rut Exite name', datos[key].name);
              }
            }else{
              console.log('rut no Exite ');
            }
            

          })






