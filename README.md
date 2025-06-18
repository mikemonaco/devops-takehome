## Overview

Containerize and deploy this application in the `app` directory to AWS ECS.

Utilize Pulumi (Python or Typescript) for IaC.

This is a daemon service. No load balancing or auto-scaling is desired. At most, a single instance of this application should be running. If it crashes it should restart.

If the application encounters 3+ errors in a minute, it should trigger an alarm.

If the application crashes, it should trigger an alarm.

## Running the application

Running this application locally requires [Node.js](https://nodejs.org/en). Once Node.js is installed, go into the `app` directory and run the follow commands:

`npm install` to install the project dependendencies

`node index.js` to run the application

## Example .env

Create a `.env` file in the `app` directory, for example:

`CLIENT_ID="aspen"`

## Bonus

Deploy the service for more than one CLIENT_ID inside the same Pulumi stack.
