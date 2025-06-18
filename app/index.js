const dotenv = require("dotenv");
dotenv.config();

const clientId = process.env.CLIENT_ID;

if (!clientId) {
  console.error(
    "CRASH: There is no CLIENT_ID defined in the environment variables."
  );
  process.exit(1);
}

const log = () => {
  const crash = Math.random() < 0.01;
  if (crash) {
    console.error(`CRASH: ${clientId} service crashed unexpectedly`);
    process.exit(1);
  }
  const fail = Math.random() < 0.05;
  if (fail) {
    console.error(`FAIL: ${clientId} service internal error`);
  } else {
    console.log(`OK: ${clientId} service healthy`);
  }
};

setInterval(log, 1000);
