var Utils = new function(){
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
};