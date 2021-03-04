let array = [1, 2, 5, 7, 8, 3, 6, 4]


// let array = [2,5,1,3,10,4,6,8,7,9]





function checkSorted(array) {
    for (let i = 0; i < array.length; i++) {

        prev = array[i]
        next = array[i + 1]

        if (next < prev) {
            let temp = prev
            array[i] = next
            array[i + 1] = temp

            return false
        }


    }

    return true
}

const sortArray = (array) => {

    let prev = 0
    let next = 0
    console.log(array)
    for (let j = 0; j < array.length; j++) {

        if (!checkSorted(array)) {
            for (let i = 0; i < array.length; i++) {

                prev = array[i]
                next = array[i + 1]

                if (next < prev) {
                    let temp = prev
                    array[i] = next
                    array[i + 1] = temp
                }


            }

            console.log(array)

        }
        else {
            return array;
        }

    }

}


console.log(sortArray(array))



