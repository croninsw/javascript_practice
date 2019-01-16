
const addTwoNumbers = (first, second) => {
    console.log(first + second)
}

const calculate = (first, second, fn) => {
    fn(first, second)
}

calculate(444, 31, addTwoNumbers)