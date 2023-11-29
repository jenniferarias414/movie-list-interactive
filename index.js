console.log('hello world')

let message = document.querySelector('#message')

const addMovie = event => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = " "
}

const button = document.querySelector('form')
button.addEventListener('submit', addMovie)

const deleteMovie = event => {
    event.target.parentNode.remove()

    message.textContent = "Movie deleted, homie!"
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    // why not .checked
    if(event.target.classList.contains('checked')){
    message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back, just because you need to watch it!"
    }
}
