const fortuneBtn = document.getElementById('fortune-btn')
const fortuneContainer = document.getElementById('fortune-display')
const addFortuneForm = document.getElementById('add-fortune-form')
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

fortuneBtn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/fortune')
        .then(res => {
            fortuneContainer.innerHTML = ''
            const fortuneElement = document.createElement('li')
            console.log(fortuneElement)
            fortuneElement.textContent = res.data
            fortuneContainer.append(fortuneElement)
            console.log(res.data)
        })
        .catch(err => console.log(err))
})

addFortuneForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const addFortuneInput = document.getElementById('fortune-input')
    const {value} = addFortuneInput

    axios.post('http://localhost:4000/api/fortune', {value})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

})

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

deleteBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    axios.delete(`http://localhost:4000/api/phrase/:value`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
})