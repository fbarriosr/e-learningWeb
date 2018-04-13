var yo = require('yo-yo');

var templateEmpty = require('./templateEmpty');

module.exports = function writeImageDom(datos, itemPorPagina,numeroImagenes,inicio){
  if (numeroImagenes == 0){
     return templateEmpty;
  }else {

  	var resultado = `
  		<div class="container" >
			<div class="row">
	      		<div class="row" id="addPhoto" >
			        <div class="fixed-action-btn">
			         <a href="curso.php" class="btn-floating btn-large waves-effect waves-light" id="btnAdd"><i class="material-icons">add</i></a>
			      	</div>
			    </div>
  			</div> 
  		</div>
	  	
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
/*
    // load cartas
    for (var key in datos){
      if (i >= inicio && i< final){
      	   resultado += `
              <a href="curso.php?curso=`+key+`" style="text-decoration:none;color:black;">
                <div class="col s6 m4 l3" >
                  <div class="card hoverable">
                    <div class="card-image">
                      <img src="${datos[key].img}">
                    </div>
                    <div class="card-content">
                      <span class="card-title">${datos[key].name}</span>
                      <p>${datos[key].date}</p>
                    </div>
                  </div>
                </div>
              </a>
                  `;
       console.log("resultado: ",resultado);
       console.log("key: ",key);
      }
      i= i+1;  
    }
    */
     /*resultado += yo` </div>
				</div>
  			</div> 
  		</div> 
    `;*/

	return resultado;
   }
}