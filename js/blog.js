// Blog button's functionality
const blogButton = document.getElementById('blog-button');
if (blogButton) {
    blogButton.addEventListener('click', function () {
        window.location.href = './html/blog.html';
    });
}

// Home button's functionality
const homeButton = document.getElementById('home-button');
if (homeButton) {
    homeButton.addEventListener('click', function () {
        window.location.href = '../index.html';
    });
}