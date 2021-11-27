const body = document.body;

const div = document.createElement('div');
div.className = "container"
body.append(div);

const h1 = document.createElement('h1');
h1.id = "title";
h1.textContent = "Calculator";
div.append(h1);


const p = document.createElement('p');
p.id = "description"
p.textContent = "Calculator Task"

div.append(p);

const subdiv = document.createElement("div")
subdiv.className = "calculator"
div.append(subdiv);


const div1 = document.createElement('div');
div1.id = "calculator";
subdiv.append(div1);

const input = document.createElement("input")
input.id = "result"
input.type = "text"

div1.append(input);


const table = document.createElement("table")
subdiv.append(table);


const tr1 = document.createElement("tr");
table.append(tr1);

function td1() {
    const td1 = document.createElement("td")
    tr1.append(td1);
    const button1 = document.createElement("button")
    button1.id = "clear"
    button1.textContent = "C"
    td1.append(button1);

    const td2 = document.createElement("td")
    tr1.appendChild(td2)
    const button2 = document.createElement("button")
    button2.id = "B"
    button2.textContent = "←"
    td2.appendChild(button2);


    const td3 = document.createElement("td")
    tr1.appendChild(td3)
    const button3 = document.createElement("button")
    button3.id = "(.)"
    button3.textContent = "."
    td3.appendChild(button3);




    const td4 = document.createElement("td")
    tr1.appendChild(td4)
    const button4 = document.createElement("button")
    button4.id = "X"
    button4.textContent = "X"
    td4.appendChild(button4);


}
td1()



const t2 = document.createElement("tr");
table.append(t2);

const td21 = document.createElement("td");
t2.appendChild(td21);
const button21 = document.createElement("button")
button21.id = "7"
button21.textContent = "7"
td21.appendChild(button21);


const td22 = document.createElement("td");
t2.appendChild(td22);
const button22 = document.createElement("button")
button22.id = "8"
button22.textContent = "8"
td22.appendChild(button22);



const td23 = document.createElement("td");
t2.appendChild(td23);
const button23 = document.createElement("button")
button23.id = "9"
button23.textContent = "9"
td23.appendChild(button23);




const td24 = document.createElement("td");
t2.appendChild(td24);
const button24 = document.createElement("button")
button24.id = "/"
button24.textContent = "/"
td24.appendChild(button24);







const t3 = document.createElement("tr");
table.append(t3);

const td31 = document.createElement("td");
t3.appendChild(td31);
const button31 = document.createElement("button")
button31.id = "4"
button31.textContent = "4"
td31.appendChild(button31);


const td32 = document.createElement("td");
t3.appendChild(td32);
const button32 = document.createElement("button")
button32.id = "5"
button32.textContent = "5"
td32.appendChild(button32);



const td33 = document.createElement("td");
t3.appendChild(td33);
const button33 = document.createElement("button")
button33.id = "6"
button33.textContent = "6"
td33.appendChild(button33);




const td34 = document.createElement("td");
t3.appendChild(td34);
const button34 = document.createElement("button")
button34.id = "subtract"
button34.textContent = "-"
td34.appendChild(button34);












const t4 = document.createElement("tr");
table.append(t4);

const td41 = document.createElement("td");
t4.appendChild(td41);
const button41 = document.createElement("button")
button41.id = "1"
button41.textContent = "1"
td41.appendChild(button41);


const td42 = document.createElement("td");
t4.appendChild(td42);
const button42 = document.createElement("button")
button42.id = "2"
button42.textContent = "2"
td42.appendChild(button42);



const td43 = document.createElement("td");
t4.appendChild(td43);
const button43 = document.createElement("button")
button43.id = "3"
button43.textContent = "3"
td43.appendChild(button43);




const td44 = document.createElement("td");
t4.appendChild(td44);
const button44 = document.createElement("button")
button44.id = "add"
button44.textContent = "+"
td44.appendChild(button44);




const t5 = document.createElement("tr")
table.append(t5);


const td51 = document.createElement("td");
t5.appendChild(td51);
const button51 = document.createElement("button")
button51.id = "0"
button51.textContent = "0"
td51.appendChild(button51);


const td52 = document.createElement("td");
t5.appendChild(td52);
const button52 = document.createElement("button")
button52.id = "0"
button52.textContent = "00"
td52.appendChild(button52);



// const td53 = document.createElement("td");
// t5.appendChild(td53);
// const button53 = document.createElement("button")


// td53.appendChild(button53);



const td54 = document.createElement("td")
td54.colSpan = "2";
t5.appendChild(td54);
const button54 = document.createElement("button")
button54.id = "equal"
button54.textContent = "="


td54.appendChild(button54);


















































let screen = document.getElementById("result");
let buttons = document.querySelectorAll("button");
let equal = document.querySelector("#equal").innerText;

console.log(equal);
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (el) => {
        buttonText = el.target.innerText;

        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText
            screen.value = screenValue;
        }
        else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);

        } else if (buttonText == "←") {
            screen.value = screenValue.substring(0, screenValue.length - 1);
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}