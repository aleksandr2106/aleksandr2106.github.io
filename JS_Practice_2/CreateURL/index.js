country = window.prompt("Enter your country, please");
region = window.prompt("Enter your region, please");

function myTag(strings, country, region) {
  var str0 = strings[0];
  var str1 = strings[1];
  var str2 = strings[2];
  return `${str0}${country}${str1}${region}${str2}`;
}

var output = myTag`/api/countries/${ country }/regions/${ region }/`;
alert(output);
