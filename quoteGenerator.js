 console.log('it works!');

// I creat an Array which is inside of object in order to store these strings.

           let quote1 = [ "Start by doing what's necessary","then what's possible","and suddenly you are doing the impossible."]

	       let quote2 = ["Believe you can and you're halfway there.","Believe you can and you're halfway there.","Theodore Roosevelt"]
	    
           let quote3 = ["It does not matter how slowly you go as long as you do not stop.","Believe you can and you're halfway there", "Theodore Roosevelt"]
    

     //I creat a function in order to conctenate the strings

    function quotesGen() {
        let randomNumber1 = Math.floor((Math.random() * (quote1.length)));
        let newRandomNumber1 = quote1[randomNumber1];
    
        let randomNumber2 = Math.floor((Math.random() * (quote2.length)));
        let newRandomNumber2 = quote2[randomNumber2];
    

        let randomNumber3 = Math.floor((Math.random() * (quote3.length)));
        let newRandomNumber3 = quote3[randomNumber3];

    //  console the code
    console.log(`${newRandomNumber1}, ${newRandomNumber2}, ${newRandomNumber3}`);
    };quotesGen();

    // Generate a function

    function genQuotesNum() {
        
    //1. I creat prompt in order to interact with a user and choose number of quotes generated (from 1 to 5)
        let quotesNumber = prompt("Choose your number of quotes here,'1' ");
                
    //2. check if the prompt give us something between 1 and 5
            if (quotesNumber > 1 && quotesNumber < 5) {
    //3. Generate a loop in order to last the number of times that the user entered in the prompt.            
                for (let i = 0; i < quotesNumber; i++) {
                    let randomIndex1 = Math.floor((Math.random() * (quote1.length)));
                    let randomIndex2 = Math.floor((Math.random() * (quote2.length)));
                    let randomIndex3 = Math.floor((Math.random() * (quote3.length)));
                    let string1 = quote1[randomIndex1];
                    let string2 = quote2[randomIndex2];
                    let string3 = quote3[randomIndex3];
                 console.log(`${string1}, ${string2},${string3}`)   
                };
           }else {
            return "Not a valid number"
        };
}genQuotesNum();
    // Choose 2 types of quotation generated
    
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes 

    /*let newQuote1 = ["Let's have a break", "I have been waiting for that for a long time"];
    let newQuote2 = ['Bravo, you got this', 'Yep, as you see'];

    // Let's have another function

    function optionQuoteGen() {
        let quotestypes = prompt("Choose your type of quotes here");
        if (quotestypes !== null) {
            var otherRandomNumber1 = Math.floor((Math.random() * (newQuote1.length)));
            var otherRandomNumber2 = Math.floor((Math.random() * (newQuote2.length)));
            var otherRandomQutes = newQuote1[otherRandomNumber1] + ' ' + newQuote2[otherRandomNumber2];
            console.log(otherRandomQutes);
        };    
    }optionQuoteGen();*/

