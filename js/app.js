 
 var config = {
    apiKey: "AIzaSyCc3e8WqDs22WxVlsNpMQZwab0B9my93TI",
    authDomain: "formulariomattel.firebaseapp.com",
    databaseURL: "https://formulariomattel.firebaseio.com",
    projectId: "formulariomattel",
    storageBucket: "formulariomattel.appspot.com",
    messagingSenderId: "202007361960"
  };
  firebase.initializeApp(config);


  $( document ).ready(function() {
    console.log( "ready!" );
    $('#fieldNone').hide();
    $('#fieldGood').hide();
    $('#fieldRutMailMalo').hide();
    $('#fieldRutMalo').hide();
    $('#fieldMailMalo').hide();

  });



  $('#btnSend').click(function(){


    var name = $('#name').val();
    var lastName = $('#lastName').val();  
    var rut = $('#rut').val();
    var email = $('#email').val();

    var premio1 = $('#premio1');
    var premio2 = $('#premio2');
    var premio3 = $('#premio3');
    var valorPremio = "";

    var id = Math.floor((Math.random() * 100000000) + 1);

    console.log("DATA ");
    console.log("name: ",name);
    console.log("lastName: ",lastName);
    console.log("rut: ",rut);
    console.log("email: ",email);

    if (premio1.is(":checked")) {
        console.log("Premio 1: " + "Niño");
        valorPremio = "Niño";
    }else if (premio2.is(":checked")) {
        console.log("Premio:2: " + "Niña");
        valorPremio = "Niña";
    }else if (premio3.is(":checked")) {
        console.log("Premio:3 " + "Juego de Mesa");
        valorPremio = "Juego de Mesa";
    }else {
        console.log("No Se eligio Premio ");
        valorPremio = "Sin Premio";

    }


    if (name == "" || lastName == "" || rut == "" || email == "" || valorPremio == "Sin Premio" ){
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
                writeUserData (id,name,lastName,rut,email,valorPremio);
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


function writeUserData(userId, name, lastName, rut, email, premio) {
  firebase.database().ref('participantes/' + userId).set({
    name: name,
    lastname: lastName,
    rut: rut,
    email: email,
    premio: premio
  });

}

function dos(){
    window.location.href = "index2.php";
}

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


