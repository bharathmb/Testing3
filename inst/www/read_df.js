<!Doctype html5>
<html>

<head>
  <title>Propensity Model</title>
    <script src="opencpu/jquery-1.10.2.min.js"></script>
    <script src="opencpu/opencpu-0.4.js"></script>
						<!--<script src="plot_df.js"></script>-->
						<script src="read_df.js"></script>
						<script src="model_df.js"></script>
						<script src="scoring_df.js"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
  <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <!-- <link href="css/bubbles.css" rel="stylesheet" type="text/css"> -->
  <link href="scss/style.css" rel="stylesheet" type="text/css">
  <link href="fontawesome/web-fonts-with-css/css/fontawesome-all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  <script src="js/highcharts.js"></script>
  <script src="http://code.highcharts.com/highcharts-more.js"></script>
<!--	
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
-->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.appear/0.3.3/jquery.appear.js"></script>
      <style>
	  #output{
      min-height: 200px;
      border: solid gray 1px;
	  padding: 3px;
	  color:black;
	  background-color : white;
    }
	#output2{
     		 min-height: 200px;
     		 border: solid gray 1px;
	  	padding: 3px;
	  	color:black;
	  	background-color : white;
   	 }
     #plotdiv1 {
       position: relative;
       width: 600px;
       height: 400px;
       border: solid gray 1px;
     }
	      #plotdiv {
       position: relative;
       width: 400px;
       height: 400px;
       border: solid gray 1px;
     }
    </style>						
</head>

