/* eslint-disable no-console */
const got = require('got');

(async () => {
  try {
    const users = await got('https://jsonplaceholder.typicode.com/users');
    console.table(JSON.parse(users.body), [
      'id',
      'name',
      'username',
      'email',
      'phone',
      'website',
    ]);

    const todo = await got('https://jsonplaceholder.typicode.com/todos/1');
    console.table(JSON.parse(todo.body));
  } catch (error) {
    console.log(error);
  }
})();
