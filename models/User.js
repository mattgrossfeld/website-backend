class User {
    constructor() {
    };

    setId(id) {
        this._id = id;
    };
    getId() {
        return this._id;
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

    setRole(role) {
        this._role = role;
    };
    getRole() {
        return this._role;
    };

    setModifiedTm(modifiedTm) {
        this._modifiedTm = modifiedTm;
    };
    getModifiedTm() {
        return this._modifiedTm;
    };

    setModifiedBy(modifiedBy) {
        this._modifiedBy = modifiedBy;
    };
    getModifiedBy() {
        return this._modifiedBy;
    };

    setCreatedTm(createdTm) {
        this._createdTm = createdTm;
    };
    getCreatedTm() {
        return this._createdTm;
    };

    setCreatedBy(createdBy) {
        this._createdBy = createdBy;
    };
    getCreatedBy() {
        return this._createdBy;
    };

};

module.exports = User;