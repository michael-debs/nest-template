import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "postgresql",
    schema: "./src/modules/**/entities/*.ts",
    out: "./src/core/database/migrations",
    dbCredentials: {
        url: "postgresql://root:root@localhost:5432/test"
    },
});