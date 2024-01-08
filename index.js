import * as contacts from "./js/contacts.js";
import { Command } from "commander";

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts.listContacts();
      break;

    case "get":
      contacts.getContactById(id);
      break;

    case "add":
      contacts.addContact(name, email, phone);
      break;

    case "remove":
      contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// Decided to leave those functions in case someone wants to check them!

// contacts.listContacts();
// contacts.getContactById("qdggE76Jtbfd9eWJHrssH");
// contacts.removeContact("rsKkOQUi80UsgVPCcLZZW");
// contacts.addContact(
//   "Alec Howard",
//   "Donec.elementum@scelerisquescelerisquedui.net",
//   "(748) 206-2688"
// );
