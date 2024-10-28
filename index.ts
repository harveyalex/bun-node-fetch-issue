import { Request } from 'node-fetch';

function main() {
  const request = new Request('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log({ requestUrl: request.url });

  const url = new URL(request.url);
}

main();