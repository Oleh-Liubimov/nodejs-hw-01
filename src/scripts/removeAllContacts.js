import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const removeAllContacts = async () => {
   try {
       const clearUsers = [];
       await fs.writeFile(PATH_DB, JSON.stringify(clearUsers));
       console.log("Contacts was removed");
   } catch (error) {
       console.log(error);
   }
};

removeAllContacts();
