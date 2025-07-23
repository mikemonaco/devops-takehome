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

## Project Outline

Containerize and deploy the demo application that resides in the `app` directory to AWS ECS.

#### Choose your own IaC from the list below:

- Pulumi (Typescript or Python)
- Terraform/OpenTofu
- CDK (Typescript or Python)
- CloudFormation

#### Important considerations:

- This is a background/daemon service. No load balancing or auto-scaling is desired.
- At MOST, a single instance of this application should be running PER client.
- There should never be two instances of the application running for a single client; even during deployment.
- A small amount of downtime is ok, overlap is not.

#### You will need to start this application for three different clients:

- CLIENT_ID="aspen"
- CLIENT_ID="delray"
- CLIENT_ID="seattle"
- Assume more clients will be added in the future.

#### Logging / Alerting Requirements:

- If any client logs 3 or more "FAIL" messages in a minute, it should trigger a client specific alarm.
- If any client crashes or stops running for ANY reason it should self-heal, and trigger a client specific alarm.

## Running the application locally

Running this application requires [Node.js](https://nodejs.org/en). Once Node.js is installed, go into the `app` directory and run the follow commands:

`npm install` to install the project dependendencies

`node index.js` to run the application

## Example .env

Create a `.env` file in the `app` directory, for example:

`CLIENT_ID="aspen"`
