while (true) {
   let name = prompt("Write your name: ");
   if (name === "cancel") {
      break;
   }

   let age = prompt("Write your age: ");
   if (age === "cancel") {
      break;
   }

   age = parseInt(age);
   if (isNaN(age)) {
      alert("Please, enter a valid age. ")
   } else {
      if (age >= 18) {
         alert(name + " " +"You can drive!");

      } else {
         alert(name + " " +"You can't drive!");

      }
   }
}