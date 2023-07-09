import mysql from 'mysql'

const urlDB = `mysql://root:u9WKooXGeIPUl5v5NqvA@containers-us-west-78.railway.app:5734/railway`

export const db = mysql.createConnection(urlDB)


// export const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"bijit",
//     database:"social"
// })

// bijit@2002!!!!!