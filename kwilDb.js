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

//creating a new database schema 
kwilDB.query('CREATE TABLE newTable(secondCol varchar(20))', true)

