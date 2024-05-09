<?php
// Connessione al database
$servername = "localhost";
$username = "username"; // Il tuo username del database
$password = "password"; // La tua password del database
$dbname = "database"; // Il nome del tuo database

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica della connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Prendi i dati inviati via POST
$email = $_POST['email'];
$number = $_POST['number'];

// Verifica se l'email esiste già nel database
$sql = "SELECT * FROM emails WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Email già inserita.";
} else {
    // Inserisci l'email e il numero casuale nel database
    $sql = "INSERT INTO emails (email, number) VALUES ('$email', $number)";
    if ($conn->query($sql) === TRUE) {
        echo "Numero casuale generato: $number";
    } else {
        echo "Errore durante l'inserimento: " . $conn->error;
    }
}

$conn->close();
?>