var yo = require('yo-yo');    

var login= yo`
	<div class="container" >
		<div class="row">
        	<div class="row" id="addPhoto" >
   				
          <div class="col m6 hide-on-small-only">
          <img src="iphone.png" width="70%" height="auto">
          </div>
          <div class="col s12 m6">6-columns (one-half)</div>

  			</div>
  		</div> 
  	</div>  
`;


login = yo`

<div class="valign-wrapper" id="loginBody">
  <div class="row">
    <div class="col m6 hide-on-small-only center-align">
      <img src="iphone.png" width="70%" height="auto">
      </div>
      
      <form class="col s12 m6">
        <div class="row center-align">
          <img src="animal.png" width="95%" height="auto">
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="txtEmail" type="text" class="validate" autocomplete="off">
            <label for="txtEmail">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="txtPassword" type="password" class="validate" autocomplete="off">
            <label for="txtPassword">Password</label>
          </div>
        </div>
        <div class="row">
            <a id="btnLogin" class="waves-effect waves-light btn">Entrar</a>
        </div>
        <div class="row">
            <a id="btnLogout" class="waves-effect waves-light btn">Salir</a>
        </div>
        

      </form>
  </div>
</div>  

`;

module.exports = login;