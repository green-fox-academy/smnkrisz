// Create a PostIt a class that has
// - a backgroundColor
// - a text on it
// - a textColor

// Create a few example post-it objects:
// - an orange with blue text: "Idea 1"
// - a pink with black text: "Awesome"
// - a yellow with green text: "Superb!"

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor: string, text: string, textColor: string){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }

    show() {
        console.log(this.backgroundColor, this.text, this.textColor);
        
    }

};

let postIt1 = new PostIt('orange', 'Idea 1', 'blue');
let postIt2 = new PostIt('pink', 'Awesome', 'black');
let postIt3 = new PostIt('yellow', 'Superb', 'green');

postIt1.show();
postIt2.show();
postIt3.show();