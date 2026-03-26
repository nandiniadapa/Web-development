function onClicksplit(){
    debugger;
    number=(document.getElementById("txtnumber").value);
    Amount=(document.getElementById("txtAmount").value);
    Average=Amount/number;
    document.getElementById("pResult").innerHTML=Average  
}