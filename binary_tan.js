let array = [1,3,2,65,45,100,70,80,90]
array.sort( (a,b) => a - b)
const binarySearch = (array, key) => {


    const middleIndex = Math.floor(array.length / 2)
    console.log(array)
    if(array[middleIndex] === key){
        return true
    }

    else {
       
        if(array[middleIndex] > key){

        
            array = array.slice(0, middleIndex)
                              
        }
        else{

            array = array.slice(middleIndex, array.length)

            
        }

        if(binarySearch(array, key)){
            return true
        }
        else{
            return false
        }


    }

 

}

console.log(binarySearch(array, 70))