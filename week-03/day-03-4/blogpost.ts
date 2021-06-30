// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices,
//he told me that he wasn’t really into the whole organizer profile thing.

let authorName1: string = 'John Doe';
let authorName2: string = 'Tim Urban';
let authorName3: string = 'William Turton';

let title1: string = 'Lorem Ipsum';
let title2: string = 'Wait but why';
let title3: string = 'One Engineer Is Trying to Get IBM to Reckon With Trump';

let text1: string = 'Lorem ipsum dolor sit amet.';
let text2: string = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
let text3: string = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';

let publicationDate1: string = '2000.05.04.';
let publicationDate2: string = '2010.10.10.';
let publicationDate3: string = '2017.03.28.';

class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;
    
    constructor (authorName: string, title: string, text: string, publicationDate: string){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }

    show(): void {
        console.log(`"${this.title}" titled by ${this.authorName} posted at "${this.publicationDate}" \n ${this.text}`);
    }

}

let blogPost1 = new BlogPost(authorName1, title1, text1, publicationDate1);
let blogPost2 = new BlogPost(authorName2, title2, text2, publicationDate2);
let blogPost3 = new BlogPost(authorName3, title3, text3, publicationDate3);

blogPost1.show();
blogPost2.show();
blogPost3.show();


