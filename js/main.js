// Завдання 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArr(arr, sum = 0, index = 0) {
	if (arr[index]) {
		return sumArr(arr, sum + arr[index], ++index)
	} else {
		return sum
	}
}

console.log(sumArr(arr));

function sumArr(arr, sum = 0, index = 0) {
	return arr[index] ? sumArr(arr, sum + arr[index], ++index) : sum;
}

console.log(sumArr(arr));


// Завдання 2 

function deepCount(sumEl) {
    const sum = 0;
    
    for (let i = 0; i < sumEl.length; i++) {
        if (Array.isArray(sumEl[i])) {
            sum += deepCount(sumEl[i]) + 1;
        } else {
            sum++;
        }
    }
    return sum;
}

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));
console.log('---');

function deepCount(sumEl){
    let sum = 0

    for (let i = 0; i < sumEl.length; i++) {
        Array.isArray(sumEl[i])
        ? sum += deepCount(sumEl[i]) + 1 
		: sum++
    }
    return sum;
}

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));

// Завдання 3

let employees = {
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },
    sales: {
        marketing: {
            internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Kate', salary: 1800}]
}

function lockSumSallary(){
    let sum = 0;
    return function sumSallary(obj){
        for(let key in obj){
            if (Array.isArray(obj[key])){
                obj[key].forEach(employee => sum += employee.salary);
            } else {
                sumSallary(obj[key]);
            }
        }
		
		console.log(sum);
        return sum;
    }
}

console.log(lockSumSallary()(employees));

// Завдання 4

let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 9];
let arr3 = [6, 11, 16, 15, 11];

const maxNumb = () => {
    return Math.max(...arr1, ...arr2, ...arr3);
}

console.log(maxNumb());


