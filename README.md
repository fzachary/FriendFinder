# FriendFinder
A simple dating web application that matches people based on a personality assessment

___

## Overview
This is a dynamic web application using front end and back end technologies that matches the user with the most compatible friend based on their responses to a personality assessment.

___

## Demo
To run FriendFinder, navigate to the deployed [Heroku](#) page. First, you are required to input your name and a link to a photo of yourself. Then proceed to answer the questions in the personality assessment. Each question is rated on a scale of 1 to 5, with 1 meaning "Strongly Disagree" and 5 meaning "Strongly Agree". Once you have answered all of the questions, click on the submit button. The application will analyze your responses to the assessment, and will then display a modal featuring the person with which you most closely match.

___

## Run FriendFinder Locally
Follow the instructions below to install the application
```
git clone git@github.com:fzachary/FriendFinder.git
cd FriendFinder
npm install
```
The required dependencies will be installed, and you will be ready to run the application from the command line. You will need to open the `server.js` file and configure the `PORT` variable to the value of your choice.

```
export PORT = 8080
```
Afterwards, you will need to initialize the server using Node.js.

```
node server.js
```

The application will now be running locally on your specified `PORT`. In this case, it will be running on PORT 8080. You will be able to access the application from your web browser at the URL [http://localhost:8080](http://localhost:8080).

___

## Technologies Used
* HTML5
* Bootstrap (CSS)
* Javascript
* NPM Packages:
    - [Express](https://www.npmjs.com/package/express)
    - [Body Parser](https://www.npmjs.com/package/body-parser)

___

## Contributing
To contribute to this application:
1. Fork the repo
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'add my-new-feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

___
