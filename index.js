var functionsCount
var chart

console.log(`-----------------`)

/* Basics with functions
    3 * x - 4
    (x + 4) / 3
    n * x - m
    (x + m) - n

   //  x^2 + 5
    x**2 + 5
    Math.pow(x-5, 1/2)
    x**2 + m
    Math.sqrt(x-m)
    Math.pow(x-m, 1/2)
*/

function f(x) {
    return 3 * x - 4
}

function f_1(x) {
    return (x + 4) / 3
}

function g(x) {
    return x**2 + 5
}


function g_1(x) {
    return Math.pow(x-5, 1/2)
    // Math.pow(inverse, 1/(rasied to the power of?))
}

// /* ALL OPERATIONS
const fFunction = f(2)
console.log(`f(2) : ${fFunction}`)
const fInverse = f_1(2)
console.log(`f(2)^-1 : ${fInverse}`)
const gFunction = g(8)
console.log(`g(8) : ${gFunction}`)
const gInverse = g_1(8)
console.log(`g(8)^-1 : ${gInverse}`)
const addition = f(2) + g(8)
console.log(`f(2) + g(8) : ${addition}`)
const multiplication = f(2) * g(8)
console.log(`f(2) * g(8) : ${multiplication}`)
const division = f(2) / g(8)
console.log(`f(2) / g(8) : ${division}`)
const subtract = f(2) - g(8)
console.log(`f(2) - g(8) : ${subtract}`)
const compositionFoG = f(g(8))
console.log(`f(g(8)) : ${compositionFoG}`)
const compositionFoGInverse = f(g_1(8))
console.log(`f(g(8)^-1) : ${compositionFoGInverse}`)
const compositionGof = g(f(2))
console.log(`g(f(2)) ${compositionGof}`)
const compositionGoFInverse = g(f_1(2))
console.log(`g(f(2)^-1) : ${compositionGof}`)
// */

console.log(`-----------------`)
// /* Loop for later graphing
const total = 39
const xMax = 20
const xMin = -20

const yMax = 20
const yMin = -20

/*
var xValues = [];
var yValues = [];
var yValuesInverse = [];

for (index = xMin; index < xMax; index++) {
    const ans = f(index)
    const ans_1 = f_1(index)
    // xValues.push(index)
    //yValues.push(ans)
    yValuesInverse.push(ans_1)
    console.log(`function: (${index}, ${ans}) | inverse: (${index}, ${ans_1})`)
}
*/

function websiteGraph(data) {    
    const { dataValues, xValues } = data
    console.log(dataValues)


    const chart = new Chart("mainChart", {
        type: "line",
        title: {
            text: "Line Chart with Dashed line"             
        },
        data: {
            labels: xValues,
            datasets: dataValues /*[

                {
                    fill: false,
                    pointRadius: 1,
                    borderColor: "rgba(255,0,0,0.5)",
                    data: yValues,
                },
            ]*/
        },
    // options: {...}
    });
    console.log(chart)
}

function generateData(value, i1, i2, step = 1) {
    var yValues = []
    var xValues = []

    for (let x = i1; x <= i2; x += step) {
        console.log(value)
        console.log(2 * x)
        yValues.push(eval(value));
        xValues.push(x);
        console.log('---')
        console.log(`(${x}, ${eval(value)})`)
    }

    return {xValues, yValues}
}

// generateData("Math.sin(x)", 0, 10, 0.5);
console.log('---')
console.log(generateData("x * 2 + 7", 0, 10, 0.5));
console.log('---')

// websiteGraph()

// */

