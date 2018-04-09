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

var imagesFBRef = firebase.database().ref().child('curso').orderByKey();
var paginaActual = 1;
$(document).ready(function() {
    console.log( "ready!" );   
    loadImages();
     
});


function loadImages(){
  imagesFBRef.on("value",function(snapshot){

    var datos = snapshot.val();
    // load paginador
    var itemPorPagina = 8;

    if (datos == null){
      document.getElementById('addPhoto').innerHTML = `
        <div class="fixed-action-btn">
         <a href="curso.php" class="btn-floating btn-large waves-effect waves-light" id="btnAdd"><i class="material-icons">add</i></a>
       </div>
        <br>
        <h3 style="padding: 10px;" > No hay cursos disponibles</h3>
      `;  

      paginato(0,1);

    }else {

      var numeroImagenes = Object.keys(datos).length;
      var numeroPaginas = Math.ceil(numeroImagenes/itemPorPagina) ;
      console.log("numeroImagenes",numeroImagenes);
      console.log("itemPorPagina",itemPorPagina);
      console.log("numeroPaginas",numeroPaginas);
       
      paginato(numeroPaginas,paginaActual);
      writeImageDom(datos,itemPorPagina,numeroImagenes,0);
      
      $('#btnRight').click(function(){
        if (paginaActual == numeroPaginas){
        }else {
          var aux = `#pag_`+paginaActual;
          $(aux).removeClass("active");
          paginaActual = paginaActual +1;
          var inicioItems = itemPorPagina * (paginaActual-1 )  ;
          console.log("btnRight");
          console.log("paginaActual", paginaActual);
          var aux = `#pag_`+paginaActual;
          $(aux).addClass("active");
          writeImageDom(datos,itemPorPagina,numeroImagenes,inicioItems);
        }
      });

      $('#btnLeft').click(function(){
          if (paginaActual == 1){
          }else {
            var aux = `#pag_`+paginaActual;
            $(aux).removeClass("active");
            paginaActual = paginaActual -1;
            var inicioItems = itemPorPagina * (paginaActual-1 ) ;
            console.log("btnLeft");
            console.log("paginaActual", paginaActual);
            var aux = `#pag_`+paginaActual;
            $(aux).addClass("active");
            writeImageDom(datos,itemPorPagina,numeroImagenes,inicioItems);
          }
      });

      
    }
  })
}




function paginato(numeroPaginas, paginaActual){
  if(numeroPaginas == 0 | numeroPaginas == 1)
  {
    document.getElementById('paginas').innerHTML = "";
    return 0 ;  
  } else {
    var resultado = "";
    var liPaginas ="";
    console.log("numeroPaginas",numeroPaginas);
    console.log("paginaActual",paginaActual);
    for (var i = 1; i <= numeroPaginas; i++){
      if (i == paginaActual){
        liPaginas += `<li id="pag_`+i+`" class="active"><a >`+i+`</a></li>`;
      }else {
        liPaginas += `<li id="pag_`+i+`" class="waves-effect"><a>`+i+`</a></li>`;
      } 
    }
    resultado = `<ul class="pagination">
                    <li class="waves-effect">
                      <a id="btnLeft"><i class="material-icons">chevron_left</i></a>
                    </li>`
                      + liPaginas+`
                    <li class="waves-effect">
                      <a id="btnRight" ><i class="material-icons">chevron_right</i></a>
                    </li>
                </ul>`;


    document.getElementById('paginas').innerHTML = resultado;
  }
}

function writeImageDom(datos, itemPorPagina,numeroImagenes,inicio){
  if (numeroImagenes == 0){
      document.getElementById('addPhoto').innerHTML = "";
  }else {
    var resultado = `
        <div class="fixed-action-btn">
         <a href="curso.php" class="btn-floating btn-large waves-effect waves-light" id="btnAdd"><i class="material-icons">add</i></a>
       </div>
       <div class="row" style="padding-top:80px; padding-left:20px; padding-right:20px;">
    `;
    var key ="";
    var i = 0;
    var final = 0;
    if ( (inicio+itemPorPagina)>numeroImagenes){
      final = numeroImagenes; 
    } else {
      final = inicio+itemPorPagina;
    }
    console.log('final', final);
    console.log('inicio', inicio);

    // load cartas
    for (var key in datos){
      if (i >= inicio && i< final){
        resultado += `
                      <a href="curso.php?curso=`+key+`" style="text-decoration:none;color:black;">
                        <div class="col s6 m4 l3" >
                          <div class="card hoverable">
                            <div class="card-image">
                              <img src="`+datos[key].img+`">
                            </div>
                            <div class="card-content">
                              <span class="card-title">`+datos[key].name+`</span>
                              <p> `+datos[key].date+` </p>
                            </div>
                          </div>
                        </div>
                      </a>
                  `;

       console.log("url",key);
      }
      i= i+1;  
    }
    resultado += ` </div>`;

    document.getElementById('addPhoto').innerHTML = resultado;
  } 
}







