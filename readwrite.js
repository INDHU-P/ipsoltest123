const fs = require("fs");

const user2 = require("./employee");
// Defining new user
let user = {
    fname: "Rahul",
	lname : "M" ,
    age: "25",
	e_id : "1005"
    
};

// Defining a another new user
let user1 = {
    fname: "Achu",
	lname : "P" ,
    age: "24",
	e_id : "1006"
};

// STEP 2: Adding new data to users object
user2.unshift(user);
user2.push(user1)

// STEP 3: Writing to a file
fs.writeFile("employee.json", JSON.stringify(user2), err => {

    // Checking for errors
    if (err) throw err;
    console.log("Done writing"); // Success
});

fs.readFile("employee.json", function(err,data) {

	if(err) throw err;
	const users = JSON.parse(data);
	console.log(users);
});

