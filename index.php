<?php include("header.php"); ?>
<body>
  <div id="slider">

     <figure class="orbit-figure">
          <img class="orbit-image show-for-small-only" src="assets/slider.png" style="height: 70%vh;" alt="Space">
          <img class="orbit-image show-for-medium-only" src="assets/slider.png" alt="Space">  
          <img class="orbit-image show-for-large" src="assets/sliderhd.png" alt="Space">         
      </figure>

  </div> 
      <div class="row " style="height: 60%vh; width: auto">
        <div id="pagina1" style="width: 100%;"> 
            <div id="divCenterH3" class="columns small-12 text-center align-self-middle " style="height: auto; width: 100%" >
                <br>
                <h3 style="color: #EE9319; padding: 10px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:700"></span> Captura el Mejor<br>Momento del Verano</h3>

                <h5 style="color: #EE9319; padding: 10px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:700"></span> Concurso Fotográfico </h5>
            </div> 
            <div id="columnsInfo" class="columns small-12  text-center align-self-middle"  style="height: auto; width: 100% ">  
                <label id="buttonFotosInside" for="exampleFileUpload" class="button" style="height: auto; ">SUBIR FOTO</label>
                <input type="file" id="exampleFileUpload" class="show-for-sr">
            </div> 
            <div id="columnsInfo" class="columns small-12  text-center align-self-middle"  style="height: auto; width: 100% ">  
                <progress value="0" max="100" id="uploader">0% </progress>
            </div> 
        </div>
        <div id="pagina2">   
            <div id="divCenterH3" class="columns small-12 text-center align-self-middle " style="height: auto; width: 100%" >
                  <br>
                  <h3 style="color: #EE9319; height:auto;padding: 20px;font-family: 'Lato', sans-serif;font-weight:700; text-transform: uppercase;"><span style="font-weight:700"></span> Ingresa tus datos</h3>
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
                     <button  id="btnSend" type="button" class="button" style="width: 120px; font-size:22px;  font-family: 'Open Sans', sans-serif;color: white"> Participar</button>
                </div>
            </div>
            <div id="fieldNone" class="modal">
                  <p style="text-align: center;">Estimado Debes Ingresar Todos los Campos.</p>
            </div>

            <div id="fieldGood" class="modal">
                  <p style="font-weight: bolder; text-align: center;">Gracias por Participar. <br></p>
                  <p style="font-weight: bolder; text-align: center;">Mira las Fotos en el <a href="https://www.google.cl/" target="_blank">Sitio</a></p>
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