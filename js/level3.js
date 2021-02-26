/***********************
     L E V E L   3
***********************/

/*  Exercises:
 ******************/
let nameLetters = [];
let lastNameLetters = [];
let fullNameLetters = [];

/* 1.
 **********/
console.log("************ EXERCISE N 1: **************");

function saveName() {
  let myName = document.getElementById("name").value;
  for (let letter of myName) {
    nameLetters.push(letter);
  }
  document.getElementById("firstResult").innerHTML = nameLetters;
}

/* 2.
 **********/
console.log("************ EXERCISE N 2: **************");
function findVocals() {
  for (let i = 0; i < nameLetters.length; i++) {
    if (
      nameLetters[i].toLowerCase() === "a" ||
      nameLetters[i].toLowerCase() === "e" ||
      nameLetters[i].toLowerCase() === "i" ||
      nameLetters[i].toLowerCase() === "o" ||
      nameLetters[i].toLowerCase() === "u" ||
      nameLetters[i].toLowerCase() === "y"
    ) {
      document.getElementById("secondResult").textContent +=
        nameLetters[i] + " es una vocal, ";
      console.log(nameLetters[i] + " es una vocal.");
    } else {
      document.getElementById("secondResult").textContent +=
        nameLetters[i] + " es una consonante, ";
      console.log(nameLetters[i] + " es una consonante.");
    }
  }
}

/* 3.
 **********/
console.log("************ EXERCISE N 3: **************");
function checkLetterValues() {
  let name_letters = new Map();

  // Set the letter inside the MAP() and the value of 1 - I can't fix the dimanic value on the Level 3
  for (let letter of nameLetters) {
    name_letters.set(letter, 1);
  }
  for (let [key, value] of name_letters) {
    document.getElementById("thirdResult").textContent += key + ": " + value;
  }
}

/* 4.
 **********/
console.log("************ EXERCISE N 4: **************");
function showFullName() {
  let myLastName = document.getElementById("lastName").value;
  for (let letter of myLastName) {
    lastNameLetters.push(letter);
  }
  fullNameLetters.push(nameLetters);
  fullNameLetters.push(" ");
  fullNameLetters.push(lastNameLetters);

  document.getElementById("fourthResult").innerHTML = fullNameLetters;
  console.log("My fullname letters are: " + fullNameLetters);
}


/* 5.
 **********/
console.log("************ EXERCISE N 5: **************");
function findEmail(){
var str = 
    'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

let emailContainerLevel3 = [];

/* Regular Expression to check if there are emails inside a text
***********************/
const emailRegexLevel3 = /\S+[a-z0-9]@[a-z0-9\.]+/;

let emailLevel3 = emailRegexLevel3.exec(str); /* This return a email object[] with many information  */

for(let i of emailLevel3){
    emailContainerLevel3.push(email[0]);  /* Extacting the only information needed at [0] position of the object[] */
}
document.getElementById('fivethResult').innerHTML = emailContainer;
console.log(emailContainerLevel3);
}
