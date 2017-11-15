
var config = {
        apiKey: "AIzaSyD3_Luo8UG28Hy52ELXHwXnMfm5nori6lM",
        authDomain: "lore-ddeb0.firebaseapp.com",
        databaseURL: "https://lore-ddeb0.firebaseio.com",
        projectId: "lore-ddeb0",
        storageBucket: "lore-ddeb0.appspot.com",
        messagingSenderId: "945381530197"
      };

firebase.initializeApp(config);

$(document).foundation()

$(document).ready(function (){
    
   

});

$('#btnSend').click(function(){

    var name = $('#name').val();
    var lastName = $('#lastName').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var id = Math.floor((Math.random() * 10000000) + 1);
    var rut = $('#rut').val();

    console.log("DATA ");
    console.log("name: ",name);
    console.log("lastName: ",lastName);
    console.log("phone: ",phone);
    console.log("email: ",email);
    console.log("rut: ",rut);

    if (name == "" || lastName == "" || phone == "" || email == "" || rut == "" ){
       console.log("vacio ");  
       alert("Debes Completar los campos pedidos");
    }else {
       writeUserData (id,name,lastName,phone,email,rut);
    }

});


function writeUserData(userId, name, lastName, phone, email, rut) {
  firebase.database().ref('participantes/' + userId).set({
    name: name,
    lastname: lastName,
    phone: phone,
    email: email,
    rut: rut
  });
  alert("Gracias por Participar");
}



