
const matchingPairs = (numbers) => {

    const sortedNumbers = [...numbers]
    sortedNumbers.sort((a, b) => a - b)
    const pairs = []

    let difference = 0

    if (numbers.length > 5) {
        difference = 3
    }
    else {
        difference = 2
    }

    for (x of sortedNumbers) {
        for (y of numbers) {

            if (x === y) {
                pairs.push([x, numbers.indexOf(y)])
            }
        }
    }

    const validPairs = []
    for (let pair of pairs) {

        if (pair[0] > pair[1]) {
            if (pair[0] - pair[1] < difference) {
                validPairs.push([pair[0], pair[1]])
            }
        }
        else {
            if (pair[1] - pair[0] < difference) {
                validPairs.push([pair[0], pair[1]])
            }

        }

    }

    console.log(validPairs)

    return validPairs.length

}


const numbers1 = [2, 5, 3, 8, 7, 4, 6, 9, 1]
const numbers2 = [4,3,2,1]
const numbers3 = [1,2,3]


console.log(matchingPairs(numbers1))
console.log(matchingPairs(numbers2))
console.log(matchingPairs(numbers3))