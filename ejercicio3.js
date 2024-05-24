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
let sounds = [];
let favsounds=[];
function average(list){
      for (const user of users) {
        sounds.push(user.favoritesSounds)
       
             }
      for (const sound of sounds) {
          console.log(sound)
          for (const element in sound) {
              console.log(element)
                  favsounds.push(element);
              }
              console.log(favsounds)
          }
      }             
average(users)
function howmanytimes(favsound){
  let k=0
  for (i=0;i<favsounds.length;i++)
  if (favsounds[i]=== favsound){
      k+=1;
  }
  console.log(k)
  console.log("el sonido "+favsound+" se repite " +k+ " veces como favorito." )
}

howmanytimes("waves")