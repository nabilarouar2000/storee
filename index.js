var compteurimage=1;
var totalimage=2;

function slider(x){
    var image=document.getElementById('img');
    compteurimage=compteurimage + x;
    image.src="image/img"+compteurimage+".jpg";
    if( compteurimage>=totalimage){
        compeurimage=1;
    }
    if(compteurimage<1){compteurimage=totalimage;}

}