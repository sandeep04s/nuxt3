// interfaces.ts

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  
  export interface OMDBResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
    Error?: string;
  }

  export interface movieData{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Plot: string;
    Genre: string;
    Director: string;
    Actors: string;
    Writer: string;
    Language: string;
    Country: string;
    Awards: string;
    imdbRating: string;
    Runtime: string;
    Released: string;
  }
  