// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let correctQuote: string = quote.slice(0, 20) + ' always takes longer than' + quote.slice(20, quote.length);

quote = correctQuote;

console.log(quote);

