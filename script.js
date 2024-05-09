document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    
    // AJAX call to PHP script to store email and number
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'store.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('result').innerHTML = xhr.responseText;
        }
    };
    xhr.send('email=' + email + '&number=' + randomNumber);
});