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
var claseKey = params.get('clase'); 

var FBRef;

$(document).ready(function() {

  console.log( "ready Clases!" );   
  console.log( "cursoKey" ,cursoKey);   
  console.log( "claseKey" ,claseKey); 

  if (cursoKey == null && claseKey == null) {
    empty();
    console.log("1.cursoKey == null && claseKey == null");
   
  }else if(cursoKey != null && claseKey == null) {
    FBRef = firebase.database().ref().child('curso/'+cursoKey+'/clases');
    newClass();
    console.log("2.cursoKey != null && claseKey == null");



  }else if (cursoKey != null && claseKey != null) {
    console.log("3.cursoKey != null && claseKey != null");
   
  }else if (cursoKey == null && claseKey != null) {
   console.log("4.cursoKey == null && claseKey != null");
  }
  
/*
  if (cursoKey == null) {
    FBRef = firebase.database().ref().child('curso/');
    loadImagesEmpty();

  } else {
    FBRef = firebase.database().ref().child('curso/'+cursoKey); 
    loadImages();

  }
  */   
});



function empty() {
  document.getElementById('addPhoto').innerHTML = `
        <br>
        <h3 style="padding: 10px;" > Error 404</h3>
      `; 
}

function newClass() {

  document.getElementById('addPhoto').innerHTML = ` 
     
      <div class="row" style="padding-top:80px; padding-left:20px; padding-right:20px;">
          <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="card">
              <div class="card-image">
                <img src="assets/image2.png" s>
              </div>
              <div class="card-content">
                <div class="row">
                    <div class="input-field col s12">
                      <input id="last_name" type="text" class="validate">
                      <label for="last_name">Nombre</label>
                    </div>
                    <div class="input-field col  s12">
                      <input id="video_name" type="text" class="validate">
                      <label for="video_name">video</label>
                    </div>
                    <div class="input-field col s12">
                      <input id="pdf_name" type="text" class="validate">
                      <label for="pdf_name">PDF</label>
                    </div>
                    <div class="input-field col  s12">
                      <input id="url_name" type="text" class="validate">
                      <label for="url_name">Url</label>
                    </div>
                  </div>
                </div>
                <div class="card-action center-align">
                  <a id="btnSend" class="waves-effect waves-light btn">Guardar</a>
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


    $('#fieldGood').find('#close-modal').click(function(event){
        event.preventDefault();
        location.reload();
        console.log('good');
    });

    $('#btnSend').click(function(){

        var name = $('#last_name').val();
        var video = $('#video_name').val();  
        var pdf = $('#pdf_name').val();   
        var url = $('#url_name').val();
        var img = "https://firebasestorage.googleapis.com/v0/b/e-learning-62f78.appspot.com/o/image2.png?alt=media&token=5c4c772a-d383-483c-808d-5f1c033d2360";
        console.log("DATA ");
        console.log("name: ",name);
        console.log("video: ",video);
        console.log("pdf: ",pdf);
        console.log("url: ",url);
        console.log("img: ",img);


        if (name == "" || video == "" || pdf == "" || url == ""){
           console.log("vacio ");  
     

        }else { 
           guardarInfo(name,video,pdf,url,img);
        }
        
    });

    $(document).on($.modal.CLOSE,function(){
     console.log('cerrar modal');
        location.reload(true);
    })

    function guardarInfo(name, video, pdf, url, img){ 
        FBRef.push({
        name: name,
        video: video,
        pdf: pdf,
        url: url,
        img: img
        });
        $('#fieldGood').modal('open');
    }
}









