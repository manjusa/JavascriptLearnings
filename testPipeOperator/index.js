const addQuestion = (str) => str + "?";
const toUpperCase = (str) => str.toUpperCase();
const customString = (str) => str.concat("How are you");
const reverseString = (str) => str.split("").reverse().join("");
const result = "Hey Manju " |> toUpperCase |> customString |> addQuestion;
const reverseResult = result |> reverseString;
console.log(result); // Output: "HEY MANJU How are you?"
console.log(reverseResult); // Output: "?uoy era woH UJNAM YEH"
