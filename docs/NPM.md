# What is NPM?

- expansion: Node Package Manager
- standard package manager for Node.js
- used to download & manage the app package dependencies
- `npm` will be also installed when node installing to our machine

---

# What are the commands?

- for download/install the dependencies

```s
npm install
```

- for download/install the particular package

```s
npm install <pkg-name>

# or

# dependencies
npm install <pkg-name> --save

# dev dependencies
npm install <pkg-name> --save-dev
```

- for updating the packages

```s
npm update

# or
npm update <pkg-name>
```

---

# How to run the task?

- `npm run` command will be used to run the task.
- this command will look at the `package.json -> scripts` property

- syntax

```s
npm run <task-name>
```

- for example: _if we have task like this_

```js
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}
```

we have to run like

```s
npm run start-dev
npm run start
```

---

# Alternative Popular Package Managers are:

- Yarn
- PNPM

---

# Where does npm install the packages?

- will be installed at `<current_project_folder>/root/node_modules`

```s
npm install <%pkg-name%>
```

- will be installed at the global location
  `/usr/local/lib/node_modules`

```s
npm install -g <%pkg-name%>
```

**Note:** the location will be varied based on the OS, so to ensure run `npm root -g`

---


## How to create package.json file?

- step by step by answering the questions
  
```s
npm init
```
- instant creation

```s
npm init -y
```