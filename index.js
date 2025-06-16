const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'mypassword here',
  database: 'testdb',
});


client.connect()
  .then(() => console.log('Connected to PostgreSQL!'))
  .catch(err => console.error('Connection error:', err));

const insercat = async(catName) =>{
    const query = 'INSERT INTO calos (cat_name) VALUES ($1)';

    await client.query(query, [catName]);
    console.log('cat name is added');
}

const listallcats = async()=>{
    const query = 'SELECT * FROM calos';
    const res = await client.query(query);
    console.log('Cats:', res.rows);
}

const updatecat = async(catName, id)=>{
    const query = 'UPDATE calos SET cat_name = $1 WHERE id = $2';

    await client.query(query, [catName, id]);
    console.log(`the catname iwth id ${id} got edited`);
}

const deletecat = async(id)=>{
    const query = 'DELETE FROM calos WHERE id = $1';
    
    await client.query(query, [id]);
    console.log(`the catname iwth id ${id} got deleted`);
}

module.exports = {
    insercat,
    updatecat,
    deletecat,
    listallcats
}