// All of the UI elements we need for the demo
const connectionStatus = document.querySelector('#status');
const connectButton = document.querySelector('#connectButton');
const urlField = document.querySelector('#url');
const messageList = document.querySelector('#messages ul');

let events;

function openConnection(url) {
  connectionStatus.textContent = 'Connecting...';
  connectButton.textContent = 'Connecting...';
  connectButton.disabled = true;
  events = new EventSource(urlField.value, {
    withCredentials: true,
  });

  events.addEventListener('open', (event) => {
    // Update connection state UI
    connectionStatus.className = 'p-2 dark:bg-green-700 bg-green-300';
    connectionStatus.textContent = 'Connected';
    connectButton.textContent = 'Disconnect';
    connectButton.disabled = false;
    messageList.appendChild(createLog(`⚡️ Connected`));
  });

  events.addEventListener('heartbeat', event => {
    messageList.appendChild(createLog(`❤️ HEARTBEAT: "${event.data}"`));
  });

  events.addEventListener('notice', (event) => {
    console.log(event);
    messageList.appendChild(createLog(`ℹ️ INFO: "${event.data}"`));
  });

  events.addEventListener('error', event => {
    closeConnection();
  });
}

function closeConnection() {
  events.close();
  connectionStatus.className = 'p-2 dark:bg-gray-600 bg-gray-200';
  connectionStatus.textContent = 'Not Connected';
  connectButton.textContent = 'Connect';
  messageList.appendChild(createLog('🛑 Disconnected'));

  events = null;
}

connectButton.addEventListener('click', () => {
  if (!events) {
    openConnection(urlField.value);
  } else {
    closeConnection();
  }
});

function createLog(message) {
  const item = document.createElement('li');
  item.textContent = message;
  return item;
}
