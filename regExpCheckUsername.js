// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

//Usernames can only use alpha-numeric characters.

//The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

//Username letters can be lowercase and uppercase.

//Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

const username = "JackOfAllTrades";
const userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
//solution #2 const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
const result = userCheck.test(username);
console.log(result)
