function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "status of login";
    //variables we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //fill in the variables\

    //working on inputting first name
    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was inputted as " + zipCode);

    fullName = firstName + lastName
    console.log("The full name was inputted as " + fullName);

    fullNameLength = fullName.length;

    console.log("The full name has  " + fullNameLength + "characters.");
    zipCodeNumb = parseInt(zipCode);
    console.log(" The zip code number is" + zipCodeNumb);

    //things to check for...  full name length is less than 20, 
    //zipcode has only 5 digits
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name";

    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid zipCode";
    } else {
         alert ("User Credentials passed, Welcome to the site," + fullName);
    }

}
function checkPalin(){
    Console.log("checkPalin() started");
}