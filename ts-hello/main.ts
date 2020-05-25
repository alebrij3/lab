// Type Assertion
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alsoEndsWithC = (message as string).endsWith('c');

// Interfaces
interface Book {
  id: number,
  title: string,
  author: string,
}

// implement the like
// class button has the number of likes and the state
// aloow user to set the initial number of likes
class LikeButton {
  constructor(private _liked: boolean = false, public _likes: number = 0) {
  }
  click() {
    this._likes += this._liked ? -1 : 1;
    this._liked = !this._liked;
  }
  get likes() {
    return this._likes;
  }
  set likes(x: number) {
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