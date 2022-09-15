import Request from "./Request.js";

export default class Templating extends Request {
    constructor(url, html) {
        super(url);
        this.html = html;
    };
}

