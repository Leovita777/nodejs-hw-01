import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const countContacts = async () => {
  try {
    // Читаємо всі контакти з файлу та повертаємо кількість
    const contacts = JSON.parse(fs.readFileSync(PATH_DB));
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};

console.log(await countContacts());
