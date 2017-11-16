 
 var config = {
    apiKey: "AIzaSyCHLJh92WNK-HuAupRpjWFOJT_YrUK7voY",
    authDomain: "formularioumbrella.firebaseapp.com",
    databaseURL: "https://formularioumbrella.firebaseio.com",
    projectId: "formularioumbrella",
    storageBucket: "",
    messagingSenderId: "762083538754"
  };
  firebase.initializeApp(config);



$('#btnSend').click(function(){


    var name = $('#name').val();
    var lastName = $('#lastName').val();  
    var rut = $('#rut').val();
    var email = $('#email').val();

    var id = Math.floor((Math.random() * 10000000) + 1);

    console.log("DATA ");
    console.log("name: ",name);
    console.log("lastName: ",lastName);
    console.log("rut: ",rut);
    console.log("email: ",email);

    if (name == "" || lastName == "" || rut == "" || email == ""  ){
       console.log("vacio ");  
       alert("Debes Completar los campos pedidos");
    }else {
        
        var aux = $.rut.formatear(rut) 
        var es_valido = $.rut.validar(aux);
        var es_mail = validateEmail(email);

        if (es_valido && es_mail){
            alert('rut  y email valido');
            //writeUserData (id,name,lastName,rut,email);
              window.location.href = "./index2.html";

        }else if (es_valido && !es_mail)
        {
          alert('rut válido');

        }else if (!es_valido && es_mail)
        {
           alert('rut Invalido');
        }else if (!es_valido && !es_mail)
        {
          alert('rut y email inválido');

        }
     
       //
     
    }

});


function writeUserData(userId, name, lastName, rut, email) {
  firebase.database().ref('participantes/' + userId).set({
    name: name,
    lastname: lastName,
    rut: rut,
    email: email
  });
  

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


