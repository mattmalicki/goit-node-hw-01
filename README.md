# goit-node-hw-01

First small project in Node.js where you can manage contacts.

## General info

With this program you can view contacts or just one with a specific id. You can also add contact providing name, email and phone or delete contact using its id. Simple and no show.

## Technologies

Used technologies:

- Node.js,
- commander,
- nanoid.

## GH of project

You are here but here is a link:
[https://mattmalicki.github.io/goit-node-hw-01/]

## Install and run

### Install all dependencies:

```shell
npm install
```

### Run project in your localhost:

#### List all contacts:

```shell
node index.js --action list
```

Output:
![list]

#### View contact based on id:

```shell
node index.js --action get --id <id>
```

Output:
![get]

#### Add contact:

```shell
node index.js --action add --name <Name> --email <Email> --phone <Phone>
```

Output:
![add]

#### Remove contact:

```shell
node index.js --action remove --id <id>
```

Output:
![remove]

[list]: https://i.ibb.co/c15GgZN/action-list.png
[get]: https://i.ibb.co/ZLQKb2x/action-get.png
[add]: https://i.ibb.co/23GRL5P/action-add.png
[remove]: https://i.ibb.co/9qVG5D9/action-remove.png
