# Password Manager

A Password Manager project created using the MERN stack.
You can login and save your passwords. Passwords are saved in the database after AES encryption ⛓️ . So, your passwords are safe here. 🦺

<a id="setting">
<h2>Setting up the project</h2>
</a>
Go to the folder in which you want to clone the project and run the following command

### Setting up the server
To setup the server in your system run the following commands

```sh
cd server
npm install
```

After installing all the server dependencies run the server using the following command 

```sh
npm run dev:start
```
Now, the server will be up and running

**Note :- You have to configure all the environment variables by creating a config.env file in root server folder.

Structure of the config.env file

```js
DATABASE=<your MongoDB URI>
SECRET_KEY=<your secret key for hashing passwords>
CRYPTO_SECRET_KEY=<your secret key for encrypting passwords while saving in db>
```

### Setting up the client
Go to the client folder and run 

```sh
npm install
```
All the dependencies should be installed. Now, you just have to start the React server by following command

```sh
npm start
```
### You also have to keep the mongodb cluster open in order to run the app properly.
