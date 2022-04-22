function displayTime()
{
    var time = document.getElementById('timenow').innerHTML;
    if (typeof (time) != 'undefined' && time != null) {
        document.title = time;
    }
}


setInterval(displayTime, 1000)