class Community {
    constructor() {
    };

    setId(id) {
        this._id = id;
    };
    getId() {
        return this._id;
    };
    
    setCommunityName(roleName) {
        this._roleName = roleName;
    };
    getCommunityName() {
        return this._roleName;
    };

    setCommunityDescription(roleDescription) {
        this._roleDescription = roleDescription;
    };
    getCommunityDescription() {
        return this._roleDescription;
    };

    setCommunityUsers(communityUsers) {
        this._communityUsers = communityUsers;
    };
    getCommunityUsers() {
        return this._communityUsers;
    };

    setCommunityRoles(communityRoles) {
        this._communityRoles = communityRoles;
    };
    getCommunityRoles() {
        return this._communityRoles;
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

module.exports = Community;