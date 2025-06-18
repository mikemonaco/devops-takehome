## Submitting your work

**❗ Do NOT fork this repo — forks are public and searchable.**

### Option A: Use this as a template

1. Click **“Use this template”** on the GitHub repo.
2. Create a **private** repo.
3. Name it something like `devops-takehome-<yourname>`.

### Option B: Manual clone + push

```
git clone https://github.com/mikemonaco/devops-takehome.git
cd devops-takehome
rm -rf .git
git init
git remote add origin git@github.com:<your-username>/<private-repo>.git
git push -u origin main
```

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
