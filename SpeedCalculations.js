function onClickSpeed(){
    debugger;
    time=document.getElementById(txtTime).value;
    distance=document.getElementById(txtDistance).value;
    timeINHR=Time/60;
    distanceINKM=Distance/1000;
    speed=Distance/Time;
    document.getElementByI("pResult").innerHTML=Speed


}