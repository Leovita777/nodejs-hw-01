import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
    return [];
  }
};
console.log(await getAllContacts());
