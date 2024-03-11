const URL = "https://type.fit/api/quotes";
const mQuotes = document.querySelector("#mQuotes");
const author = document.querySelector("#author");
const getQuote = document.querySelector("#btn");
 let i=0;
const getQuotes = async () =>{
    console.log("getting data....");
    let response =await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data[i].text);
    mQuotes.innerText = data[i].text;
    author.innerText = data[i].author;
    // console.log(data[i].author);
    i++;
    if(i==15){
        i=0;
    }
}
getQuote.addEventListener("click", getQuotes); 
