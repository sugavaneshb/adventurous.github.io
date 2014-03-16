/*
	Created with love for adventuro.us
*/

document.onkeydown = checkKeycode
function checkKeycode(e) 
{
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    if (keycode == 13)
    {
        location.href = 'dashboard.html';
    }
}