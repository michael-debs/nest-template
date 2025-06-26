import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";

dotenv.config();


const {
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
} = process.env;

const dataSource = new DataSource({
    type: 'postgres',
    host: POSTGRES_HOST,
    port: POSTGRES_PORT ? parseInt(POSTGRES_PORT, 10) : 5432,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    entities: ['src/modules/**/entities/*.ts'],
    migrations: ['src/core/database/migrations/*.ts']
})


export default dataSource