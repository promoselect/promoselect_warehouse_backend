import { DataSource } from "typeorm";

const DATA_SOURCE_CONFIG = {
    type: "postgres" as const,
    host: process.env.DB_HOST,
    port: parseInt(process.env?.DB_PORT ?? "5432"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/../migrations/*.ts"],
    synchronize: true,
};

const AppDataSource = new DataSource(DATA_SOURCE_CONFIG);

try {
    await AppDataSource.initialize();
} catch (error) {
    console.error("Error initializing DataSource", error);
    process.exit(1);
}