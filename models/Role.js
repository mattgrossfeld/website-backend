class Role {
    constructor() {
    };

    setId(id) {
        this._id = id;
    };
    getId() {
        return this._id;
    };
    
    setRoleName(roleName) {
        this._roleName = roleName;
    };
    getRoleName() {
        return this._roleName;
    };

    setRoleDescription(roleDescription) {
        this._roleDescription = roleDescription;
    };
    getRoleDescription() {
        return this._roleDescription;
    };

    setIsAdmin(isAdmin) {
        this._isAdmin = isAdmin;
    };
    getIsAdmin() {
        return this._isAdmin;
    };

    setPrivilegeLevel(privilegeLevel) {
        this._privilegeLevel = privilegeLevel;
    };
    getPrivilegeLevel() {
        return this._privilegeLevel;
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

module.exports = Role;