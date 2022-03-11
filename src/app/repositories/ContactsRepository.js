const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Luis',
    email: 'degaus@live.com',
    phone: '95242-2424',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
