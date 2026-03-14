function onClickCheckPalindrome(){
    debugger;
 var  number= parseInt(document.getElementById("txtNumber").value);
 if (number%2==0) {
    document.getElementById("pResult").innerHTML= number+ " is Palindrome Number" ;

 }
  else;

{
  document.getElementById("pResult").innerHTML= number+ " is Not a palindrome Number" ;

 }
}


