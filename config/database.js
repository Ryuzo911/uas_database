import mysql from './mysql2';

const database = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin123',
    database: 'uas_database',
});

export default database.promise();