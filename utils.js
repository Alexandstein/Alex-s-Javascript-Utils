//Replace all instances of a sequence in a string
function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

//Find a key in an object given the value
function getKey(obj, value){
    keys = Object.keys(obj);
    for(var i = 0; i < keys.length; i++){
        if(obj[keys[i]] == value){
             return keys[i];   
        }
    }
    return undefined;
}

//Capitalize first letter
function capitalize(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Strip whitespace
function strip(str){
	return string.replace(/(^\s+|\s+$)/g,'');
}