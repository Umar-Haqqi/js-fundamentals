// 02. Create a function that takes a sentence as input and converts it to title case. Each word in the sentence should start with a capital letter, while the remaining letters should be in lowercase.

const titleCase = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
}
console.log(titleCase("i am a little tea pot"));