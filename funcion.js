var getData = function ()
{
var nombre= document.getElementById("nombre").value;
var correo= document.getElementById("correo").value;
var mensaje= document.getElementById("mensaje").value;
if(nombre=="")
{
    var nombre= document.getElementById("nombre").focus();
}
else
{
    if(correo=="")
    {
        var correo= document.getElementById("correo").focus();
    }
    else{
        
        
        alert(nombre+"  " + correo + "  " + mensaje);
    }
}



}



