const fortunes = [
    'Look both ways before crossing the street',
    'A fortune sought is a fortune earned',
    'Taking the time to fix a mistake can prove to be fruitful in the longrun', 
    'You will find love in the most unconventional of places',
    'The five second rule is a lie'
]
const phrases = [
    ' Duty ',
    ' Ubiquitous ',
    ' Coccyx ',
    ' Moist '
]

module.exports = {
    getFortune: (req,res) => {
        const randIndex = Math.floor(Math.random() * fortunes.length)
        let fortune = fortunes[randIndex]
        res.status(200).send(fortune)
    },
    addFortune: (req,res) => {
        // console.log('I work')
        // console.log(req.body)
        const {value} = req.body
        fortunes.push(value)

        res.status(200).send(fortunes)
    },
    getPhrase: (req,res) => {
        res.status(200).send(phrases)
    },
    addPhrase: (req,res) =>{
        // console.log('I work too!')
        // console.log(res.body)
        const {value} = req.body
        phrases.push(value)

        res.status(200).send(phrases)
    },
    deletePhrase: (req,res) => {
        const {value} = req.params
        let index = phrases.findIndex(elem => elem.value === +value)
        phrases.splice(index, 1)
        res.status(200).send(phrases)
    }
}