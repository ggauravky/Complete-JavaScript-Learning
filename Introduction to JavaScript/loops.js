// for loop
for (let i = 0; i < 5; i++) {
    const p = document.createElement('p');
    p.textContent = `This is paragraph number ${i + 1}`;
    div.appendChild(p);
}

// while loop
let j = 0;
while (j < 3) {
    const p = document.createElement('p');
    p.textContent = `This is while loop paragraph number ${j + 1}`;
    div.appendChild(p);
    j++;
}

// do...while loop
let k = 0;
do {
    const p = document.createElement('p');
    p.textContent = `This is do...while loop paragraph number ${k + 1}`;
    div.appendChild(p);
    k++;
} while (k < 2);

// for...of loop
const fruits = ['Apple', 'Banana', 'Cherry'];
for (const fruit of fruits) {
    const p = document.createElement('p');
    p.textContent = `Fruit: ${fruit}`;
    div.appendChild(p);
}
// for...in loop
const person = { name: 'John', age: 30, city: 'NewYork' };
for (const key in person) {
    const p = document.createElement('p');
    p.textContent = `${key}: ${person[key]}`;
    div.appendChild(p);
}