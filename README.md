# Employ Polls WebApp

This app is created with Create React App, is algo using Redux-toolkit, React-Router v6, and React-Bootstrap for styles.
The data is local stored.

## Usage
```shell
# Install all the dependencies
npm install
# Run the app in local server, as default http://localhost:3000
npm start
# Run all the test of the app
npm test
```

## Documentation

[Documentation](https://linktodocumentation)

There are two types of objects stored in local data:

Users
Questions


## user
| Attribute        | Type           | Description  |
| ------------- |:-------------:| -----:|
| id    | String | user identifier |
| name     | String      |   users name |
| password| String     |    password uses to loggin |
| avatarURL| String     |    the path to avatar|
| questions| Array     |   A list of questions created |
| answers| Object     |   The object's keys are the ids of each question this user answered. The value of each key is the answer that the user selected. It can be either 'optionOne' or 'optionTwo' since each question has two options. |



## question
| Attribute        | Type           | Description  |
| ------------- |:-------------:| -----:|
| id    | String | question identifier |
| author     | String      |   users name |
| timespam| String     |    time of creation |
| optionOne| Object     |    first voting option|
| optionTwo| Object     |  second voting option |



Your can interact to the data via 4 methods:

_getUsers()
_getQuestions()
_saveQuestion(question)
_saveQuestionAnswer(object)