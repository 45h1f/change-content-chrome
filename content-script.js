function displayTime()
{
    let element = document.getElementById('timenow');
    if (typeof (element) != 'undefined' && element != null) {
        document.title = element.innerHTML;
    }
}


setInterval(displayTime, 1000)