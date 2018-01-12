<?php include("header.php"); ?>
<body>
  <div>
       <img  src="assets/slider.jpg"  style="width: 100% " alt="Umbrella Chile, oferta y descuentos Noviembre 2017">
  </div> 

      <div class="row " style="height: auto;">

        <div class="row align-self-middle" > 
          <div class="columns small-12 text-center align-self-middle " >
              <br>
              <h3 style="color: #005398; padding: 10px;font-family: 'Lato', sans-serif;font-weight:300"><span style="font-weight:700"></span> Ingresa tus datos <br>y participa por <span style="font-weight:700">expectaculares premios</span>.</h3>
          </div> 

          <div class="row" id="rowFillCenter" style="height: auto;">
            <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle"  style="height:40px;margin-top:30px;  ">  
               <input type="text" id="name" class="middle-label" placeholder="Nombres" style="height:100%;">
        
            </div> 
            <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle" style="height:40px;" >     
               <input type="text" id="lastName" class="middle-label" placeholder="Apellidos" style="height:100%;">
            </div> 
            <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle" style="height:40px;" >     
                <input type="text" id="rut"  class="middle-label input_rut"  placeholder="Rut"  style="height:100%;">
            </div> 
            <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle"  style="height:40px; ">  
               <input type="email" id="email" class="middle-label" placeholder="E-mail" style="height:100%;">
        
            </div> 
    
            <div id="butonCol" class="columns small-12  text-center align-self-middle" style="margin-bottom: 20px;" >  
                 <button  id="btnSend" type="button" class="button" style="width: 120px; font-size:22px;  font-family: 'Open Sans', sans-serif;font-weight: bolder ;height: 66px;border-radius: 10px; border: none; color: white; background: #E99C51;"> Enviar</button>
            </div>
           </div>

            <div id="fieldNone" class="modal">
              <p style="text-align: center;">Estimado Debes Ingresar Todos los Campos.</p>
            </div>

            <div id="fieldGood" class="modal">
              <p >Gracias por Participar.</p>
            </div>

            <div id="fieldRutMalo" class="modal">
              <p >Ingrese un rut válido</p>
            </div>

            <div id="fieldMailMalo" class="modal">
              <p >Ingrese un mail válido.</p>
            </div>
            <div id="fieldRutMailMalo" class="modal">
              <p >Ingrese un rut y un mail válidos</p>
            </div>

        </div>
      </div> 

      <?php include("footer.php"); ?>