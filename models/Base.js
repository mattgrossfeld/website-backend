class Base {
    constructor() {
    };

    setId(id) {
        this._id = id;
    };
    getId() {
        return this._id;
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

module.exports = Base;