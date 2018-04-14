var yo = require('yo-yo');

module.exports = function card(href,key,name,img,date){
	var hrefaux = href+key;
  	return yo`
  		<a href=${hrefaux} style="text-decoration:none;color:black;">
	        <div class="col s6 m4 l3" >
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
	    </a>
		`;
}