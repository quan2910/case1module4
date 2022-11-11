import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'pet',
    username: 'root',
    password: '12345678',
    synchronize: true,
    entities: ['dist/src/model/*.js']
})