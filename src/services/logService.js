import Raven from "raven-js";

function init() {
  Raven.config("https://cf3f2060da364db6b1f64d3df1736f48@sentry.io/1271177", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
  console.log(error);
}

export default {
  init,
  log
};
