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
        if (this._liked == false) {
            this._liked = true;
            this._likes++;
        }
        else {
            this._liked = false;
            this._likes--;
        }
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
