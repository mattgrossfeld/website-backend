const Base = require("./Base");

class Role extends Base{
    constructor() {
        super();
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

};

module.exports = Role;