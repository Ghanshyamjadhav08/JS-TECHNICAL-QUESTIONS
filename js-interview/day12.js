// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Title



function capitalize(str){
    let result = '';

    let words = str.split(' ');
    for(let i = 0; i< words.length; i++){
        let word = words[i];
        let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
        result += capitalizeWord + '';

    }
    return result.trim();
}

console.log(capitalize("shyam jadhav"));


function capitalize(str) {
    const words = str.split(' ')
    //['this', 'is', 'mukhtar'..]
    
  
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  
  }
  console.log(capitalize('shyam jadhav'))