Created Movie App which fetch data from API.

Created Custom hook for fetching data.
import { useEffect, useState } from "react";
function useMovieList() {
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(
                    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
                );

                const json = await data.json();
                setMovieInfo(json);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
    }, []);
    return movieInfo;
}
export default useMovieList;


    return (
        <div className="App">
            <h1>Movie App</h1>

            {movieInfo.length === 0 ? (
                <Shimmer/>
            ) : (
                <ul className="movie-list">
                    {movieInfo.map((movies, i) => (
                        <li key={i} className="movie-cart">
                            <img
                                src={movies.Poster}
                                alt="Movie Poster"
                                className="movie-cart-image"
                            ></img>
                            <div className="movie-cart-details">
                                <h1>{movies.Title}</h1>
                                <h3>{movies.Year}</h3>
                                <h3>{movies.Runtime}</h3>
                                <Description />
                            </div>
                        </li>
                    ))}
                    </ul>
            )}
        </div>
    );

Steps to push code on Github
1)git init
2)git branch -M main
3)git add .
4)git commit -m "day-1-task"
5)git remote add origin git@github.com:Adarsh2014/MovieApp.git
6)git push origin main
