var yo = require('yo-yo');


module.exports = function header(name){

    return yo`
	  <div class="navbar-fixed ">
	   	<nav>
		    <div class="header nav-wrapper ">
			   <i class="material-icons left" style="padding-top: 20px;padding-left: 10px;" id="btnBack">arrow_back</i>		    
		       <a href="#" class="brand-logo center" style="font-weight: 700;">${name}</a>
		    </div>
	  	</nav>
	  </div>
    `;
}