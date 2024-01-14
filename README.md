# React News App

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Usage

Add your application configuration to your `.env` file in the root of your project:

```shell
REACT_APP_NEWS_API_KEY=NEWSAPIKEY
REACT_APP_WEATHER_API_KEY=WEATHERAPIKEY
```

Whenever your application loads, these variables will be available in `ENV`:

#### HTTP client

**axios** library is used to make HTTP Calls

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Bootstrap v5** : Refer to https://getbootstrap.com/docs/5.0/getting-started/introduction/ to understand how to use Bootstrap v5
