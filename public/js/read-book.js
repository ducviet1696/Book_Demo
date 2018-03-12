$(function() {
    // GET/READ
    $('#get-button').on('click', function() {
        $.ajax({
            url: '/books',
            contentType: 'application/json',
            success: function(response) {
                let tbodyBook = $('tbody');

                tbodyBook.html('');
                response.forEach(function(product) {
                    tbodyBook.append('\
                        <tr>\
                            <td class="id">' + product.id + '</td>\
                            <td class="title">' + product.title + '</td>\
                            <td class="author">' + product.author + '</td>\
                            <td class="publisher">' + product.publisher + '</td>\
                            <td class="price">' + product.price + '</td>\
                            <td align="center">\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });

            }
        });
    });

    $('table').on('click', '.delete-button', function() {
        let rowBook = $(this).closest('tr');
        let id = rowBook.find('.id').text();

        $.ajax({
            url: '/book/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });
});