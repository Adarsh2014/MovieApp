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
