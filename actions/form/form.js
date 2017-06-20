/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function main(params) {
   var FormData = require('form-data');
   var formidable = require('formidable');
   var form = `
<html><head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bluemix Codes</title>
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link href="css/styles.css" rel="stylesheet">
  <style>
    html,
    body {
      height: 100%;
    }

    body {
      text-align: center;
      font-family: 'Raleway', sans-serif;
    }

    .submit-btn {
      color: #ffffff;
      background-color: #3c6df0;
      border: none;
    }

    .submit-btn:hover,
    .submit-btn:focus,
    .submit-btn:active,
    .submit-btn.active {
      color: #ffffff;
      background-color: #3c6df0;
      border: none;
    }

    h4 {
      padding-bottom: 30px;
      color: #B8BDC1;
    }

    .glyphicon {
      font-size: 5em;
      color: #c0bfc0;
    }

    h2 {
      margin-top: 15px;
      color: #68757E;
    }

    .panel {
      padding-top: 20px;
      padding-bottom: 20px;
    }

   
    .form-group {
      width: 300px;
      margin: auto;
    }
  </style></head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="panel-body">
            <div class="panel panel-default">
              <span class="glyphicon glyphicon-cloud"></span>
              <h4>bluemix.net</h4>
              <form>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="name" placeholder="Name" required>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp" placeholder="Email Address" required>
                  <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
		  <input type="submit" class="btn btn-lg submit-btn" value="Get Code"/>
                </div>	
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> 
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script>
  $("form").submit(function(evt){	 
    evt.preventDefault();
    var formData = new FormData();
    formData.append('name',$('#name').val());
    formData.append('email',$('#email').val());

    $.ajax({
      url: 'https://openwhisk.ng.bluemix.net/api/v1/web/justin.mccoy_da/hackathons/form',
      type: 'POST',
      data: formData,
      async: false,
      processData: false,
      contentType: false,
      success: function (response) {
        alert(response);
      },
      error: function(response) {
        alert(response);
      }
    });
    return false;
  });
</script>
</body></html>`;

  var response = "<html><body><h3>hello</h3></body></html>";
  if(params.__ow_method === 'get') {
    return {body: form};
  } else if (params.__ow_method === 'post') {

    decoded = new Buffer(params.__ow_body, 'base64').toString('utf-8')
    return {body: decoded}; 

    console.log('Posted' + formData);
    return { response: params };
  } else {
    return { html: '<html><body><p>' + params + '</p></body></html>'};
  }


}

