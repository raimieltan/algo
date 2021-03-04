const book = ['kenneth' , 'karen' , 'karl', 'krimson' , 'kardo', 'keter', 'katrina', 'korina']
book.sort((a,b) => a-b)

console.log(book)

let firstHalf = []
let lastHalf = []

const search = (book, name) => {
    const middlePage = Math.floor(book.length / 2)

    console.log(book)
    
    if(book[middlePage] === name){
       
        return true
    }
   
    if (book.indexOf(name) < middlePage){
     
        firstHalf=book.slice(0, middlePage)
        if(search(firstHalf, name)){
            return true
        }
    }
    else if(book.indexOf(name) > middlePage){
 
        lastHalf=book.slice(middlePage, book.length)
        if(search(lastHalf, name)){
            return true
        }

    }

 
}

console.log(search(book, 'kenneth'))