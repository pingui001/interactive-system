//program initialization
function buttom() {

    while (true) {
        console.log("Welcome to the Interactive Messaging System");

        //capture user data
        let Name = prompt("Please enter your name:");
        let Age = prompt("Please enter your age:");

        //convert age to number
        Age = parseInt(Age);

        //validate and display messages

        if (isNaN(Age)) {
            console.error("Error: Please enter a valid age in numbers.")
        } else if (Age < 18) {
            alert(`Hello ${Name}, You're a minor. Keep learning and enjoying coding!`);
        } else {
            alert(`Hello ${Name}, You're of legal age. Get ready for great opportunities in the world of programming!`);
        }
        const verification = confirm("Do you want to enter the data again?");

        if (verification == true) {
            continue
        }
        else if (verification == false) {
            break
        }


    }
}