var yo = require('yo-yo');


module.exports = function header(name){

    return yo`
	  <div class="navbar-fixed ">
	   	<nav>
		    <div class="header nav-wrapper ">
		       <a href="#" class="brand-logo center" style="font-weight: 700;">${name}</a>
		    </div>
	  	</nav>
	  </div>
    `;
}

