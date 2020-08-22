const hostname = '0.0.0.0';
const port = 8080;
const listener = Deno.listen({hostname, port});
console.log(`Listening on port ${port}`);
for await (const connection of listener) {
  Deno.copy(connection, connection);
}

// deno run --allow-read cat.ts /etc/passwd

// open connection with
// nc localhost 8080

// write stuff, it play it back

// with Deno.copy(connection, Deno.stdout)
// message is caught in console
