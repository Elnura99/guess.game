let input = document.querySelector('.guess')
let enter = document.querySelector('.enter')
let word = document.querySelector('.word')

let arr = ['song', 'music', 'purple', 'manga', 'strawberry', 'euphoria', 'golden', 'information', 'astro', 'aurora', 'believe']
let random = Math.floor(Math.random() * arr.length)
console.log(arr[random]);
function randomWord() {
    random = Math.floor(Math.random() * arr.length)
    console.log(arr[random])
}

enter.addEventListener('click', function () {
    let newInput = input.value

    if (arr[random] == input.value.toLowerCase()) {
        word.innerText = newInput
        alert("GREAT")
        input.value = ''
        randomWord()
    }
    else {
        alert("Try again!!")
    }
})
