var buttonTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output-text")

var servUrl = "https://api.funtranslations.com/translate/shakespeare.json"

function getTranslateUrl(text){
    return servUrl + "?text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("Something might be Wrong with the server or Translation limit has reached please try again after one Hour!!!")
}

buttonTranslate.addEventListener("click", function clickEventHandler(){

    var inputText = textInput.value
    fetch(getTranslateUrl(inputText))
         .then(response => response.json())
         .then(json => {
               var translatedText = json.contents.translated;
               outputDiv.innerText = translatedText;
         })
         .catch(errorHandler)

})