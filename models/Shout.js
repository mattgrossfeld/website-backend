const Base = require("./Base");
class Shout extends Base{
    constructor() {
    };
    
    setShout(shout) {
        this._shout = shout;
    };
    getShout() {
        return this._shout;
    };

   setCommunityId(communityId) {
    this._communityId = communityId;
   };
   getCommunityId() {
    return this._communityId;
   };

};

module.exports = Shout;