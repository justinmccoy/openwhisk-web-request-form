# OpenWhisk Web Forms Demo
Demonstrating how to host a webpage with a form element and process the POST of a form within a single OpenWhisk Action.

<Insert Diagram here>

## Action `form.js`
This action handles HTTP GET and POST requests without a need to run a seperate webserver. Each HTTP GET request returns a webpage that includes a basic form element, some styling and the accompanied javascript. Each POST request takes the form data and returns a JSON object containing the parameters.

