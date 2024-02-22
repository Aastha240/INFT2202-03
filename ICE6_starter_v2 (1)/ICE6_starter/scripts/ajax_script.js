//Aastha minhas
//100859631
//

console.log('ajax_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';


// Function to use jQuery to send a GET request

function getData(url) {
    return $.get(url);
}


// For every URL, call the function and record the output.

getData(url_posts).then(data => console.log('Posts:', data));
getData(url_comments).then(data => console.log('Comments:', data));
getData(url_albums).then(data => console.log('Albums:', data));
getData(url_photos).then(data => console.log('Photos:', data));
getData(url_todos).then(data => console.log('Todos:', data));
getData(url_users).then(data => console.log('Users:', data));

// Take two random pictures and put them in the image elements.
getData(url_photos).then(data => {

    // Obtain two random indices.
    const randomIndex1 = Math.floor(Math.random() * data.length);
    const randomIndex2 = Math.floor(Math.random() * data.length);

    // Present the two random pictures.
    $('#photo1').attr('src', data[randomIndex1].url);
    $('#photo2').attr('src', data[randomIndex2].url);

});
