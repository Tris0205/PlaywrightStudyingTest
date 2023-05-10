import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";
async function globalSetup(config: FullConfig) {
  const test_env = process.env.test_env || "test";
  if (test_env) {
    dotenv.config({
      path: `.env.${test_env}`,
      override: true,
    });
  }
}

export default globalSetup;
