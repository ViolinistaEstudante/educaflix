document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movie-list');

    const movies = [
        { title: 'O Senhor dos Anéis', imgSrc: 'link-para-imagem' },
        { title: 'Harry Potter', imgSrc: 'link-para-imagem' },
        // Adicione mais filmes aqui
    ];

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.imgSrc}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <button onclick="watchMovie('${movie.title}')">Assistir</button>
        `;
        movieList.appendChild(movieDiv);
    });
});

function watchMovie(title) {
    alert(`Você está assistindo: ${title}`);
    // Aqui você pode adicionar redirecionamento ou lógica de reprodução
}
