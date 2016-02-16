var request = require('request')

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
if (!error && response.statusCode == 200) {
    var colors = JSON.parse(body);
  }
})

var test = process.argv[2];

var testfunc = function(test){
	for(var i=0; i<colors.length; i++){
		if (test == colors.name.toLowerCase()){
			return colors.rgb;
		} else {
			return "not a color";
		}
	}
}
testfunc(test);