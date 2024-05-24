const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
let index=0
let newmainCharacters=[];
function removeItem(array,text){
function findArrayIndex(array, text) {  
  let i =0
  for( i=0;i<array.length;i++){
      if ( array[i]===text){
          index = i+1
      }      
}
}
findArrayIndex(array,text)
  array.splice(index-1,1)
}
removeItem(mainCharacters,"Chewbacca")
console.log(index)
console.log(mainCharacters)