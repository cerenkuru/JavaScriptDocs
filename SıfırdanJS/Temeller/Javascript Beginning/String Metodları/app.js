let value;

const firstName ="crn";
const lastName = "ku";
const langs ="js, python, c++";
value = firstName + lastName;
value = "Ceren f";
value += "Kuru";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Cazz")
value = firstName.toLocaleLowerCase();



// Index of

value = firstName.indexOf("r");

// Char at

value = firstName.charAt(1);

// Split

value = langs.split(",");

// Replace

value = langs.replace("python", "css");

// Includes 

value = langs.includes("python");


console.log(value);