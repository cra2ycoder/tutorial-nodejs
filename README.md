# What is Node.js?

- Open Source
- JavaScript runtime environment for cross-platform
- Runs on the v8 engine (Googl Chrome) and so very fast.
- Run in a single process/threaded _without creating new thread for every request_

```
When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.
```

---

# Advantages

- One programming languge for server & client /frontend & backend
- Uses CommonJS Module
- No need of transpilers of modern javascript
- Environment control
- Has larger developer community
- Has 10L+ free npm packages

Note: Node.js doest have access for `window, document / web APIs`

---
