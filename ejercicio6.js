const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  function swap(array, parameter1, parameter2){
        let joker=array[parameter1];
        array[parameter1]=array[parameter2];
        array[parameter2]=joker;
    console.log(array)
    return array
  }
  let newarray= swap(fantasticFour, 0, 1)
  console.log(newarray)