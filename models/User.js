const Base = require("./Base");

class User extends Base {
    constructor() {
    };

    setFirstName(firstName) {
        this._firstName = firstName;
    };
    getFirstName() {
        return this._firstName;
    };

    setLastName(lastName) {
        this._lastName = lastName;
    };
    getLastName() {
        return this._lastName;
    };

    setUserName(userName) {
        this._userName = userName;
    };
    getUserName() {
        return this._userName;
    };

    setDisplayName(displayName) {
        this._displayName = displayName;
    };
    getDisplayName() {
        return this._displayName;
    };

    setEmail(email) {
        this._email = email;
    };
    getEmail() {
        return this._email;
    };

    setRoleId(roleId) {
        this._roleId = roleId;
    };
    getRoleId() {
        return this._roleId;
    };

};

module.exports = User;