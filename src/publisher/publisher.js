class Publisher {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    getId() {
        return this.id;
    }
    /**
     *
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @return {string}
     */
    getAddress() {
        return this.address;
    }

    /**
     *
     * @return {string}
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
     * @param {string} address
     * @return self
     */
    setAddress(address) {
        this.address = address;
        return this;
    }

    /**
     *
     * @param {string} phone
     * @return self
     */
    setPhone(phone) {
        this.phone = phone;
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
}

module.exports = Publisher;
