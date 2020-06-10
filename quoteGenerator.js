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

    // Creat a function
      function genQuotesNum() {

    //1. I creat prompt in order to interact with a user and choose number of quotes generated (from 1 to 5)
    let quotesNumber = prompt("Choose number of quotes which you want to generate here,(from 1 to 5) ");

    //2. check if the prompt give us something between 1 and 5
            if (quotesNumber >= 1 && quotesNumber < 5) {

    //3. Generate a loop in order to last the number of times that the user entered in the prompt.            
                for (let i = 0; i < quotesNumber; i++) {
                    quotesGen()
                };
           }else {
            return "Not a valid number"
        };
}genQuotesNum();


// Second type of the exercise

    let happyQuotes = ["Let us have a break", 
                       "I have been waiting for that for a long time", 
                       "Bravo, you got this", "Yep, as you see"
                      ];
    let sadQuotes = ["Do not cry", 
                     "You will get there", 
                     "Cheer up"];
              
    let cheeringQuotes =  ["Do not cry", 
                            "You will get there", 
                            "Cheer up"
                        ];                

    // Let's have another function 

    const optionQuoteGen = () => {
        let quotesType = prompt("Choose your type of quotes here"); 

        let otherRandomIndex1 = Math.floor((Math.random() * (happyQuotes.length)));
        let newString1 = happyQuotes[otherRandomIndex1];
        let randomQuotes1 = `${newString1}`;
        
        let otherRandomIndex2 = Math.floor((Math.random() * (sadQuotes.length)));
        let newString2 = sadQuotes[otherRandomIndex2];
        let otherRandomIndex3 = Math.floor((Math.random() * (cheeringQuotes.length)));
        let newString3 = cheeringQuotes[otherRandomIndex3];
        let randomQuotes2 = `${newString2} ${newString3}`;
        
        if (quotesType < 2) {
            console.log(`${randomQuotes1}`);
        }else if  (quotesType >= 2) {
            console.log(`${randomQuotes2}`)
    };
};optionQuoteGen()
       
    // GEnerate a prompt in order to ask the user which type of quotation they want to use
           
        
    
                   
           /*let booleanTypes = Number(prompt("Do you want to continue, Yes/No"));
           let boolean = "Yes";
            while (boolean === "Yes") {
              quotesType = prompt("Choose your type of quotes here");
              if (quotesType < 2) {
                quotesGen()
            }else if (quotesType >= 2) {
                optionQuoteGen()
            } else {
                console.log(`Not valid`)
            }
        };*/
              


    