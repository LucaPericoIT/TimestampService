Timestamp Microservice
-----

By Luca Perico for [FreeCodeCamp](https://www.freecodecamp.com/challenges/timestamp-microservice)
<br><br>

##### User story
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.
<br><br><br>
##### Example input:
1. `https://freecodecampapi-lucaperico.c9users.io/December%2015,%202015`
2. `https://freecodecampapi-lucaperico.c9users.io/1450137600`
3.  `https://freecodecampapi-lucaperico.c9users.io/helloworld`

##### Example output:
1. `{ "unix": 1450137600, "natural": "December 15, 2015" }`
2. `{ "unix": 1450137600, "natural": "December 15, 2015" }`
3. `{ "unix": null, "natural": null }`

<br>
##### Project Files
* server.js: HTTP server listening for request
* timeservicemodule.js : node module parsing string in time
* test.js: module test  

<br>
##### Howto

`node server.js` : start the NodeJS server

`note test.js` : test the module timeservice

<br>
###### The server is usually down!
