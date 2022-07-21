const btn = document.querySelector('.btn');
btn.addEventListener('click', infoForUser);
function infoForUser() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(function(response) {
        return response.json() 
    })
    .then(function(data) {
        console.log(data)
    })
}