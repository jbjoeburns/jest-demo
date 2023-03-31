const add = (num1, num2) => { 
    return num1 + num2; 
   }

const truthTest = (inputVal) => {
    if (inputVal == "Testing") {
        return true
    }
    else {
        return false
    }
}

car = {}
const carBuilder = () => {
    let car = {colour: "Red",
    fuelType: "Gas"}
    return car
}

const array1 = ['awda', 'bawfawfawwf', 'cawfa'];
const lengthChecker = () => {
        outputVal = []
        for (const element of array1) {
        if (element.length > 5) {
            outputVal.push(element)
            
        }
        return outputVal
      }
    
}
console.log(lengthChecker())

const numb2str = (num) => {
    return num.toString();
}

const planetChecker = (planNum) => {
    planNum = planNum - 1
    planetsList = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    return planetsList[planNum]
}

const studentCount = (register) => {
    i = 0
    for (const element of register) {
        if (element == true) {
            i++
        }

    }
    return i
}

const squareFunct = (numb2bSq) => {
    totalNumb = ""
    numb2bSq = numb2bSq.toString()
    const arrayConv = numb2bSq.split("");
    for (const element of arrayConv) {
        elementNumb = Number(element) ** 2
        totalNumb = totalNumb.concat(elementNumb.toString())
    }
    return Number(totalNumb)
}

const yrCent = (yr) => {
    yr = yr.toString()
    yrSlice = yr.slice(0, 2);
    return Number(yrSlice[0] + yrSlice[1])
}

const binaryConvert = (binaryVal) => {
    binaryStr = ""
    for (const element of binaryVal) {
        binaryStr = binaryStr.concat(element.toString())
    }
    return parseInt(binaryStr, 2)
}

module.exports = {add, truthTest, carBuilder, lengthChecker, numb2str, planetChecker, studentCount, squareFunct, yrCent, binaryConvert}