<body>
	


  <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
  </div>

  <!-- <div class="device-notification">
    <a class="device-notification--logo" href="#0">
      <p>Propensity Model</p>
    </a>
    <p class="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't
      be disappointed.</p>
  </div> -->

  <div class="perspective effect-rotate-left">

    <!-- <div class="outer-nav--return"></div> -->

  <div id="viewport" class="l-viewport">
   <div class="container-main">
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="header-wrapper">
              <h5>Propensity Model</h5>
              <div class="header--nav-toggle">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container-fluid body-margin">
      <div class="row">
        <div class="col-12">


          <div class="row">
            <div class="col-sm-2">
              <div class="side-nav-fixed">
                <ul class="side-nav">
                  <li class="is-active">
                    <span>Choose CSV File</span>
                  </li>
                  <li>
                    <span>Variable Profiling</span>
                  </li>
                  <li>
                    <span>Select the Model</span>
                  </li>
                  <li>
                    <span>View Results</span>
                  </li>
                  <li>
                    <span>Evaluate Model</span>
                  </li>
                </ul>

                <!-- <div>
                                <label>Powered by Latentview</label>
                        </div> -->

              </div>
            </div>

            <div class="col-sm-10">
              <div class="body-right-wrapper">
                <div class="row">
                  <div class="col-sm-12">
                    <ul class="l-main-content main-content">
					
                      <li class="l-section section section--is-active">
                        <div class="intro">

                          <h2><b>Choose CSV File</b></h2>
						  <div class="choose-data">
		 	<b>Input Data File Path</b> <input type="file" id="uploadFile"> 
			
                          
			    <b>DV name: </b> <input type="text" id="dvname">

                            <b><button id="submitbutton" type="button">Upload CSV file!</button></b>
					<pre id="output"><code></code></pre>	
                          </div>

                          <div class="lds-dual-ring" id="status1">Go on & feed me a CSV!</div>

                        </div>
                      </li>
		

                      <li class="l-section section">
                        <div class="work">
                          <h2>Variable Profiling</h2>
				

							
							<body id="addOption_list";>
								<FORM name="drop_list" action="yourpage.php" >
										
								<SELECT id="DropList" NAME="DropList" >
								 <!--<Option value="" >Variables</option> -->
								</SELECT>
								</form>
								
								

                          <div class="radio-list-wrapper">
                            <!--<div id="dose" style="width:100%"></div>-->
							 
							<div id="plotdiv1"></div>	
						
						<div id="plotdiv"></div>
						<!--	<div id="myChart">
						  
						  <select id="chart-selector" name="chart-selector">
							
							<option value="">Please Select An Option</option>
							<option value="0">0</option>
							<option value="1">1</option>
							
						  </select>
						  
						</div>
						
                            <div id="variable-profiling" style="width:100%"></div>-->
                          </div>


                        </div>
                      </li>



                      <li class="l-section section">
                        <div class="about">

                          <div class="radio-list">

                            <h2>Select the Model</h2>

                            <div class="radio-list-cover">
                              <div class="radio">
                                <input id="select-1" name="radio" type="radio" checked>
                                <label for="select-1" class="radio-label">Logistic Regression</label>
                              </div>

                              <div class="radio">
                                <input id="select-2" name="radio" type="radio">
                                <label for="select-2" class="radio-label">Random Forest</label>
                              </div>

                              <div class="radio">
                                <input id="select-3" name="radio" type="radio">
                                <label for="select-3" class="radio-label">SVM</label>
                              </div>

                              <div class="radio">
                                <input id="select-4" name="radio" type="radio">
                                <label for="select-4" class="radio-label">GBM</label>
                              </div>

                              <div class="radio">
                                <input id="select-5" name="radio" type="radio">
                                <label for="select-5" class="radio-label">Naive Bayes</label>
                              </div>

                              <div class="radio">
                                <input id="select-6" name="radio" type="radio">
                                <label for="select-6" class="radio-label">Neural Network</label>
                              </div>

                              <div class="radio">
                                <input id="select-7" name="radio" type="radio">
                                <label for="select-7" class="radio-label">optimized Ensemble model</label>
                              </div>

                            </div>

                            <div>
                              <button id="show_perf">Show Performance</button>
                            </div>

                          </div>

                        </div>
                      </li>


                      <li class="l-section section">
                        <div class="contact--lockup">
                          <h2>Results</h2>
                          <div class="result-wrapper">

                            <div class="list">
                              <h6>Significant Variables</h6>
                              <ul>
                                <li>age</li>
                                <li>gender - female</li>
                                <li>BMI</li>
                                <li>country</li>
                                <li>region EMEA</li>
                                <li>salary</li>
                              </ul>
                            </div>

                            <div class="result-chart">
                              <div id="Result01"></div>
                              <div id="Result02"></div>
                              <table border="1">
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>Predicted: No</th>
                                    <th>Predicted: Yes</th>
                                  </tr>
                                </thead>

                                <tbody>

                                  <tr>
                                    <td>Actual: No</td>
                                    <td>50</td>
                                    <td>20</td>
                                  </tr>

                                  <tr>
                                    <td>Actual: Yes</td>
                                    <td>5</td>
                                    <td>100</td>
                                  </tr>

                                </tbody>
                              </table>
                            </div>

                          </div>
                        </div>
                      </li>


                      <li class="l-section section">
                        <div class="hire">


                          <div class="intro">
                            <h2>Evaluation Module</h2>
							<div class="choose-data">
								<b>Input Data File Path</b> <input type="file" id="uploadFile2">   
									
								<b><button id="downloadbutton" type="button">Download Results Here!</button></b>
								
								<pre id="output2"><code></code></pre>	
                          </div>

                          <div class="lds-dual-ring" id="status2">Waiting for Dataset to Score on!</div>

                        </div>

                          </div>

                          </div>





                        </div>
                      </li>



                    </ul>
                  </div>

                  
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  

   </div>
  </div>


  <ul class="outer-nav">
      <li class="is-active">Choose CSV</li>
      <li>Variable Profiling</li>
      <li>Select the Model</li>
      <li>Results</li>
      <li>Evaluate Model</li>
    </ul>


  </div>

</body>


<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>-->
<script src="js/functions-min.js"></script>
<script src="js/high-chart-code.js"></script>

</html>
