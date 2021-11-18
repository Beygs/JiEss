const input = document.querySelector('form');
const botContainer = document.querySelector('.acne-bot-container');
const messagesContainer = botContainer.querySelector('.messages');

const messages = [];

function botAnswer(message) {
  switch (true) {
    case message.charAt(message.length - 1) === '?':
      return 'Ouais Ouais...';
    case message === message.toUpperCase():
      return 'Pwa, calme-toi...';
    case /Fortnite/.test(message):
      return "on s'fait une partie soum-soum ?";
    case message === '':
      return "t'es en PLS ?"
    default:
      return 'balek.'
  }
}

function displayMessages() {
  messagesContainer.innerHTML = ''

  messages.forEach(m => {
    messagesContainer.appendChild(m);
    answer = document.createElement('p');
    answer.classList = 'bot'
    answer.innerText = botAnswer(m.innerText);

    messagesContainer.appendChild(answer);
  });
}

addEventListener('submit', e => {
  e.preventDefault();
  const message = input.querySelector('input');
  const messageContent = message.value;

  let messageParagraph = document.createElement('p');
  messageParagraph.classList = 'user'
  messageParagraph.innerText = messageContent;

  messages.push(messageParagraph)

  message.value = '';

  displayMessages();
})
