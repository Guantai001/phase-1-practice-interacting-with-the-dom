
function timer() {
    return setInterval(function() {
        var counter = document.getElementById( "counter")
        var counterValue = parseInt(counter.innerText)
        counter.innerText = counterValue +1
    }, 1000)


    }

    var interval = timer()

    var minus = document.getElementById ( "minus")
    var plus = document.getElementById ("plus")
    var heart = document.getElementById ("heart")

    var pause = document.getElementById ("pause")
    var commentForm = document.getElementsByTagName ("form" )[0]

    minus.addEventListener('click', function () {
        var counter = document.getElementById( "counter")
        var counterValue = parseInt(counter.innerText)
        counter.innerText = counterValue -1
    })

    plus .addEventListener('click', function () {
        var counter = document.getElementById( "counter")
        var counterValue = parseInt(counter.innerText)
        counter.innerText = counterValue +1
    })

    heart.addEventListener('click', function () {
        var counter = document.getElementById( "counter")
        var counterValue = parseInt(counter.innerText)
        var likes = document.querySelector( ".likes")
        var like = void 0

        if ([] .concat(_toConsumableArray(likes.children)).map(function (a) {
            return parseInt(a.dataset.num)
        }).includes(counterValue)) {
            like = document.querySelector('[data-num="' + counterValue + '"]')
            var likeCount = parseInt(like.children[0]. innerText)
            like.innerHTML = counterValue + " has been liked <span>" + (likeCount + 1) + "</span> times"        }
            else {

                like = document.createElement('li')
                like.setAttribute('data-num', counterValue)
                like.innerHTML = counterValue + " has been liked <span>1<span> time"
                likes.appendChild(like)


            }
        })

        pause.addEventListener('click', function() {
            playing ? (playing = false, clearInterval(interval), this.innerText = "resume") : (playing = true, interval = timer(), this.innerText = "pause"), [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach (function(a) {
                "pause" !== a.id && (a.disabled = !playing)

            })

            })

        
            commentForm.addEventListener('submit', function(a) {

                a.preventDefault()
                var commentInput = this.children[0]
                var comment = commentInput.value
                commentInput.value = ""
                var comments = document.querySelector( ".comments")
                var commentP = document.createElement("p")
                commentP .innerText = comment
                comments.appendChild(commentP)
            })
            



