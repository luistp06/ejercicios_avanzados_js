const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
  let categorias=[];
  function CategorieMovie(list){
    for (const movie of list) {
       for (let i =0;i<movie.categories.length;i++) {
        if(!categorias.includes(movie.categories[i])){
                categorias.push(movie.categories[i])
        }
       }
    }
    console.log(categorias)
  }
  console.log(categorias)
 CategorieMovie(movies)
    
  