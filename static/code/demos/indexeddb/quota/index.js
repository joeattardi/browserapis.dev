const detail = document.querySelector('#detail');
const container = document.querySelector('#quota');

navigator.storage.estimate()
  .then(details => {
    detail.textContent = `Using ${details.usage} of ${details.quota} bytes`;

    const meter = document.createElement('meter');
    meter.className = 'w-full';
    meter.min = 0;
    meter.max = details.quota;
    meter.value = details.usage;
    container.appendChild(meter);
  });