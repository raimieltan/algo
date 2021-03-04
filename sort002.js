let array = [2,8,5,3,4,1]


for(let i = 0; i < array.length; i++){

    for(let j = i + 1; j < array.length; j++){
        let next = array[j]
        let prev = array[i]

        if(prev > next){
           
            array[array.indexOf(next)] = prev
          
            array[i] = next

            console.log(array)
          
          
        }



    }
}

console.log(array)

