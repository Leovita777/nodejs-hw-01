import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const generateContacts = async (number) => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...contacts, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log(`Generated ${number} contacts and added to the database.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(3);
