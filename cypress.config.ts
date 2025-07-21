import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    testIsolation: false,
    execTimeout: 15000,
    taskTimeout: 15000,
    requestTimeout: 15000,
    pageLoadTimeout: 15000,
    responseTimeout: 15000,
    defaultCommandTimeout: 15000,
    baseUrl: "http://localhost:5173",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
