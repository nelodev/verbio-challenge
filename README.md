# Verbio challenge

![Home](https://i.gyazo.com/32bce76df6550c025a893b306b48b141.png)

Bot built for Verbio challenge

### Steps to get up and running the bot

1. Download rust following [this instructions](https://www.rust-lang.org/tools/install)
2. Navigate to server folder and execute the following commands to get up the server

```bash
  cd server
  cargo run
```

3. Navigate to src folder and execute npm install

```bash
  cd ../src
  npm install
```

4. Execute the following command to get up and running the frontend side

```bash
  npm run start
```

5. Open localhost:3000 and start using the bot

### Things to keep in mind

- API Base endpoint can be easily configurable thanks to the API_URL variable inside utils/constants file
- API methods defined in utils/api file and exported to can be easily accesible through all the app
- Created deferSet in utils/utils file to defer set of any variables (used in simulating defer of bot responses)
- Used userEvent & screen in tests to approach tests from user's perspective

### Git hooks

- Pre-commit: Hook that lints, validates and formats all the code before commiting the code

### Technologies

- React 17 (+ react-router-dom) bootstraped with CRA
- TailwindCSS

### Things to improve

- [ ] Review all breakpoints styles
- [ ] Refactor deferSet utility
- [ ] Unify margins across all the app
