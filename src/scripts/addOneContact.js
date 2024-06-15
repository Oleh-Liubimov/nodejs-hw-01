import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB);
        const users = JSON.parse(data);

        const newUser = createFakeContact();
        users.push(newUser);

        await fs.writeFile(PATH_DB, JSON.stringify(users, null, 2));
        console.log("1 contact was added");

    } catch (error) {
        console.log(error);
    }
};

addOneContact();
