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

![Screenshot (87)](https://github.com/user-attachments/assets/1cba276c-b13b-432c-be46-e4c9aad2cc7f)
![Screenshot (82)](https://github.com/user-attachments/assets/28750453-9c63-48d0-95fe-e9ce43e86c29)
![Screenshot (83)](https://github.com/user-attachments/assets/c03b4f64-0817-47d7-9f75-ecc6f579fe20)
![Screenshot (84)](https://github.com/user-attachments/assets/3c2a2288-6632-4dfe-99a5-df3501ccaa9a)
![Screenshot (86)](https://github.com/user-attachments/assets/5fa94a83-e674-4a1b-b3cf-577d010a915c)


