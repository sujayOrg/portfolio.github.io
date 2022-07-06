function myFunction(box){
    var a = document.getElementsByClassName("n");
    for(var i=0; i<a.length; i++){
        a[i].style.display = "none";
    }
    document.getElementById(box).style.display = "block";
}
