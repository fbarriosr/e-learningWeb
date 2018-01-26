 
  var config = {
    apiKey: "AIzaSyBtIwxxhd-VUEdje1Q8FhHkhWc3-ihsmUQ",
    authDomain: "fotogramashow.firebaseapp.com",
    databaseURL: "https://fotogramashow.firebaseio.com",
    projectId: "fotogramashow",
    storageBucket: "fotogramashow.appspot.com",
    messagingSenderId: "454182483820"
  };
  firebase.initializeApp(config);

 // Get a reference to the storage service, which is used to create references in your storage bucket


  var imagesFBRef = firebase.database().ref().child('registroConcursante');

  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('exampleFileUpload');

  var imagenName = "";
  var downloadURL ="";




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



$( document ).ready(function() {
    console.log( "ready!" );
    $('#fieldNone').hide();
    $('#fieldGood').hide();
    $('#fieldRutMailMalo').hide();
    $('#fieldRutMalo').hide();
    $('#fieldMailMalo').hide();

    $('#pagina1').show();
    $('#pagina2').hide();
});


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

    var id = Math.floor((Math.random() * 100000000) + 1);

    console.log("DATA ");
    console.log("name: ",name);
    console.log("lastName: ",lastName);
    console.log("rut: ",rut);
    console.log("email: ",email);


    if (name == "" || lastName == "" || rut == "" || email == ""  ){
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
                guardarInfoImagenes(name, lastName,rut,email,imagenName,downloadURL)
            });

           var dos = new Promise ((resolve,reject) => {
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

function guardarInfoImagenes(name, lastName,rut,email,imagenName,downloadURL){ 
    imagesFBRef.push({
    name: name,
    lastName: lastName,
    rut: rut,
    email: email,
    nameImagen: imagenName,
    urlImagen: downloadURL,
    v: "false",
    v_notP: "false",
    v_p_notW: "false",
    v_p_w: "false"
    }
  );
}





