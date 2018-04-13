var page = require('page');

var yo = require('yo-yo');
var empty = require('empty-element');
var templateEmpty = require('./templateEmpty');



var imagesFBRef = firebase.database().ref().child('curso').orderByKey();
var paginaActual = 1;


page('/', function(ctx,next){	
	load();
});

function load(){
	var main = document.getElementById('main-container');
	empty(main).appendChild(templateEmpty);

    $('#btnLogin').click(function(){
     	const txtEmail = $('#txtEmail').val();
     	const txtPassword = $('#txtPassword').val();
      	console.log("Enviar:", txtPassword , txtEmail);
      	const auth = firebase.auth();
      	const promise = auth.signInWithEmailAndPassword(txtEmail,txtPassword);
		promise.catch(e => console.log(e.message));
  
    });

    $('#btnLogout').click(e =>{
    	firebase.auth().signOut();
    	console.log("login out");	
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			console.log('Ha sucedido');

			window.open("./home","_self");

		}else {
			console.log('Not logged in');
		}
	});


	
	console.log("login page");	

}



