console.log('-------- for --------')

const city = ['pila', 'poznan', 'lodz', 'warszawa']

for (let i = 0; i < city.length; i++) {
	console.log(`To miasto nazywa się ${city[i].toUpperCase()}`)
}

console.log('--------- while --------')

let x = 0

while (x <= 10) {
	console.log(x)
	x += 2
}


console.log('--------- do... while --------')

let y = 20

do {
	y -= 3
} while (y > 0)
console.log(y);

console.log('--------- for of --------')

const numbers = [5, 8, 10, 23, 48, 60]

for (const number of numbers)  {
		console.log(number / 5);
}

console.log("----");

for (const number of numbers) {
	if (number % 2 == 0) {
		console.log(`%cLiczba ${number} jest liczbą parzystą.`, `background-color: gold; color: black`);
	} else {
		console.log(`%cLiczba ${number} jest liczbą nieparzystą.`, `background-color: lime; color: black`);
	}
}