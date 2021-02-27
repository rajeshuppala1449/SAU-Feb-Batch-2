function getMovies(type, page) {

    fetch("https://api.themoviedb.org/3/movie/" + type + "?api_key=fe9d22e75d70883407093de1daed3c8b&language=en-US&page=" + page)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            return json.results;
        })

}
export default getMovies;