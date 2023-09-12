import { useEffect,useState } from "react"
import axios from "axios"
import "./index.css"


const MovieDisplay = () => {
    const apiKey = "b4cbafe6"; // Replace with your actual API key
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=b4cbafe6`;
const [movie,setMovie] = useState([]);

useEffect(() => {
    axios.get(apiUrl) // Pass the apiUrl as an argument to axios.get()
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })}, []);

  return (
    <div>
      <h1>Movie Display</h1>
      <img src={movie.Poster}/>
      <h3>Title: {movie.Title}</h3>
      <h3>Year: {movie.Year}</h3>
      <h3>Director: {movie.Director}</h3>
    </div>
  );
};

export default MovieDisplay