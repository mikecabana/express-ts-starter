# Express Typescript Starter Project

A starter node app using express and typescript! A super simple base to get off the ground quickly. It's unopiniated, has no structure(ish) and no templating.

## How to use?

### Prerequisites 

make sure you have `node` and `npm` installed

### Commands

#### Install

If it's the first time trying to run this starter project, install all the dependancies 
~~~terminal
npm install
~~~

#### Start developemnt server

Start the `development` server by running the following command in a terminal from the root folder of the project 
~~~terminal
npm run dev
~~~

If you're in VSCode, run using the debugger by hitting `F5`

#### Build and Start for production

Build the project (outputs to `./dist`)
~~~terminal
npm run build
~~~

Run the built project
~~~terminal
npm start
~~~

## How to use with Docker?

~~~terminal
docker build -t ts-express-app .
docker run -it --rm -p 3000:3000 --name ts-express-app ts-express-app
~~~
