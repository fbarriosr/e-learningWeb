var yo = require('yo-yo');

module.exports = function newCurso(img,name,type_name,date_name,description_name,id,btnName){
var id2 = id +"2";
if (img == null) {
	img = "";
}else {
   //img = "https://definicion.de/wp-content/uploads/2013/11/raton.jpg";
}

  	return yo`
  		<div class="row " style="padding-top:80px; padding-left:20px; padding-right:20px;">
	    	<div class="col s12 hide-on-med-and-up">
	          <div class="card">
	            <div class="card-image">
	              <img src=${img}>
	            </div>
	            <div class="card-content">
	              <div class="row">
	                  <div class="input-field col s12">
	                    <input id="last_name" type="text" class="validate">
	                    <label for="last_name">${name}</label>
	                  </div>
	                  <div class="input-field col  s12">
	                    <input id="type_name" type="text" class="validate">
	                    <label for="type_name">${type_name}</label>
	                  </div>
	                  <div class="input-field col s12">
	                    <input id="date_name" type="text" class="datepicker">
	                    <label for="date_name">${date_name}</label>
	                  </div>
	                  <div class="input-field col  s12">
	                    <input id="description_name" type="text" class="validate">
	                    <label for="description_name">${description_name}</label>
	                  </div>
	              </div>
	              <div class="card-action center-align">
	                <a id=${id} class="waves-effect waves-light btn">${btnName}</a>
	              </div>
	            </div>    
	          </div>
	        </div>

	         <div class="col s12 center-align ">
	          <div class="card horizontal  hide-on-small-only">
	            <div class="card-image ">

	             <input type="file" id="input2" class="dropify" data-height="300" data-width="300">
	            </div>
	            <div class="card-stacked">
	              <div class="card-content">
	              	<img src=${img} width=100px>
	                <form class="col s12">
	                  <div class="row">
	                    <div class="input-field col m4 l6">
	                      <input id="last_name2" type="text" class="validate">
	                      <label for="last_name">${name}</label>
	                    </div>
	                    <div class="input-field col  m4 l6">
	                      <input id="type_name2" type="text" class="validate">
	                      <label for="type_name">${type_name}</label>
	                    </div>
	                    <div class="input-field col m4 l6">
	                      <input id="date_name2" type="text" class="datepicker">
	                      <label for="date_name">${date_name}</label>
	                    </div>
	                    <div class="input-field col m12 l6">
	                      <input id="description_name2" type="text" class="validate">
	                      <label for="description_name">${description_name}</label>
	                    </div>
	                  </div>
	                </form>
	              </div>
	              <div class="card-action">
	                <a  id=${id2}  class="waves-effect waves-light btn" >${btnName}</a>
	              </div>
	            </div>
	          </div>
	        </div>    
	        <div id="fieldNone" class="modal">
	          	<p style="text-align: center;">Estimado Debes Ingresar Todos los Campos.</p>
		    </div>
		    <div id="fieldGood" class="modal">
		        <p style="font-weight: bolder; text-align: center;">Dato Ingresado.</p>
		    </div>

	       
     	</div>

  

		`;
}



