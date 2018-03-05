class Publisher {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
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
}

module.exports = Publisher;
