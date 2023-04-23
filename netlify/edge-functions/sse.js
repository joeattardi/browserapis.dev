export default async function sse(request) {
  let timerId;
  let count = 0;

  const body = new ReadableStream({
    start(controller) {
      function sendMessage() {
        const msg = new TextEncoder().encode(
          `event: heartbeat\r\ndata: event #${count + 1}, hello at ${new Date().toUTCString()}\r\n\r\n`,
        );
        controller.enqueue(msg);
        
        if (++count < 5) {
          timerId = setTimeout(sendMessage, 1000);
        } else {

          const msg = new TextEncoder().encode(
            `event: notice\r\ndata: Closing connection, have a nice day\r\n\r\n`,
          );
          controller.enqueue(msg);
          controller.close();
        }
      }

      timerId = setTimeout(sendMessage, 1000);
    },
    cancel() {
      if (typeof timerId === "number") {
        clearTimeout(timerId);
      }
    },
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
}

export const config = { path: "/sse" };