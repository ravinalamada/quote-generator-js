 console.log('it works!');

// I creat an Array which is inside of object in order to store these strings.

           let quote1 = [ "Start by doing what's necessary","then what's possible","and suddenly you are doing the impossible."]

	       let quote2 = ["Believe you can and you're halfway there.","Believe you can and you're halfway there.","Theodore Roosevelt"]
	    
           let quote3 = ["It does not matter how slowly you go as long as you do not stop.","Believe you can and you're halfway there", "Theodore Roosevelt"]
    

    // I creat a function in order to conctenate the strings

    function newQuotesGen() {
        let randomNumber1 = Math.floor((Math.random() * (quote1.length)));
        let newRandomNumber1 = quote1[randomNumber1];
    
        let randomNumber2 = Math.floor((Math.random() * (quote2.length)));
        let newRandomNumber2 = quote2[randomNumber2];
    

        let randomNumber3 = Math.floor((Math.random() * (quote3.length)));
        let newRandomNumber3 = quote3[randomNumber3];

    //  console the code

    console.log(`${newRandomNumber1}, ${newRandomNumber2}, ${newRandomNumber3}`);
    };newQuotesGen();
    