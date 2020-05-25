// Type Assertion
let message;
message = 'abc';
let endsWithC = message.endsWith('c');
let alsoEndsWithC = message.endsWith('c');
// implement the like
// class button has the number of likes and the state
// aloow user to set the initial number of likes
class LikeButton {
    constructor(_liked = false, _likes = 0) {
        this._liked = _liked;
        this._likes = _likes;
    }
    click() {
        this._likes += this._liked ? -1 : 1;
        this._liked = !this._liked;
    }
    get likes() {
        return this._likes;
    }
    set likes(x) {
        this._likes = x;
    }
}
let button = new LikeButton(false, 100);
console.log(button);
button.click();
console.log(button);
button.click();
console.log(button);
button.click();
console.log(button);
