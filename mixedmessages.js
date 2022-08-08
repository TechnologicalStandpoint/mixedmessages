
const quotes = {
    author_quote: [
        {author:'Bertrand Russel', quote:'The Whole Problem with the World is that fools and fanatics are always so certain of themselves'+
        ', and wiser people so full of doubts.'},
        {author: 'Alan Turing', quote:'We can only see a short distance ahead, but we can see plenty there that needs to be done.'}, 
        {author:'Andrew Wiles',
        quote:'Just because we can\'t find a solutions doesn\'t mean there isn\'t one.'},
        {author:'Leopold Kronecker', quote:'God made the integers; all else is the work of man'},
        {author:'Pythagoras', quote:'Silence is better than unmeaning words.'}],
    
    randomQuote: function() {
        index = Math.round(Math.random() * this.author_quote.length)
        console.log(index)
        return `${this.author_quote[index].author}`
    },

    hashFunction: {

    }
    
}


console.log(quotes.randomQuote())
