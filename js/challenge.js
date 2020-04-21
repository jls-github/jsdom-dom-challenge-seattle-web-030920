let timer = document.getElementById("counter");
let interval
let intervalOn = false

function advanceCounter() {
    if (intervalOn === true) {
        let number = parseInt(timer.innerHTML) + 1;
        timer.innerHTML = number
    }
};

function reduceCounter() {
    if (intervalOn === true) {
        let number = parseInt(timer.innerHTML) - 1;
        timer.innerHTML = number
    }
};

function addLike() {
    if (intervalOn === true) {
        let likes = document.querySelector(".likes")
        if (document.getElementById(`${timer.innerHTML}`)) {
            let previous = parseInt(document.getElementById(`${timer.innerHTML}`).innerHTML);
            previous ++
            document.getElementById(`${timer.innerHTML}`).innerHTML = `${previous} likes for ${timer.innerHTML}`;
        } else {
            let li = document.createElement("li")
            li.id = (timer.innerHTML)
            li.innerHTML = `1 like added for ${timer.innerHTML}`
            likes.appendChild(li)
        };
    }
}

function toggleCounter() {
    if (intervalOn === false) {
        interval = window.setInterval(advanceCounter, 1000);
        intervalOn = true
    } else {
        window.clearInterval(interval)
        intervalOn = false
    }
}

function leaveComment() {
    let comments = document.getElementById('list');
    let commentBox = document.getElementById('comment-input')
    let thisComment = document.getElementById('comment-input').value
    let newComment = document.createElement('li')
    newComment.innerText = thisComment
    comments.appendChild(newComment)
    commentBox.value = ""
}

document.getElementById("plus").addEventListener("click", advanceCounter);

document.getElementById("minus").addEventListener("click", reduceCounter);

document.getElementById("pause").addEventListener("click", toggleCounter);

document.addEventListener("DOMContentLoaded", function () {
    toggleCounter()
});

document.getElementById("heart").addEventListener("click", addLike);

document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
    leaveComment()
})