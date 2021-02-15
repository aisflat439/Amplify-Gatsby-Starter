# A starter for Gatsby and Amplify Projects

### Requirements
- You must have Amplify CLI configured

### Wiki

Covers my notes for working with this [here](https://github.com/aisflat439/Amplify-Gatsby-Starter/wiki) or:
### Installation and setup

Clone the repo down

```sh
amplify init
```

> These were my options
```
? Enter a name for the project AmplifyGatsbyStarter
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
```

> then we do
```sh
amplify add auth

 Do you want to use the default authentication and security configuration? Default configuration
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
```

> then we do
```sh
 amplify push
```