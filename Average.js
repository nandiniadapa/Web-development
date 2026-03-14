function onClickClaculate(){
     number1=parseInt(document.getElementById("txtnumber1").value)
     number2=parseInt(document.getElementById("txtnumber2").value)
     number3=parseInt(document.getElementById("txtnumber3").value)
     number4=parseInt(document.getElementById ("txtnumber4").value)
     Average=(number1+number2+number3+number4) / 4;
     document.getElementById("pResult").innerHTML= Average;
        
}