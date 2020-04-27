var arr = [1,2,3,4,5]
console.log(arr)

console.log(arr[3]) //displays the 3rd index of the array
    
console.log(arr.length) //tells us how many index is in array

const arr1 = ['string', 'text']

console.log(1 in arr) //means there is a value in index 1 of an array

console.log(arr.slice(1,3))
//slice is taking the indexes 1 to 3 and making a new array, ie index to start on and index to end on

console.log(arr.pop())
//pops out the last value of an array (literally removes it)

console.log(arr.push("INSERTING"))
console.log(arr)
//pushes the parameter into the last index of an array

console.log(arr.pop())

console.log(arr.concat(arr1))
//merges two arrays into one with concat command

arr.forEach(number => console.log(number))
//output each index's value on new lines in console log(not sure what number thing is for, maybe u can write any word)

const firstNum = arr.shift()
console.log(firstNum)
console.log(arr)
//takes the first index out and assigns it to variable firstNum, with shift command

console.log(arr.unshift(99))
console.log(arr)
//adds elements to the start of array

const arrayReverse = arr.reverse()
console.log(arrayReverse)
//outputs the array backwards

console.log(arr.indexOf(3))
//finds the index of the number 3, since we reversed it, its now first index

const arr2 = arr.map (x => x + 1)  //for these arrow functions it can be anything apparently ie a word, or x, anything but it signifies the elements of array
console.log(arr2)
//the particuar method is adding +1 to each element. can also do things like double it by going * 2
//makes a new array out of whatever equation you have done to the first array

const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb')
// inserts at index 1
console.log(months)

months.splice(4, 1, 'May')
// replaces 1 element at index 4
console.log(months)
//looks like for splice 0 is used to insert, and 1 is used to replace