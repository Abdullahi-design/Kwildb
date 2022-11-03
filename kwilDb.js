
// check readme file for more clarity

const KwilDB = require('kwildb');
const fs = require('fs');
require('dotenv').config()

// Reading file from privateKey.json
let privateKey = fs.readFileSync('privateKey.json')

// Stringifying the privateKey token
privateKey = JSON.parse(privateKey.toString())

//Defining KWILDB_SECRET  
const secret = 'em_R??r-*^HOYjwI3hdVa#St<<]!J|hQ'

//creating connection to KwilDb and passing private and secret token
const kwilDB = KwilDB.createConnector({
    host: 'test-db.kwil.xyz',
    protocol: 'https',
    moat: 'demo1',
    privateKey: privateKey,
}, secret)

/**
 * creating a new database schema 
 * pass the name of the table in a parentheses and also pass amount or char set
 * Sending data to kwildb requires third value to be "true" so it tells the db that it's a write file
 */
// kwilDB.query('CREATE TABLE newTable(secondCol varchar(20))', true)

/**
 * Sending data to kwildb requires third value to be "true" so it tells the db that it's a write file
 * But by default it's "false" take note
 * First pass the name of the db after passing the preparedStatement
 * Then pass the table name in a parentheses 
 * Pass a value
 * then the what you are sending in an array
 */

kwilDB.preparedStatement(`INSERT INTO newTable(secondCol) VALUES ($1)`, ['My name is Abdullahi'], true)
// kwilDB.preparedStatement(`INSERT INTO mytable(mycol) (post_id, post_text, post_owner) VALUES ($1, $2, $3)`, ['wnv47vn213re', 'Hello testing!', 'abdullahi'], true)