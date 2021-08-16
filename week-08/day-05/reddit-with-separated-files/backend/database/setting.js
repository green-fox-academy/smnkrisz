import dotenv from 'dotenv'

dotenv.config()

export const dbSetting = {
    host: process.env.KRSZ_HOST,
    user: process.env.KRSZ_USER,
    password: process.env.KRSZ_PSSWRD,
    database: process.env.KRSZ_DB
}