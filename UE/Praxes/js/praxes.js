function iniciar(){
    document.getElementById("info").style.display='none';
    let btn = document.getElementById("show");
    btn.innerHTML="Show Info"
}
function show(){
    let btn = document.getElementById("show");
    document.getElementById("info").style.display='inline'; 
    btn.innerHTML="Hide"
    document.getElementById("show").setAttribute( "onclick", "hide()" );
    document.getElementById("show").id="hide";

}
function hide(){
    let btn2 = document.getElementById("hide");
    document.getElementById("info").style.display='none'; 
    btn2.innerHTML="Show Info"
    document.getElementById("hide").setAttribute( "onclick", "show()" );
    document.getElementById("hide").id="show";

}