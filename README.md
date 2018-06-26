[![Build Status](https://travis-ci.com/stariel/11-express.svg?branch=master)](https://travis-ci.com/stariel/11-express)
======

## Lab 11 - Express Server with Cats

This server uses a model for cats to accomodate the following endpoints:

* **`/api/vi/cats`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new cat
* `GET` request
 * pass `/:id` as a route parameter to **GET** a specific cat (as JSON)
* `DELETE` request
 * pass `/:id` as a route parameter to **DELETE** a specific cat (as JSON)
 * this should return a 204 status code with no content in the body


### Submission Instructions
 * Work in a fork of this repository
 * Work in a branch on your fork
 * Create a PR to your master from your working branch.
 * Ensure that your repository/branch is connected to travis-ci.com
 * Ensure that your repository/branch is connected to a dyno at heroku.com
 * Heroku and Travis should pick you up and deploy
 * Submit on canvas:
   * a question and observation
   * how long you spent
   * link to your pull request
   https://github.com/stariel/11-express/pull/1
   * link to your build at travis-ci URL
   https://travis-ci.com/stariel/11-express
   * Heroku Server URL
    https://aa-11-express.herokuapp.com/

