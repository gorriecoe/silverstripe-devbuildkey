function devbuildkeyup(e) {
    if(e.altKey && e.keyCode == 68) {
        window.open('/dev/build');
    }
}

if (document.addEventListener) {
    document.addEventListener('keyup', devbuildkeyup, false);
} else if (document.attachEvent) {
    document.attachEvent('keyup', devbuildkeyup);
}
