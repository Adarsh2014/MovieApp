import useMovieList from "../utils/useMovieList";
import Description from "../static/Description";
import Shimmer from "../shimmer/Shimmer";
import "./movieList.css";
function MovieList() {
    const movieInfo = useMovieList();
    const firstData = movieInfo[0];
    console.log(firstData);

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

                    <li className="movie-cart">
                        <img
                            src="https://www.w3schools.com/images/w3schools_green.jpg"
                            alt="Movie Poster"
                            className="movie-cart-image"
                        ></img>
                        <div className="movie-cart-details">
                            <h1>Bhojpuri</h1>
                            <h3>2020</h3>
                            <h3>112 min</h3>
                            <Description />
                        </div>
                    </li>

                    <li className="movie-cart">
                        <img
                            src="https://www.w3schools.com/images/w3schools_green.jpg"
                            alt="Movie Poster"
                            className="movie-cart-image"
                        ></img>
                        <div className="movie-cart-details">
                            <h1>Tamil</h1>
                            <h3>2021</h3>
                            <h3>120 min</h3>
                            <Description />
                        </div>
                    </li>

                    <li className="movie-cart">
                        <img
                            src="https://www.w3schools.com/images/w3schools_green.jpg"
                            alt="Movie Poster"
                            className="movie-cart-image"
                        ></img>
                        <div className="movie-cart-details">
                            <h1>Malyalam</h1>
                            <h3>2022</h3>
                            <h3>100 min</h3>
                            <Description />
                        </div>
                    </li>

                    <li className="movie-cart">
                        <img
                            src="https://www.w3schools.com/images/w3schools_green.jpg"
                            alt="Movie Poster"
                            className="movie-cart-image"
                        ></img>
                        <div className="movie-cart-details">
                            <h1>Telagu</h1>
                            <h3>2023</h3>
                            <h3>180 min</h3>
                            <Description />
                        </div>
                    </li>

                    <li className="movie-cart">
                        <img
                            src="https://www.w3schools.com/images/w3schools_green.jpg"
                            alt="Movie Poster"
                            className="movie-cart-image"
                        ></img>
                        <div className="movie-cart-details">
                            <h1>Hindi</h1>
                            <h3>2024</h3>
                            <h3>130 min</h3>
                            <Description />
                        </div>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default MovieList;
