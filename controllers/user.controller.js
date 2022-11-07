const db = require('../db');

class userController {
    async createUser(req, res) {
        const {username, password, email} = req.body;
        const newUser = await db.query('INSERT into users (username, password, email) values ($1, $2, $3) RETURNING * ', [username, password, email]);
        res.json(newUser.rows[0]);
    } 

    async getUsers(req, res) {
        const users = await db.query('SELECT * from users');
        res.json(users.rows);
    } 

    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * from users where id = $1', [id]);
        res.json(user.rows[0]);
    } 

    async updateUser(req, res) {
        const {id, username, password, email} = req.body;
        const user = await db.query('UPDATE users set username = $1, password = $2, email = $3 where id = $4 RETURNING *', [username, password, email, id]);
        res.json(user.rows[0]);
    } 

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE from users where id = $1', [id]);
        res.json(user.rows[0]);
    } 
}

module.exports = new userController();