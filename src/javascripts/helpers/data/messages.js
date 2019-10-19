import moment from 'moment';

const messages = [
  {
    name: 'Beetlejuice',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
    timeStamp: moment().format('LLL'),
  },
  {
    name: 'Casper',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
  },
  {
    name: 'Beetlejuice',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
  },
  {
    name: 'Beetlejuice',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
  },
  {
    name: 'Casper',
    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
  },
];

const getMessages = () => messages;

export default { getMessages };
