// let arr = [11, 22, 33, 44, 55];
// console.log(arr);

// --- to empty an array
// arr.length = 0;
// arr = [];


// let position = arr.indexOf(33)
// console.log(position);


// let string = "it is a string";
// // with space
// // let arrFromString = string.split(" ");
// // with s
// let arrFromString = string.split("s");
// console.log(arrFromString);


// to make an String from array
// console.log(arr.join("-"));


// to make a single array from two or more arrays
// let arr2 = [66, 77, 88];
// let arr3 = [99, 100];
// console.log(arr.concat(arr3, arr2));



let books = ["physics", "maths", "chemistry"];

for (i = 0; i < books.length; i++) {
    if (books[i].includes("maths")) {
        console.log(i + " " + true + " " + books[i]);
    }
    console.log(books[i]);
}



// multidimensional array
// let arr = [
//     ["first", "1"],
//     ["second", "2"]
//     ["third", "3"]
// ]
// let fetch = arr[1]
// console.log(fetch);