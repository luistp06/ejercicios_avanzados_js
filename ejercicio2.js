const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
let suma = 0;
let averageconst = 0;
let sounds = []
let volumen=[];
function average(list){
      for (const user of users) {
        sounds.push(user.favoritesSounds)
       
             }
      for (const sound of sounds) {
  
      for (const prop in sound) {
         console.log( sound[prop].volume)
             volumen.push(sound[prop].volume)
             suma+=sound[prop].volume
          }
      }
      averageconst=suma/volumen.length;
      console.log(averageconst)
          
          }
      
                      
               
average(users)