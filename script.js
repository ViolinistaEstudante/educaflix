document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        { title: "Mad Max: Estrada da Fúria", genre: "action", img: "https://via.placeholder.com/200x300?text=Mad+Max" },
        { title: "A Grande Beleza", genre: "drama", img: "https://via.placeholder.com/200x300?text=A+Grande+Beleza" },
        { title: "O Grande Hotel Budapeste", genre: "comedy", img: "https://via.placeholder.com/200x300?text=O+Grande+Hotel+Budapeste" },
        // Adicione mais filmes conforme desejar
    ];

    const movieList = document.getElementById('movie-list');
    const genreFilter = document.getElementById('genre-filter');

    function renderMovies(filter) {
        movieList.innerHTML = '';
        const filteredMovies = filter === 'all' ? movies : movies.filter(movie => movie.genre === filter);

        filteredMovies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Gênero: ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                <button>Assistir</button>
            `;
            movieList.appendChild(movieItem);
        });
    }

    genreFilter.addEventListener('change', function() {
        renderMovies(this.value);
    });

    // Renderizar todos os filmes inicialmente
    renderMovies('all');
});
