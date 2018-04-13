var yo = require('yo-yo');    

var login= yo`
	<div class="container" >
		<div class="row">
      <div class="row" id="addPhoto" >
   			  <div class="fixed-action-btn">
     				<a href="curso.php" class="btn-floating btn-large waves-effect waves-light" id="btnAdd"><i class="material-icons">add</i></a>
   				</div>
    			<br>
    			<h3 style="padding: 10px;" > No hay cursos disponibles</h3>
  		</div>
  	</div> 
  </div>  
`;

module.exports = login;