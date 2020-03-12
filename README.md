# Random Generator

## Project setup
Ensure you have Node and npm installed https://www.npmjs.com/get-npm and run the following command from the project directory:
```
npm install
```
This will download and install all required node packages. 

### Compiles and hot-reloads for development
To begin working on the project, the following command will make the application available on http://127.0.0.1:8080/ 
```
npm run serve
```
Changes to the files will be hot-reloaded while the application is being served. Open the root page of the website for further instructions on the assignment.

### Run your unit tests
Run the Jest unit tests to validate the results of your code with the following command:
```
npm run test:unit
```
Jest will tell you which tests have passed, which tests have failed, and for the failed tests what the errors were in comparing the expected vs. actual values.
Similar to the "serve" mode you can run the following command to allow Jest to detect changes to the code files and re-run on save:
```
npm run test:unit -- --watch
```

### Lints and fixes files
This project is configured to use tslint for syntax validation and style enforcement. To run the linter and find any issues that need correcting run the command:
```
npm run lint
```
And to have tslint automatically fix most issues it finds you can run the commmand:
```
npm run lint -- --fix
```
