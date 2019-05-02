# express-ts-starter

A starter project for express using typescript with vscode debug wired in. 
This project is extremly unopinionated and is just enough to get you started the way you think you should.
No structure, no suggestions, no templating. Those are decisions you have to make 😜!

### How to use?

#### Prerequisites 

Node: `v10+` <br>
npm: `v6+` <sub>(usually ships with node)</sub>

#### Steps to run

If it's the first time trying to run the starter, install all dependancies 
~~~terminal
npm install
~~~

Run the `development` server
~~~terminal
npm run dev
~~~

Start a `development` server the `VSCode debugger` can attach to. VSCode debug launch config can be found in [.vscode](.vscode). 
~~~terminal
npm run debug
~~~

Build the project (outputs to `./dist`)
~~~terminal
npm run build
~~~

Run the built project
~~~terminal
npm start
~~~

### How to use with Docker?

~~~terminal
docker build -t ts-express-app .
docker run -it --rm -p 3000:3000 --name ts-express-app ts-express-app
~~~
