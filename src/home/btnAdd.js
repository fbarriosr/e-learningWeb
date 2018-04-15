var yo = require('yo-yo');

module.exports = function btnAdd(id){
  	return yo`
  		<div class="container" >
			<div class="row">
	      		<div class="row" id=${id} >
			        <div class="fixed-action-btn">
			         <a class="btn-floating btn-large waves-effect waves-light" id="btnAdd"><i class="material-icons">add</i></a>
			      	</div>
			    </div>
  			</div> 
  		</div>
		`;
}