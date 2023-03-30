// variable to store user's name
let userName = 'Liiv'
//Logs string to console
userName ? console.log(`Hello, ${userName}!`) :
console.log('Hello!')

//Variable storing users questions
let userQuestion = 'Will i get married🧐?'
console.log(`${userName} asked: ${userQuestion}`)

//Variable to gerate random numbers
let randomNumber = Math.floor(Math.random() * 8);

//Empty String stroing eightball responses
let eightball = ''

//Assigns eightball responses 
switch (randomNumber) {
  case 0:
  eightball = 'It is certain'
  break
  case 1:
  eightball = 'It is decidedly so'
  break
  case 2:
  eightball = 'Reply hazy try again'
  break
  case 3:
  eightball = 'Cannot predict now'
  break
  case 4:
  eightball = 'Do not count on it'
  break
  case 5:
  eightball = 'My sources say no'
  break
  case 6:
  eightball = 'Outlook not so good'
  break
  case 7:
  eightball = 'Signs point to yes'
}

console.log(eightball)
