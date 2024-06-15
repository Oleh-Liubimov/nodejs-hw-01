import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';


const generateContacts = async (number) => {

    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const users = JSON.parse(data);

        for (let i = 1; i <= number; i++) {
          const newUser = createFakeContact();
          users.push(newUser);
        }

        await fs.writeFile(PATH_DB, JSON.stringify(users, null, 2));
        console.log(`${number} contacts was created`);
    } catch (error) {
        console.log(error);
    }
};

generateContacts(5);
