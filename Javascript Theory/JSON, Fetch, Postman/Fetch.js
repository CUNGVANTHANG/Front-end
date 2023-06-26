// 1. Front-end: Xây dựng giao diện người dùng
// 2. Back-end: Xây dựng logic xử lý + Cơ sở dữ liệu

// API (URL) -> Application Programing Interface
// Cổng giao tiếp giữa các phần mềm

// Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> Javascript types -> Render ra giao diện với HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi) 
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })

    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('comment-block').innerHTML = html;
    })

    .catch(function() {
        console.log('Có lỗi!');
    });