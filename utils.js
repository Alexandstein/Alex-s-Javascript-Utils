//Namespace Utils
var Utils = new function(){

/////////////////////////////////////////////////
//STRING HELPERS
/////////////////////////////////////////////////

/************************************************
Description:
	Replace all instances of a string
Args:
	(string/regex) find
		The search criterion
	(string) replace
		The replacement string
	(string) str
		The source string to search 
Return:
	(string) A new string with the proper replacements
************************************************/
	this.replaceAll = function(find, replace, str) {
		return str.replace(new RegExp(find, 'g'), replace);
	};

/************************************************
Description:
	Capitalize first letter
Args:
	(string) str
		The string to capitalize the first letter of
Return:
	(string) The key of of the first value to match the search. Return 'undefined' 
	if no such value is found.
************************************************/
	this.capitalize = function(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

/************************************************
Description:
	Strip whitespace
Args:
	(string) str
		String to strip whitespace of
Return:
	(string) String with whitespace stripped from it.
************************************************/
	this.strip = function(str){
		return string.replace(/(^\s+|\s+$)/g,'');
	};

/************************************************
Description:
	Parse url into components
Args:
	(string) url
		The url to be parsed
Return:
	(Array of strings) Array holding the separated url components
************************************************/
	this.getURLComponents = function(url){
		var output = url.split('/');
		var filterFunc = function(str){return str != '';};
		output = output.filter(filterFunc);
		return output;
	};
	
/************************************************
Description:
	Format string into 10 digit phone number
Args:
	(string) number
		The number to be formatted.
	(bool)(string) dashes
		If set to `true`, number will be formatted as (xxx) xxx-xxxx. Otherwise
		only spaces will be used to separate numbers: xxx xxx xxxx. If a character is
		entered, the spaces will be substituted with that character. 
		
Return:
	(strings) Formatted phone number
************************************************/
	this.formatPhoneNumber = function(number, dashes){
		//Ensure that it is a string
		number = String(number);
		
		if(!dashes){
		//Spaces
			number = number.slice(0,3) + ' ' + number.slice(3,6) + ' ' + number.slice(6);
		}else if(dashes === true){
		//Dashed format
			number = '(' + number.slice(0,3) + ') ' + number.slice(3,6) + '-' + number.slice(6);
		}else{
		//Custom dashes
		number = number.slice(0,3) + dashes + number.slice(3,6) + dashes + number.slice(6);
		}
		
		return number;
	};


/////////////////////////////////////////////////
//Data structure helpers
/////////////////////////////////////////////////

/************************************************
Description:
	Find a key in an object given the value
Args:
	(Object) obj
		The search criterion
	(any) value
		The value to search for
Return:
	(string) The key of of the first value to match the search. Return 'undefined' 
	if no such value is found.
************************************************/
	this.getKey = function(obj, value){
		keys = Object.keys(obj);
		for(var i = 0; i < keys.length; i++){
			if(obj[keys[i]] == value){
				 return keys[i];   
			}
		}
		return undefined;
	};
	
/////////////////////////////////////////////////
//Regex helpers
/////////////////////////////////////////////////
	this.regex = 	{
						alpha: '[a-zA-Z]',
						num: '[0-9]',
						alphaNum: '[a-zA-Z0-9]'
					};
};
