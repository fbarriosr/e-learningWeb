<?php include("header.php"); ?>
<body>
  <div>
       <img  src="assets/slider.jpg"  style="width: 100% " alt="Umbrella Chile, oferta y descuentos Noviembre 2017">
  </div> 

      <div class="row " style="height: auto; width: 100%">

        <div class="row align-self-middle" style="height: auto; width: 100%" > 
          <div class="columns small-12 text-center align-self-middle " style="height: auto; width: 100%" >
              <br>
              <h3 style="color: #005398; padding: 10px;font-family: 'Lato', sans-serif;font-weight:300"><span style="font-weight:700"></span> Bajada <br>de <span style="font-weight:700">concurso</span>.</h3>

              <h5 style="color: #005398; padding: 10px;font-family: 'Lato', sans-serif;font-weight:300"><span style="font-weight:700"></span> Slogan de <br> <span style="font-weight:700">concurso</span>.</h5>
          </div> 

            <div id="columnsInfo" class="columns small-12  text-center align-self-middle"  style="height:auto; ">  
              <label for="exampleFileUpload" class="button">Upload File</label>
              <input type="file" id="exampleFileUpload" class="show-for-sr">
             </div> 

            <div id="columnsInfo" class="columns small-12  text-center align-self-middle"  style="height:auto; ">  
              <progress value="0" max="100" id="uploader">0% </progress>
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