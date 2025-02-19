// Purpose: To fetch the quote from the api and display it on the screen.
async function getQuote() {
    const url = 'https://api.api-ninjas.com/v1/quotes';
    try{
        let response = await fetch(url,{
            method: 'GET',
            headers: {
                'X-Api-Key': '',
                'Content-Type': 'application/json',
            }
        });
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let json = await response.json();
        document.getElementsByClassName('main_quote')[0].innerHTML = json[0].quote;
        document.getElementsByClassName('author')[0].innerHTML = " - " + json[0].author;
    }catch(e){
            console.log(e);
        }        
}


function listen(){
    const speech = new SpeechSynthesisUtterance(); // create a new speech object
    speech.text = document.getElementsByClassName('main_quote')[0].innerHTML; // set the text to the quote
    speech.volume = 1; // set the volume to 1
    speech.rate = 1; // set the rate to 1
    speech.pitch = 1; // set the pitch to 1
    window.speechSynthesis.speak(speech); // speak the quote
}

function copy(){
    const quote = document.getElementsByClassName('main_quote')[0].innerHTML; // get the quote
    navigator.clipboard.writeText(quote); // copy the quote
    alert("Quote copied to clipboard!");
}

function twitterPost() {
    const tweetText = encodeURIComponent(`${document.getElementsByClassName('main_quote')[0].innerHTML} ${document.getElementsByClassName('author')[0].innerHTML}`); //
    const twitterUrl = `https://x.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, '_blank'); //  window.open() method is used to open a new tab or window with the specified URL and name
    
}