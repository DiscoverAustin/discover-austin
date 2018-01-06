# DiscoverAustin
A gamified, geolocation-based, mobile-first web application to help Austinities &amp; Tourists alike discover new spots around town


## Getting Started

After cloning the repository locally, run the following commands in your terminal:

```bash
$ npm install
$ npm run dev-start             # Spins up server on localhost:3000, using nodemon
                                # Simultaneously creates (or recreates) mysql database as 'root' user 
                                #(you may be prompted to enter your mysql password, if you have one)
$ npm run build                 # Spins up Webpack, with hot-reloading
```

 ## Linting

 This repository uses TravisCI to enforce the Airbnb JavaScript Style Guide. Pull requests that are not compliant with the guide will be automatically blocked from merging.

 To run the linting tests locally, run the following command in your terminal:

 ```bash
 $ npm run lint
 ```
For more information about the Airbnb JavaScript Style Guide, check out https://github.com/airbnb/javascript. For more information about TravisCI, check out https://docs.travis-ci.com/user/getting-started/.
