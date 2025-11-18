function bclick(val){
    document.getElementById("display").value += val;
}

function bequal(){
   var tex = document.getElementById("display").value;

   tex = tex.replace(/\^/g, "**");

   var result = eval(tex);
   document.getElementById("display").value = result;
}

function bclear(){
    document.getElementById("display").value = "";
}

// Square function 
function bsquare(){
    var val = document.getElementById("display").value;
    if(val !== ""){
        document.getElementById("display").value += "^2";
    }
}

// Cube function
function bcube(){
    var val = document.getElementById("display").value;
    if(val !== ""){
        document.getElementById("display").value += "^3";
    }
}
