
var cardTitle = $(".title-input")
var cardBody = $(".body-input")

function Card(title, body, id, quality) {
  this.title = title
  this.body = body
  this.id = id || $.now()
  this.quality = quality || "swill"
}

$(document).ready(pullFromLocal);

function cardPrepend(newCard) {
  $(".ideas-article").prepend(`<article id="${newCard.id}" class="idea-card">
        <h2 class="card-title">${newCard.title}</h2>
        <button class="delete-button">Delete</button>
        <p class="idea-card-body">${newCard.body}</p>
        <button class="upvote-button">upvote</button>
        <button class="downvote-button">downvote</button>
        <p class="quality">quality:</p>
        <p class="quality-value">${newCard.quality}</p>
        <hr>
      </article>`)
}

$(".ideas-article").on('click','.delete-button', deleteCard)

function deleteCard() {
  var card = this.closest("article").id
  localStorage.removeItem(card)
  this.closest("article").remove()
}

$('button').on('click', saveButton)
function saveButton(e) {
  e.preventDefault()
  var newCard = new Card(cardTitle.val(), cardBody.val())
  cardPrepend(newCard)
  addToLocal(newCard)
  clearFields()
}


function clearFields(){
  cardTitle.val("");
  cardBody.val("");
} 

function addToLocal(newCard) {
  var stringifyObj  = JSON.stringify(newCard);
  localStorage.setItem(newCard.id, stringifyObj)
}

function pullFromLocal() {
  for(i=0; i < localStorage.length; i++) {
    var getCard = localStorage.getItem(localStorage.key(i));
    var newCard = JSON.parse(getCard);
    cardPrepend(newCard)
  }

}

