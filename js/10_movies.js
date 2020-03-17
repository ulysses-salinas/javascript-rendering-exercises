;(function () {
 
  function buildMovieHTML (movie) {
    for (let i = 0; i < moviesData.length; i++){
      if(moviesData[i].rottenTomatoesRating % 1 !==0){
      moviesData[i].rottenTomatoesRating = moviesData[i].rottenTomatoesRating * 100;
    }
    }
     return `
         <div class="d-flex flex-column align-items-center main-back">
         <div class="d-flex flex-row align-items-center">
         <div class="d-flex flex-column align-items-center">
         <img src= ${movie.poster} class="movie-poster">
         </div>
         <div class="d-flex flex-column align-items-center right-back">
         <div class="d-flex flex-column align-items-left">
            <div class="title"> ${movie.title}</div>
            <div class="year"> ${movie.year}</div>
            <div class="imdb"> 
            IMDB:</div>
 
            <div class="rating">${movie.imdbRating}/10
            </div>
            <div class="rotten"> Rotten Tomatoes: </div>
            <div class="tomato">
            ${movie.rottenTomatoesRating}%</div>
            </div>
         
         </div>
         </div>
         </div>
     `
   }
 
  
   const moviesData = [
     {
       title: 'The Dark Knight',
       year: 2008,
       imdbID: 'tt0468569',
       poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
       imdbRating: 9,
       rottenTomatoesRating: 0.94
     },
     {
       title: 'The Dark Knight Rises',
       year: 2012,
       imdbID: 'tt1345836',
       poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',
       imdbRating: 8,
       rottenTomatoesRating: 0.82
     },
     {
       title: 'The Incredibles',
       year: 2004,
       imdbID: 'tt0317705',
       poster: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg',
       imdbRating: 9,
       rottenTomatoesRating: 0.91
     }
   ]
 
  let contentElement = document.getElementById('content')
  let moviesBtn = document.getElementById('moviesBtn')
 
  function clickMoviesBtn () {
 
  contentElement.innerHTML = `
       <div class="d-flex flex-column align-items-center ">
       
       
       ${moviesData.map(buildMovieHTML).join(' ')}
       </div>
       
       `
       
 }
 
  
 moviesBtn.addEventListener('click', clickMoviesBtn)
 
  
   
 
 
 
 })()