var arr = []

arr.push("Starting:")

function test_loop(max) {
	for (i = max; i >= 1; i--) {
		arr.push(i);
	}
}

test_loop(12);

console.log("Eso gseht es ganze Array us:");
console.log(arr);

console.log("...und eso, Schritt für schritt");
for (var j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}


