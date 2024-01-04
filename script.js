//store every product count in an array

//store product details in an object

const products = [
    productName = [],
    description = [],
    quantity = [],
    unitOfMeasure = []

];

//console.log(typeof products.quantity);//0bject
let numEntry = '';
let counterEl = document.getElementById('counter-el');
let countLogEl = document.getElementById('count-log-el');
let displaySumEl = document.getElementById('display-sum');


function counterIncrement(productName, description, count, unit) {

    productName = document.querySelector('.text-input-product').value;
    products[0].push(productName);

    description = document.querySelector('.text-input-description').value;
    products[1].push(description);


    unit = document.querySelector('.text-input-unit-measure').value;
    products[3].push(unit);

    // var inputField = document.getElementById('number-input');
    // inputField.oninput = function() {
    //     var removeChar = this.value.replace(/[^0-9\.]/g, ""); //removes alphabets
    //     var removeDot = removeChar.replace(/\./g, ""); //removes dot
    //     this.value = removeDot;
    //     var formattedNum = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //removes formatted numbers
    //     this.value = formattedNum;
    // }
    count = document.getElementById('number-input').value;
    products[2].push(count);

    counterEl.textContent = `Your count is: ${count} ${unit} of ${description} ${productName}`;

    if (!count) {
        alert("Quantity count cannot be empty! You need to refresh the page to start over again. We are working on the bug to fix empty submission.");
        return false;
    } else {
        return true;
    }


}




function save(count) {
    count = document.getElementById('number-input').value;
    count = document.getElementById('number-input').value = "";

    countLogEl.textContent = "Count Log: ";

    for (let i = 0; i < products[2].length; i++) {
        numEntry = countLogEl.textContent += products[2][i] + " + ";


    }
    counterEl.textContent = `Your count is: 0`;

}

function sumArray(numSum) {
    let sum = 0;
    const numArray = [];
    products[2].forEach(element => {
        if (typeof(element) === "string") {
            let numEl = parseInt(element);
            return numArray.push(numEl);
        }
    })
    console.log(numArray);
    console.log(typeof numArray);

    numSum = Object.values(numArray).reduce(function(sum, curr) {
        return sum + curr;
    });
    console.log(typeof sum);
    console.log(typeof numSum);

    displaySumEl.textContent = `Total: `;
    displaySumEl.textContent += `${numSum}`;




    // sum.match(/\b(\d{1-10}|\d{11})\b/);
}