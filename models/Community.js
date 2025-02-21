const Base = require("./Base");

class Community extends Base {
    constructor() {
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

};

module.exports = Community;