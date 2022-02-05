// When run will output random message

const introductions = [
    'My sources have told me that',
    'The villagers are saying that',
    'Some anarchist that walked along said that',
    'Your own wife said that',
    'The mayor said that'
]
const people = [
    'the mayor',
    'your wife',
    'your son',
    'your brother',
    'your grandmother',
    'Elon Musk'
]

const actions = [
    'is a liar.',
    'talks to him/herself.',
    'plans to colonize mars.',
    'is a lovely person',
    'likes turtles.'
]

console.log(introductions[Math.floor(Math.random() * introductions.length)] + ' ' + people[Math.floor(Math.random() * people.length)] + ' ' + actions[Math.floor(Math.random() * actions.length)]);
