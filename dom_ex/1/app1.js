window.onload = function() {
    alert("Welcome");
}


window.addEventListener('beforeunload', function(event) {
    event.preventdefault();
    event.returnValue = 'bye';
});