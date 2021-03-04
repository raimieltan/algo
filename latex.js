
let formula = [{name: 'x', value: 5} , {name: 'y', value: 5}] 

let variables = []

for(let item of formula){
    variables.push(item.name)
}

console.log(variables)

let string = "x + y"

let counter = 0
for(let item of variables){
    string = string.replace(item, formula[counter].value)
    counter++
}

console.log(string)