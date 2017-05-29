import { getResourceId } from 'helpers/resourceHelper'

export function getFilmPosterByURL(url) {
    return getFilmPosterById(getResourceId(url));
}

export function getFilmPosterById(id) {
    switch (id) {
        case '1':
            return 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX273_CR0,0,273,402_AL_.jpg';
        case '2':
            return 'https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX273_CR0,0,273,402_AL_.jpg';
        case '3':
            return 'https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX273_CR0,0,273,402_AL_.jpg';
        case '4':
            return 'https://images-na.ssl-images-amazon.com/images/M/MV5BM2FmZGIwMzAtZTBkMS00M2JiLTk2MDctM2FlNTQ2OWYwZDZkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX273_CR0,0,273,402_AL_.jpg';
        case '5':
            return 'https://images-na.ssl-images-amazon.com/images/M/MV5BOWNkZmVjODAtNTFlYy00NTQwLWJhY2UtMmFmZTkyOWJmZjZiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY402_CR10,0,273,402_AL_.jpg'
        case '6':
            return 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY402_CR9,0,273,402_AL_.jpg'
        case '7':
            return 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX273_CR0,0,273,402_AL_.jpg'
        default:
            return '';
    }
}

export function sortFilmsByEpisode(films) {
    return films.sort((film1, film2) => film1.episode_id - film2.episode_id);
}
