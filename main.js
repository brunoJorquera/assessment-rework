// Lines 2-4 are variables I use for my fortune
const fortuneBtn = document.getElementById('fortune-btn')
const fortuneContainer = document.getElementById('fortune-display')
const addFortuneForm = document.getElementById('add-fortune-form')
// lines 6-9 are viariables I use for my phrases/funny words
const phraseBtn = document.getElementById('phrase-btn')
const phraseContainer = document.getElementById('phrase-display')
const addPhraseForm = document.getElementById('phrase-form')
const deleteBtn = document.getElementById('delete-btn')

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

//   This function causes my array to show on my browser: this is being put into a section on my HTML, it can be found in the html file on line 32 ("fortune-display")
fortuneBtn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/fortune')
        .then(res => {
            // This lines below makes sure that only one line from the array shows at a time (line 24), and making it a list item (line25)
            fortuneContainer.innerHTML = ''
            const fortuneElement = document.createElement('li')
            // line 27 is showing me on the browser console my array
            console.log(fortuneElement)
            // this line below pulls the data
            fortuneElement.textContent = res.data
            fortuneContainer.append(fortuneElement)
            console.log(res.data)
        })
        .catch(err => console.log(err))
})

// This function is calling my input tag on my HTML file on line 25. It calls my form on line 25 (HTML).
addFortuneForm.addEventListener('submit', (e) =>{
// This line below ensures that the page doesn't 
    e.preventDefault()

    const addFortuneInput = document.getElementById('fortune-input')
    const {value} = addFortuneInput

    axios.post('http://localhost:4000/api/fortune', {value})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

})

// Similar to the Fortune GET, but I added 'Avaiable Phrases:' and a p tag instead of a 'li'
phraseBtn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/phrase')
        .then(res => {
            phraseContainer.innerHTML = 'Available Phrases:'
            const phraseElement = document.createElement('p')
            phraseElement.textContent = res.data
            phraseContainer.append(phraseElement)
            console.log(res.data)
        })
        .catch(err => console.log(err))
})

// Just like the fortune submit, but adjusted for my phrase section
addPhraseForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const addPhraseInput = document.getElementById('phrase-input')
    const {value} = addPhraseInput

    axios.post('http://localhost:4000/api/phrase', {value})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

})

// calling my value so I can delete the last thing on the list, check controller for delete info
deleteBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    axios.delete(`http://localhost:4000/api/phrase/:value`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
})