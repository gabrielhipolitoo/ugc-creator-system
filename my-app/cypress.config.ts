import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    testIsolation: false,
  },
  hosts: {
    localhost: "localhost:3000",
  },
});
