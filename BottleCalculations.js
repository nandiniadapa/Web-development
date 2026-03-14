function onClickBottle(){
    debugger;
    liters=(document.getElementById("txtliters").value);
    bottles= liters/1.5
    document.getElementById("pResult").innerHTML=Math.ceil(bottles)

}