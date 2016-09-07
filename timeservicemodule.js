/**********************
 * TIME PARSER MODULE *
 **********************/
var moment = require('moment');

exports.parseData =function(path){	

	var res = {
                "unix": null,
                "natural" : null
        }
	var d = path.split('/').pop();
        
        // Check if unix time
        if (+d >= 0) {
            res.unix = +d;
            res.natural = unixToNatural(+d);
        } 
        
        // Check if natural time
        if (isNaN(+d) && moment(d, "MMMM D, YYYY").isValid()) {
            res.unix = +naturalToUnix(d);
            res.natural = unixToNatural(res.unix);
        }
        return res;
};

function naturalToUnix(date) {
      // Conver from natural date to unix timestamp
      return moment(date, "MMMM D, YYYY").format("X");
}
    
function unixToNatural(unix) {
     // Convert unix timestamp to natural date
    return moment.unix(unix).format("MMMM D, YYYY");
 }
