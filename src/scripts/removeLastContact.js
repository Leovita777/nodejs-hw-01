import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('Нет контактов для удаления. База данных уже пуста.');
      return;
    }

    const updatedContacts = contacts.slice(0, -1);

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log('Успешно удален последний контакт из базы данных.');
  } catch (error) {
    console.error('Ошибка при удалении последнего контакта:', error);
  }
};

await removeLastContact();
