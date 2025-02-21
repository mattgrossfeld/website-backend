const Base = require("./Base");

class Post extends Base {
    constructor() {
        super();
    };
    
    setTitle(title) {
        this._title = title;
    };
    getTitle() {
        return this._title;
    };

    setBody(body) {
        this._body = body;
    };
    getBody() {
        return this._body;
    };

    setCommunityId(communityId) {
        this._communityId = communityId;
    };
    getCommunityId() {
        return this._communityId;
    };

    setParentPostId(parentPostId) {
        this._parentPostId = parentPostId;
    }

};

module.exports = Post;