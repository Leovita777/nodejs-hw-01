import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]');
    console.log('All contacts have been removed from the database.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};
await removeAllContacts();
