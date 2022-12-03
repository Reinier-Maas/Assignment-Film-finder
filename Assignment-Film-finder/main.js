import { movies } from "./movies.js";

//////////////GET ALL MOVIES//////////////

let addMoviesToDOM = movies.map(m => m);

const newUl = document.createElement('ul');
    newUl.classList += 'grid-container';
    newUl.id += 'movieUl';

document.getElementById('movieList').appendChild(newUl);

let newLiList = [];

addMoviesToDOM.forEach(m => {
    let newLi = document.createElement('li')

    let movieLink = document.createElement('a');
    movieLink.href += 'https://www.imdb.com/title/' + m.imdbID

    let moviePoster = document.createElement('img');
    moviePoster.classList += 'moviePosterContainer'
    moviePoster.src += m.poster;

    movieLink.appendChild(moviePoster);
    newLi.appendChild(movieLink);

    newLiList.push(newLi);
});

newLiList.forEach(m => {
    newUl.appendChild(m);
});


//////////////BUTTONS//////////////

let filteredUl = document.getElementById('movieUl');

let filteredLiList = [];

let filterButtons = document.querySelectorAll('[name="filterBtn"]')

for (const element of filterButtons) {
    element.addEventListener('change', (event) => {

            switch (event.target.value){

                case "latest":
                    console.log('Clicked on Latest movies, 2014 or newer')
                    
                    filteredLiList = [];

                    document.getElementById('movieUl').innerHTML = '';

                    let filterLatest = movies
                        .filter(m => m.year >= '2014')
                        .filter(m => m.type == 'movie')
                        .map(m => m);

                    filterLatest.forEach(m => {
                        let newLi = document.createElement('li')
                    
                        let movieLink = document.createElement('a');
                        movieLink.href += 'https://www.imdb.com/title/' + m.imdbID

                        let moviePoster = document.createElement('img');
                        moviePoster.classList += 'moviePosterContainer'
                        moviePoster.src += m.poster;
                    
                        movieLink.appendChild(moviePoster);
                        newLi.appendChild(movieLink);
                    
                        filteredLiList.push(newLi);
                    });

                    filteredLiList.forEach(m => {
                        filteredUl.appendChild(m);
                    });

                    break;

                case event.target.value:
                    console.log('Clicked on ' + event.target.value)

                    filteredLiList = [];

                    document.getElementById('movieUl').innerHTML = '';

                    let filterMovies = movies
                        .filter(m => m.title.toLowerCase().includes(event.target.value))
                        .map(m => m);

                    filterMovies.forEach(m => {
                        let newLi = document.createElement('li')
                    
                        let movieLink = document.createElement('a');
                        movieLink.href += 'https://www.imdb.com/title/' + m.imdbID

                        let moviePoster = document.createElement('img');
                        moviePoster.classList += 'moviePosterContainer'
                        moviePoster.src += m.poster;
                    
                        movieLink.appendChild(moviePoster);
                        newLi.appendChild(movieLink);
                    
                        filteredLiList.push(newLi);
                    });
                    
                    filteredLiList.forEach(m => {
                        filteredUl.appendChild(m);
                    });
                    break;    
            } 
    })
};
