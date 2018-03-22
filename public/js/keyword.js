$(document).ready(function () {
    $('#search-keyword').change(function () {
        var $this = $(this);
        $.get('/search-basic', {
            keyword: $this.val(),
        }).then(renderBooks)
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
});