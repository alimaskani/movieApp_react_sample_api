import React, {useEffect, useState} from "react";
import SearchIcon from "../assets/img/search.svg";
import MovieCard from "./MovieCard";
import axios from "axios";
import "../App.css";




const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

    useEffect(() => {
        searchMovies(searchTerm);
    }, [searchTerm]);

    const searchMovies = async (title) => {
        const response = await axios.get(`${API_URL}&s=${title}`).then((res) => {
            const data = res.data;
            setMovies(data.Search);
        })
    };

    return (
        <>
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie,key) => (
                        <MovieCard key={key} movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </>
    )

}

export default Home