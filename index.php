<?php include("header.php"); ?>


<body>

  <div data-sticky-container  class="headermenu">
      <div class="top-bar headermenu" data-sticky data-options="marginTop: 0" id="example-menu">
        <div class="row">
          <div class="columns small-12" style="">
            <ul class="menu">
               <img src="assets/umbrella2Logo.svg" style="max-width: 200px">
            </ul>
          </div>
          
        </div>
      </div>
  </div>

  <div>
      <!--  <img  src="assets/Slider3Tablet.jpg" class="show-for-small-only" style="width: 100% ">  -->
       <img  src="assets/Slider3Desktop.jpg"  style="width: 100% "> 
      <!--  <img  src="assets/Slider3DesktopHD.jpg" class="show-for-large" style="width: 100%">  -->

  </div> 


      <div class="row " style="height: auto;">

        <div class="row align-self-middle" > 
          <div class="columns small-12 text-center align-self-middle " >
              <br>
              <img src="assets/header.svg"  style="padding: 20px; max-height: 150px; width: auto;">
          </div> 

          <div class="columns small-12 text-center align-self-middle " >
            
              <img src="assets/ahumada.jpg"  style="max-height: 150px; width: auto;">
          </div> 

          <div class="row" id="rowFillCenter" style="height: auto;">
            <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle"  style="height:40px;margin-top:30px;  ">  
               <input type="text" id="name" class="middle-label" placeholder="Nombre" style="height:100%;">
        
            </div> 
            <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle" style="height:40px;" >     
              
               <input type="text" id="lastName" class="middle-label" placeholder="Apellido" style="height:100%;">
            </div> 
            <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle" style="height:40px;" >     
              
               <!-- <input type="text" id="rut" required oninput="checkRut(this)" class="middle-label" placeholder="Rut" style="height:100%;"> -->
                <input type="text" id="rut"  class="middle-label input_rut"  placeholder="Rut"  style="height:100%;">
            </div> 
            <div id="columnsInfo" class="columns small-8  small-offset-2 text-center align-self-middle"  style="height:40px; ">  
               <input type="email" id="email" class="middle-label" placeholder="E-mail" style="height:100%;">
        
            </div> 

            <div id="butonCol" class="columns small-12  text-center align-self-middle" style="margin-bottom: 20px;" >  
                 <button  id="btnSend" type="button" class="button"> Enviar</button>
        
            </div>
           </div>

            <div class="columns small-12 text-center align-self-middle "  style="padding-bottom: 20px!important;">
               <a href="#" style="color: #0E3E71">Descarga Bases Legales del descuento</a>
            </div> 
     
        </div>
      </div> 

      <?php include("footer.php"); ?>