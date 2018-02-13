
var cardTitle = $(".title-input")
var cardBody = $(".body-input")

function Card(title, body, id, quality) {
  this.title = title
  this.body = body
  this.id = id || $.now()
  this.quality = quality || "swill"
}

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
$('button').on('click', saveButton)
function saveButton(e) {
  e.preventDefault()

  var newCard = new Card(cardTitle.val(), cardBody.val())
  cardPrepend(newCard)
}