function onClickCheckPrimeNumber(){
    debugger;
 var  number= parseInt(document.getElementById("txtNumber").value);
 if (number%2==0) {
    document.getElementById("pResult").innerHTML= number+ " is PrimeNumber" ;

 }
  else;

{
  document.getElementById("pResult").innerHTML= number+ " is Not a Prime Number" ;

 }
}


