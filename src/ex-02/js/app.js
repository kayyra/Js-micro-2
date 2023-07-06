while(true){
    let dni = prompt("Enter your DNI number:");
    if (dni === "cancel"){
        break;
    }

    dni = parseInt(dni);
    if (isNaN(dni)){
        alert("Please, enter a valid number of ID.")

    }else if(dni < 0 || dni < 99999999){
        alert("The ID number must be between 0 and 99999999")
    }else{
        let letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        let op = dni % 23;
        let letter = letter.charAt(op);
        alert("Your ID letter is: " + " " + letters)
    }
}