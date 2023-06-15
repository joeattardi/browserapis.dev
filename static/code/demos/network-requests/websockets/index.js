let socket;

function openWebSocket(url) {
  // Open the WebSocket connection (the URL scheme should be ws: or wss:)
  const socket = new WebSocket(url);

  socket.addEventListener('open', onSocketOpened);
  socket.addEventListener('message', handleMessage);
  socket.addEventListener('error', handleError);
  socket.addEventListener('close', onSocketClosed);

  return socket;
}

// All of the UI elements we need for the demo
const connectButton = document.querySelector('#connectButton');
const urlField = document.querySelector('#url');
const connectionStatus = document.querySelector('#status');
const messageField = document.querySelector('#message');
const messageForm = document.querySelector('#messageForm');
const messageSubmit = document.querySelector('#messageSubmit');
const messageList = document.querySelector('#messages ul');

function onSocketOpened() {
    // Update connection state UI
    connectionStatus.className = "p-2 dark:bg-green-700 bg-green-300";
    connectionStatus.textContent = "Connected";
    connectButton.textContent = 'Disconnect';
    connectButton.disabled = false;
    messageField.disabled = false;
    messageSubmit.disabled = false;

    messageList.appendChild(createLog(`⚡️ Connected`));

    // Focus the message field so we can begin typing immediately
    messageField.focus();
}

function handleMessage(event) {
  messageList.appendChild(createLog(`↙️ Received: "${event.data}"`));
}

function handleError(event) {
  console.log('WebSocket error:', event);
  connectionStatus.textContent = `Connection error`;
  connectionStatus.className = "p-2 dark:bg-red-600 bg-red-200";
  connectButton.textContent = 'Connect';
}

function onSocketClosed() {
  connectionStatus.className = "p-2 dark:bg-gray-600 bg-gray-200";
  connectionStatus.textContent = "Not Connected";
  connectButton.textContent = 'Connect';
  messageList.appendChild(createLog('🛑 Disconnected'));

  messageField.disabled = true;
  messageSubmit.disabled = true;

  socket = null;
}

// Toggle the connection state when the connect button is clicked.
connectButton.addEventListener('click', () => {
  if (!socket) {
    socket = openWebSocket(urlField.value);
  } else {
    socket.close();
  }
});

messageForm.addEventListener('submit', event => {
  event.preventDefault();

  // Log and send a message. With an echo service, the message should immediately
  // be echoed back to us.
  const message = messageField.value;
  messageList.appendChild(createLog(`↗️ Sent: "${message}"`));
  socket.send(message);
});

function createLog(message) {
  const item = document.createElement('li');
  item.textContent = message;
  return item;
}