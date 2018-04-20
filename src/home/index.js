var page = require('page');
var yo = require('yo-yo');

var itemPorPagina = 12;
var referenceToOldestKey = true;

page('/', function(ctx,next){	
	load();
});

function load(ctx,next){
  referenceToOldestKey = true;
  console.log('----------Home page--------');
  loadHeader(); 
  loadPage();
  loadImages(itemPorPagina,referenceToOldestKey);
  loadBtnAdd();
  loadFooter();
  console.log('++++++++++Home page++++++++');  

  $(window).scroll(function() {
      if($(window).scrollTop() + $(window).height() == getDocHeight()) {
         //alert("bottom! ok");
        console.log("bottom! ok");
        referenceToOldestKey = sessionStorage.getItem("key");
        loadImages(itemPorPagina,referenceToOldestKey);
       }
  });  
}

function btnActios(){
  $('.curso').click(function(){ 
   const auxKey = $(this).attr("alt"); 
   console.log('btnCurso');
   console.log('key:', auxKey);
   sessionStorage.setItem("curso", auxKey);
   page('/curso');
  });
}

function loadFooter(){
  console.log('------------loadFooter() ------------');
  const empty = require('empty-element');
  const footer = document.getElementById('footer-container');
  const footerTemplate= require('./footer');
  empty(footer).appendChild(footerTemplate);
  console.log('************loadFooter() ************');
}

function loadHeader(){
  console.log('------------loadHeader() ------------');
  const empty = require('empty-element'); 
  const headerTemplate= require('./header');
  const header = document.getElementById('header-container');
  empty(header).appendChild(headerTemplate('CURSOS'));
  console.log('************loadHeader() ************');
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

function loadBtnAdd(){
  console.log('------------loadBtnAdd() ------------');
  const content = document.getElementById('addPhoto');
  const btnAdd = require('./btnAdd');
  if (content != null) {
    content.appendChild(btnAdd('btnAdd'));
    $('#btnAdd').click(function(){ 
        var auxKey = "null"; 
        console.log('btnAdd');
        console.log('auxKey:', auxKey);
        sessionStorage.setItem("curso",auxKey);
        page('/curso');
    });
  }else {
    console.log('no hay un contenedor disponible');
  }
  console.log('************loadBtnAdd() ************');
}

function loadImages(item,referenceToOldestKey){
  console.log('------------loadImages() ------------');
  console.log('************loadImages() ************');
  console.log("total de datos a cargar: ",item);
  console.log("referenceToOldestKey If: ",referenceToOldestKey);
  if (referenceToOldestKey == true) {
    console.log('------------load Images referenceToOldestKey == true ------------');
    return firebase.database().ref().child('curso')
                            .orderByKey()
                            .limitToLast(item)
                            .once('value')
                            .then(function(result){
                              var datos = result.val();
                              if (datos == null){
                                console.log('No hay datos');
                                return [null, null,null];
                              }else {
                                console.log('Datos then:',datos);
                                var arrayOfKeys = Object.keys(datos)
                                     .sort()
                                     .reverse();
                                // transforming to array
                                var results = arrayOfKeys
                                   .map((key) => datos[key]);
                          
                                console.log('arrayOfKeys then1:',arrayOfKeys); 
                                console.log('results then1:',results );  

                                // storing reference
                                referenceToOldestKey = arrayOfKeys[arrayOfKeys.length-1];

                                console.log("referenceToOldestKey Inside: then1",referenceToOldestKey);
                                datos = results;  
                                return [datos, arrayOfKeys, referenceToOldestKey];
                              }
                            })
                            .then(function(datos){
                              const content = document.getElementById('addPhoto');
                              const templateEmpty = require('./templateEmpty');
                              if (datos[0] == null){
                               empty(content).appendChild(templateEmpty);
                               console.log('Datos then2:vacio'); 
                               sessionStorage.setItem("key","null");
                             
                              }else {
                             
                                const referenceToOldestKey = datos[2];
                                const datosRef = datos[0];
                                const arrayOfKeys = datos[1];
                  
                                console.log('Datos then2:',datosRef);
                                console.log('arrayOfKeys then2:',arrayOfKeys);
                                console.log('referenceToOldestKey then2:',referenceToOldestKey);

                                writeImage(datosRef, arrayOfKeys);

                                sessionStorage.setItem("key",referenceToOldestKey);
              
                              }            
                            })
                            .then(function()  {
                               btnActios();
                              
                            })
                            .catch(function(err){
                              console.log('Error', err.code);
                            })


  }else if (referenceToOldestKey == "null"){
    console.log('------------load Images !referenceToOldestKey ------------');

  }else {
    console.log('------------load Images referenceToOldestKey anothe value ------------');
    return firebase.database().ref().child('curso')
                            .orderByKey()
                            .endAt(referenceToOldestKey)
                            .limitToLast(item)
                            .once('value')
                            .then(function(result){
                              var datos = result.val();
                              if (datos == null){
                                console.log('No hay datos');
                                return null;
                              }else {
                                console.log('Datos then:',datos);
                                var arrayOfKeys = Object.keys(datos)
                                     .sort()
                                     .reverse();
                                // changing to reverse chronological order (latest first)
                                // & removing duplicate
                                var arrayOfKeys = Object.keys(datos)
                                   .sort()
                                   .reverse()
                                   .slice(1);
                                // transforming to array
                                var results = arrayOfKeys
                                   .map((key) => datos[key]);
                                // updating reference

                                // console.log('arrayOfKeys:',arrayOfKeys); 
                                console.log('loadData results:',results ); 

                                referenceToOldestKey = arrayOfKeys[arrayOfKeys.length-1];
                                datos = results;  
                                return [datos, arrayOfKeys, referenceToOldestKey];
                               }
                            })
                            .then(function(datos){
                              const content = document.getElementById('addPhoto');
                              const templateEmpty = require('./templateEmpty');
                              if (datos == null){
                               empty(content).appendChild(templateEmpty); 
                               sessionStorage.setItem("key","null");
                              }else {
                                const referenceToOldestKey = datos[2];
                                const datosRef = datos[0];
                                const arrayOfKeys = datos[1];
                  
                                console.log('Datos then2:',datosRef);
                                console.log('arrayOfKeys then2:',arrayOfKeys);
                                console.log('referenceToOldestKey then2:',referenceToOldestKey);
              
                                if (referenceToOldestKey == null){
                                  sessionStorage.setItem("key","null");
                                }else{
                                  writeImage(datosRef, arrayOfKeys);
                                  sessionStorage.setItem("key",referenceToOldestKey);
                                }
                              
                              }            
                            })
                            .then(function(){
                               btnActios();
                            })
                            .catch(function(err){
                              console.log('Error', err.code);
                            })
  }
}

function writeImage(datos, keys){
  const content = document.getElementById('addPhoto');
  const card = require('./card');
  var i =0;
  for (var key in datos){   
    content.appendChild(card(keys[i],datos[key].name,datos[key].img,datos[key].date));
    console.log("url",keys[key]);
    i++;
  } 
}

function getDocHeight() {
  var D = document;
  return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
}

