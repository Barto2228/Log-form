// zdefiniowanie funkcji
function  sendForm(){
    // utworzenie zmiennych name i  age i z htmlela otrzymujemy wartość
    let email = document.getElementById("email").value;
    let log = document.getElementById("log");
    // powitanje użykownika
    alert("Witaj" + " " + " zostałeś zalogowany na konto" + " " + email )
}

// wywołanie funkcji
sendForm()