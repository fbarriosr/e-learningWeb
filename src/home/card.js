var yo = require('yo-yo');

module.exports = function card(key,name,img,date){
  	return yo`
  		
	        <div class="col s6 m4 l3 curso"  alt=${key}>
	          <div class="card hoverable">
	            <div class="card-image">
	              <img src=${img}>
	            </div>
	            <div class="card-content">
	              <span class="card-title">${name}</span>
	              <p> ${date} </p>
	            </div>
	          </div>
	        </div>
	  
		`;
}