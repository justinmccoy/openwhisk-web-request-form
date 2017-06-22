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
  var form = `
<html><head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bluemix Codes</title>
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
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
                  <input type="text" class="form-control form-control-lg" name="name" placeholder="Name" required>
                  <input type="email" class="form-control form-control-lg" name="email" aria-describedby="emailHelp" placeholder="Email Address" required>
                  <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>
                  <input type="submit" class="btn btn-lg submit-btn" value="Get Code">
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

  $( "form" ).submit(function( event ) {
    event.preventDefault();
    alert($( "form" ).serialize());
    
    $.ajax({
      url: 'https://openwhisk.ng.bluemix.net/api/v1/web/justin.mccoy_da/hackathons/form',
      type: 'post',
      data: $( "form" ).serialize(),
      async: false,
      processData: false,
      contentType: false,
      success: function (response) {
        //alert(response);
      },
      error: function(response) {
        alert(response);
      }
    });
   });
</script>
</body></html>`;

  if(params.__ow_method === 'get') {
    return {body: form};
  } else if (params.__ow_method === 'post') {
    return {body: getQueryParameters(params.__ow_body)}; 
  } else {
    return { html: '<html><body><p>' + params + '</p></body></html>'};
  }
}


//Returns a map of query parameters found in paramString
function getQueryParameters(paramString) {
  var arrayOfParameters = paramString.split('&');
  var map = {};
  for (var i in arrayOfParameters) {
    parameter = arrayOfParameters[i].split('=');
    map[parameter[0]] = unescape(parameter[1]);
  }
  return map;
}
