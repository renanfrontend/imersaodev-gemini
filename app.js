// Lógica de pesquisa
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const gameLists = document.querySelectorAll('.game-list');

function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();

    gameLists.forEach(gameList => {
        gameList.querySelectorAll('li').forEach(listItem => {
            const gameTitle = listItem.querySelector('h3').textContent.toLowerCase();

            // Exibe todos os jogos se o campo de pesquisa estiver vazio
            if (searchTerm === '') {
                listItem.style.display = 'block';
            } else {
                // Exibe apenas os jogos que correspondem à pesquisa
                if (gameTitle.includes(searchTerm)) {
                    listItem.style.display = 'block';
                } else {
                    listItem.style.display = 'none';
                }
            }
        });
    });
}

searchButton.addEventListener('click', filterGames);
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        filterGames();
    }
});

// Lógica para alternar o tema (claro/escuro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});