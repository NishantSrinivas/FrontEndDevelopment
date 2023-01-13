const main_heading = document.querySelector('#HEADING');
const body = document.querySelector('body');
console.log(main_heading);
main_heading.innerText = "Heya, I am Nishant Srinivas";

const all_table_rows = document.querySelectorAll('tbody tr');

for (const row of all_table_rows) {
    console.log(row.innerText)
}

// main_heading.addEventListener('click', () => {
//     console.log("Heading has been clicked!!");
//     main_heading.innerText = "Oh you clicked ME!!";
// })

console.log(main_heading.style)
main_heading.style.color = "green";

const newH2 = document.createElement('h2');
newH2.append("This is a new H2!!");
main_heading.insertAdjacentElement('afterend', newH2);

// body.addEventListener('click', () => {
//     console.log("Body has been clicked!!");
//     main_heading.innerText = "Heya, I am Nishant Srinivas";
// })

const btn = document.querySelector("#btn");

function greet() {
    console.log("HEYYYY!!");
}

function laugh() {
    console.log("HAHAHA!!!");
}

btn.addEventListener('click', () => {
    let random1 = (Math.floor(Math.random() * 255) + 1);
    let random2 = (Math.floor(Math.random() * 255) + 1);
    let random3 = (Math.floor(Math.random() * 255) + 1);
    // console.log(`rgb(${rand},${random2},${random3})`);
    body.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
    // body.style.backgroundColor = `rgb(100,2,3)`;
})
