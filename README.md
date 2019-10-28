# express-ts-starter

A starter express app using Typescript! The point of this project is to give you a super simple foundation to get off the ground quickly. It's unopiniated, has no structure(ish) and no templating. These are decisions you'll need to make😜!

Oh it also gives you VSCode debuging to boot!

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

Start a `development` server which the `VSCode debugger` can attach to. The VSCode debug launch config can be found in [.vscode](.vscode). 
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
