export const functions = (
function renderBookPreviews() {
    const starting = document.createDocumentFragment();

    for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;
    starting.appendChild(element);
    }
    document.querySelector('[data-list-items]').appendChild(starting)
},


function createOptionsFragment() { 
    const genreHtml = document.createDocumentFragment();
    const firstGenreElement = document.createElement('option');
    firstGenreElement.value = 'any';
    firstGenreElement.innerText = 'All Genres';
    genreHtml.appendChild(firstGenreElement);

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genreHtml.appendChild(element);
}
document.querySelector('[data-search-genres]').appendChild(genreHtml)
},


function remainingBooks() {
    document.querySelector('[data-list-button]').innerHTML = 
    `<span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? matches.length - page * BOOKS_PER_PAGE : 0 })</span>
    `;
}
)
