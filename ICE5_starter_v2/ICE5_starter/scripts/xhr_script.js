console.log('xhr_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
let xhr = new XMLHttpRequest();

// create a callback function to fire when the onreadystatechange happens
xhr.onreadystatechange = function() {
    // check that the state is done
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // if successful response
        if (xhr.status === 200) {
            // turn response into JSON
            let response = JSON.parse(xhr.responseText);
            console.log(response); // console log to see what we have

            // update the 1st image
            // Assuming there's an image element with id 'firstImage'
            document.getElementById('firstImage').src = response[0].url;

            // update the 1st figcaption
            // Assuming there's a figcaption element with id 'firstCaption'
            document.getElementById('firstCaption').innerText = response[0].caption;

            // update the 2nd image
            // Assuming there's an image element with id 'secondImage'
            document.getElementById('secondImage').src = response[1].url;

            // update the 2nd figcaption
            // Assuming there's a figcaption element with id 'secondCaption'
            document.getElementById('secondCaption').innerText = response[1].caption;
        } else {
            // send error message if request fails
            console.error('Error occurred while fetching data:', xhr.status);
        }
    }
};

// use the .open() method to configure the object
xhr.open('GET', url_photos, true);

// add datatype to header
xhr.setRequestHeader('Content-Type', 'application/json');

// use the .send() method to send the request
xhr.send();