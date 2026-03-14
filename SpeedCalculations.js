function onClickSpeed(){
    debugger;
    time=(document.getElementById("txtTime").value)
    distance=(document.getElementById("txtDistance").value);
    timeINHR=time/60;
    distanceINKM=distance/1000;
    speed=distanceINKM/timeINHR;
    document.getElementById("pResult").innerHTML=speed +"km/hr"


}