import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const removeLastContact = async () => {

    try {
        const data = await fs.readFile(PATH_DB);
        const users = JSON.parse(data);

        users.pop();

        await fs.writeFile(PATH_DB, JSON.stringify(users, null, 2));

        console.log("Last contact war removed");

    } catch (error) {
        console.log(error);
    }


};

removeLastContact();
