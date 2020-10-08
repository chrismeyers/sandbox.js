/* eslint-disable no-console */
const got = require('got');

(async () => {
  try {
    const response = await got('https://jsonplaceholder.typicode.com/users');
    console.table(JSON.parse(response.body), [
      'id',
      'name',
      'username',
      'email',
      'phone',
      'website',
    ]);
  } catch (error) {
    console.log(error);
  }
})();
