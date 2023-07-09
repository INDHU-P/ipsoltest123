const async = require("async");

function cube(a) {
	return new Promise ((resolve) => {
		setTimeout ( () => {
			resolve(a**3);
		}, 2000);
    });
}
async function output(a){
	const ans = await cube(a);
	console.log(ans);
}

output(10);
