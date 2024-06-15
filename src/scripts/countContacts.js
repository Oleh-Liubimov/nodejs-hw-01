import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB);
    const users = JSON.parse(data);
    return `Number of contacts is ${users.length}`;
};

console.log(await countContacts());
