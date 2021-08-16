import mysql from 'mysql2'
import { dbSetting } from './setting.js'

export const db = mysql.createConnection({
    host: dbSetting.host,
    user: dbSetting.user,
    password: dbSetting.password,
    database: dbSetting.database
})

db.connect(err => {
    if (err) {
        console.log('Cannot connect to database.');
    } else {
        console.log('Connection established.');
    }
});