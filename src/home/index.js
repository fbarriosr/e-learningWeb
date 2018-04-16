var page = require('page');

var yo = require('yo-yo');
var empty = require('empty-element');
var templateEmpty = require('./templateEmpty');
var btnAdd = require('./btnAdd');
var cursos = require('./cursos');
var card= require('./card');
var footerTemplate= require('./footer');

var header = document.getElementById('header-container');
var main = document.getElementById('main-container');
var footer = document.getElementById('footer-container');


var itemPorPagina = 12;
var referenceToOldestKey = true;
page('/', function(ctx,next){	
	load();
});

function load(ctx,next){
  
  referenceToOldestKey = true;
	console.log("Home page");	 
  headerLoad(); 

  loadPage();
  loadImages();
 
  footer.appendChild(footerTemplate);

  $('#btnAdd').click(function(){ 
   console.log('btnAdd');
   sessionStorage.setItem('curso', 'null');
   page('/curso');
   //window.open("curso","_self");
  });

}

function headerLoad(){

  var headerTemplate= require('./header');
  empty(header).appendChild(headerTemplate('CURSOS'));

}

function loadPage(){
  const aux = yo`
    <div class="container" >
    <div class="row">
          <div class="row" id="addPhoto" >
        
          </div>
      </div> 
    </div>
  `;

  main.appendChild(aux);

}

function loadImages(){
  var content = document.getElementById('addPhoto');
  
  console.log("referenceToOldestKey If: ",referenceToOldestKey);
  if (referenceToOldestKey == true) { // if initial fetch

  var imagesFBRef = firebase.database().ref().child('curso')
    .orderByKey()
    .limitToLast(itemPorPagina)

  imagesFBRef.once("value",function(snapshot){

    var datos = snapshot.val();

    var arrayOfKeys = Object.keys(snapshot.val())
         .sort()
         .reverse();
      
    // transforming to array
    var results = arrayOfKeys
       .map((key) => snapshot.val()[key]);
   // console.log('datos:',datos ); 
   // console.log('arrayOfKeys:',arrayOfKeys); 
   // console.log('results:',results );  

    // storing reference
    referenceToOldestKey = arrayOfKeys[arrayOfKeys.length-1];
    console.log("referenceToOldestKey Inside: ",referenceToOldestKey);
    datos = results;

    if (datos == null){
      empty(content).appendChild(templateEmpty ); 
   
    }else {
      writeImage(datos,arrayOfKeys);
    }

  });


}else if (!referenceToOldestKey){
  // para no recargar dos veces la image
   
}
else {
  var content = document.getElementById('addPhoto');

  console.log("referenceToOldestKey Inside: ",referenceToOldestKey);

  var imagesFBRef = firebase.database().ref().child('curso')
    .orderByKey()
    .endAt(referenceToOldestKey)
    .limitToLast(itemPorPagina)

  imagesFBRef.once("value",function(snapshot){

    var datos = snapshot.val();
    console.log('datos:',datos ); 
    var arrayOfKeys = Object.keys(snapshot.val())
         .sort()
         .reverse();
      
    // changing to reverse chronological order (latest first)
    // & removing duplicate
    var arrayOfKeys = Object.keys(snapshot.val())
       .sort()
       .reverse()
       .slice(1);
    // transforming to array
    var results = arrayOfKeys
       .map((key) => snapshot.val()[key]);
    // updating reference

    // console.log('arrayOfKeys:',arrayOfKeys); 
    //console.log('results:',results ); 

    referenceToOldestKey = arrayOfKeys[arrayOfKeys.length-1];

    datos = results;

    if (datos == null){
      empty(content).appendChild(templateEmpty ); 
    }else {
       writeImage(datos,arrayOfKeys);
    }
    

  });


}

}


function writeImage(datos, keys){
  var content = document.getElementById('addPhoto');
  var i =0;
  for (var key in datos){
    
    content.appendChild(card(keys[i],datos[key].name,datos[key].img,datos[key].date));
    console.log("url",keys[key]);
    i++;
  } 

  $('.curso').click(function(){ 
   const auxKey = $(this).attr("alt"); 
   console.log('btnCurso');
   console.log('auxKey:', auxKey);
   empty(main);
   
   sessionStorage.setItem("curso", auxKey);
   page('/curso');
  });
}

$(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() == getDocHeight()) {
         //alert("bottom! ok");
      
        console.log("bottom! ok");
        loadImages();
     }
    

 });


function getDocHeight() {
  var D = document;
  return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
  }

/*
$('.curso').click(function(){ 
 const auxKey = $('.curso').attr("alt"); 
 console.log('btnCurso');
 //console.log('key:', auxKey);
 //window.open("curso?curso="+auxKey,"_self");
 sessionStorage.setItem("curso", "auxKey");
 page('/curso');
});

$('#btnAdd').click(function(){ 
 console.log('btnAdd');
 sessionStorage.setItem("curso", "new Storage");
 page('/curso');
 //window.open("curso","_self");
});


    $('#btnAdd').click(function(){ 
     console.log('btnAdd');
     sessionStorage.setItem("curso", "new Storage");
     page.redirect('/curso');
     
     //window.open("curso","_self");
    });

  $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == getDocHeight()) {
           //alert("bottom!");
          loadImages();
          console.log("bottom!");
       }
      $('#btnAdd').click(function(){ 
     console.log('btnAdd');
     sessionStorage.setItem("curso", "new Storage");
     page('/curso');
     //window.open("curso","_self");
    });

   });

*/





