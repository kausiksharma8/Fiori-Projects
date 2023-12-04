

var current = {
    "title" : ["system","CHG"],
    "risk"  :"risk"
}

// console.log(Array.isArray(v["risk"]))
var array = current["title"];
var str = "";
for (let index = 0; index < array.length; index++) {
    str = str + array[index];
    if(index != array.length-1){
        str = str + "-" ;
    }
    
}
console.log(str);