function inputAmountFunctions() {
    const amountFunctions = document.getElementById('amountFunctions').value
    if (!amountFunctions) return document.getElementById('errorArea').innerHTML = `Please input number of functions`

    const amountISNaN = isNaN(amountFunctions)
    
    if (amountISNaN === true) return document.getElementById('errorArea').innerHTML = `You must input just a number.`;
    else if (amountFunctions > 20) return document.getElementById('errorArea').innerHTML = `You must input a number smaller than 20`;
    else {
        document.getElementById('functionInfo').innerHTML = `
            <a onclick="drawGraph(${amountFunctions})">Draw All Functions</a>
        `
        
        for (index = 0; index < amountFunctions; index++) {
            addChartInputs(index + 1)
        }
    }
    
}
function drawGraph(amount) {
    var dataValues = []
    var xValues
    
    for (index = 0; index < amount; index++) {
        const func = document.getElementById(`myFunction${index+1}`).value
        console.log(func)
        if (!func) return


        const funcArgs = func.split("")
        console.log(funcArgs)

        const parseFunc = funcArgs.join(" ")
        
        console.log(parseFunc)

        const funcData = generateData(func, 0, 10, 0.5);
        console.log(funcData)
        var { xValues } = funcData

        var current = {
            fill: false,
            pointRadius: 1,
            borderColor: "rgba(255,0,0,0.5)",
            data: funcData.yValues,
        }

        dataValues.push(current)
       //  console.log(index)
    }
    console.log(dataValues)
    websiteGraph({dataValues, xValues})
    
}

function addChartInputs(Count) {
    document.getElementById('functionInfo').innerHTML += `
        <div id="functionDiv${Count}"">
            <input type="text" id="myFunction${Count}" placeholder="Function ${Count}"></input>
            <a id="myChart${Count}" onclick="TableNumbers(${Count})">Table</a>
        </div>
    `
}

function TableNumbers(count) {
    const func = document.getElementById(`myFunction${count}`).value
    const funcData = generateData(func, 0, 10, 1);
    console.log(funcData)
    var xValues = []
    var yValues = []

    for (x of funcData.xValues) {
        console.log(x)
        xValues.push(x)
    }

    for (y of funcData.yValues) {
        console.log(y)
        yValues.push(y)
    }
    var values = []
    for (index=0; index < xValues.length; index++) {
        console.log(index)
        values.push(`(${xValues[index]}, ${yValues[index]})`)
    }
    console.log(values)
    const newValues = values.join(" ")
    console.log(newValues)
    document.getElementById('errorArea').innerHTML= `${newValues}`
}

function addLine(count) {
    const currentFunc = document.getElementById(`myFunction${count}`).value
    // generateData(currentFunc)


    if (count==1) {
        const data = generateData("x * 2 + 7", 0, 10, 0.5);
        console.log(data)
        websiteGraph(data)
    }
    if (count == 2) {
        const data = generateData("Math.sin(x)", 0, 10, 0.5);
        console.log(data)
        //websiteGraph(data)
    }
    console.log(count)
}

function parseFunction(currentFunc) {
   // if (currentFunc.includes)
}

var inputMessage = "2times3^2"
const oldMessage = inputMessage

var inputMessage = lookFor(inputMessage, "times", "*")
var message = lookFor(inputMessage, "^", "**")

function lookFor(message, looking, replaceWith){
    console.log(`${message} '${looking}' :${replaceWith}: 5`)

    let myLookReg = new RegExp(looking, "g")
    if (!myLookReg) return message
    var lookupMM = message.match(myLookReg);


    if (!lookupMM) return message

    for (indexEveryoneRemoving = 0; indexEveryoneRemoving < lookupMM.length; indexEveryoneRemoving++) {
        message = message.replace(looking, replaceWith) 
    }

    return message
}

// mathSubmit('2 times 2')

function mathSubmit(mathInput) {
    var mathInput = document.getElementById('mathInput').value
    
    var message 
    message = lookFor(mathInput, "times", "*")
    message = lookFor(message, "^", "**")
    const goodChars = ["*","0", "1","2","3","4","5","6","7","8","9"," ", "+", "/", "(",")","f","g", "_"]
    var goodMessage = []

    for (c of message) {
        var validC = false
        for (goodC of goodChars) {
            if (c == goodC) {
                goodMessage.push(c)
                validC = true
            }
        }
    }

    const endMessage = goodMessage.join("")
    const ans = eval(endMessage)

    document.getElementById('errorArea').innerHTML = `${mathInput} -> ${endMessage} = ${ans}`
}

console.log(`old: ${oldMessage} | new ${message}`)

console.log(3*2+2) // expected output 8
console.log(2+3*2) // expected output 8