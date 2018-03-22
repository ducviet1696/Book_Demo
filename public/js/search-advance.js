$(document).ready(function () {
    $('#search-advance').click(function () {
        var $title = $('#title');
        var $author = $('#author');
        var $publisher = $('#publisher');
        $.get('/search-advance', {
            title: $title.val(),
            author: $author.val(),
            publisher: $publisher.val(),
        }).then(renderBooks);
    })
});

function renderBooks(books) {
    var template = $('#book-template').html();
    var resultHTML = books.map(function (book) {
        return template.replace(':bookName:', book.title)
            .replace(':id:', book.id)
            .replace(':author:', book.author)
    }).join('');

    $('#list-books').html(resultHTML);
}