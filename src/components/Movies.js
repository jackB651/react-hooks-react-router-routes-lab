import React from "react";
import { movies } from "../data";

console.log()
function Movies() {
  const movieCard = movies.map((movie)=>{
    return <div key = {movie.title}>
              {movie.title}
              {movie.time}
               <ul>
                {movie.genres.map(genere=><li key={genere}>{genere}</li>)}
               </ul>
           </div>
  })
  return <div>
            <h1>Movies Page</h1>
            {movieCard}
         </div>
}

export default Movies;
