const Publisher = require('../publisher/publisher');

class Book{

    /**
     * 
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * 
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     * 
     * @return {string}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * 
     * @return {Publisher}
     */
    getPublisher() {
        return this.publisher;
    }

    /**
     * 
     * @return {number}
     */
    getPrice() {
        return this.price;
    }

    /**
     * 
     * @return {INT}
     */
    getId() {
        return this.id;
    }

    /**
     * 
     * @param {string} title
     * @return self
     */
    setTitle(title) {
        this.title = title;
        return this;
    }

    /**
     * 
     * @param {string} author
     * @return self
     */
    setAuthor(author) {
        this.author = author;
        return this;
    }

    /**
     * 
     * @param {Publisher} publisher
     * @return self
     */
    setPublisher(publisher) {
        this.publisher = publisher;
        // return this;
    }

    /**
     * 
     * @param {number} price
     * @return self
     */
    setPrice(price) {
        this.price = price;
        return this;
    }

    /**
     * 
     * @param {INT} id
     * @return self
     */
    setId(id) {
        this.id = id;
        return this;
    }

    /**
     *
     * @return {{id: INT, title: string, author: string, publisher: string, price: number}}
     */
    toJson() {
        return {
            id       :this.getId(),
            title    :this.getTitle(),
            author   :this.getAuthor(),
            publisher:this.getPublisher(),
            price    :this.getPrice()
        }
    }
    
}

module.exports = Book;
