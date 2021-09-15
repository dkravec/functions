console.log(`-----------------`)

/* Basics with functions
    3 * x - 4
    (x + 4) / 3
    n * x - m
    (x + m) - n

   //  x^2 + 5
    x**2 + 5
    Math.sqrt(x-5)
    x**2 + m
    Math.sqrt(x-m)
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
    return Math.pow(x-5, 1/3)

    // Math.pow(inverse, 1/(rasied to the power of?))
}


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


console.log(`-----------------`)
/* Loop for later graphing
const total = 39

for (index = 0; index < total; index++) {
    const ans = f(index)
    const ans_1 = f_1(index)

    console.log(`current: ${index} | function: ${ans} | inverse: ${ans_1}`)
}
*/