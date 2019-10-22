const messages = [
  {
    name: 'Beetlejuice',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
    timeStamp: 'October 19, 2019 8:02 PM',
    id: 'message1',
  },
  {
    name: 'Casper',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
    timeStamp: 'October 19, 2019 8:20 PM',
    id: 'message2',
  },
  {
    name: 'Beetlejuice',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
    timeStamp: 'October 19, 2019 8:30 PM',
    id: 'message3',
  },
  {
    name: 'Casper',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
    timeStamp: 'October 19, 2019 11 PM',
    id: 'message4',
  },
  {
    name: 'Beetlejuice',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
    timeStamp: 'October 19, 2019 11:20 PM',
    id: 'message5',
  },
];

const getMessages = () => messages;

const addToArray = (newMessage) => messages.unshift(newMessage);

const deleteFromArray = (messageIndex) => messages.splice(messageIndex, 1);

export default { getMessages, addToArray, deleteFromArray };
