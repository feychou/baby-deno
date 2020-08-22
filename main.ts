console.log(Deno.args);

// deno run main.ts a b c --quiet
// expected: [ "a", "b", "-c", "--quiet" ]