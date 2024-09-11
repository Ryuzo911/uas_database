import express from 'express';
import database from '../config/database,js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const [result, response] = await database.execute('SELECT * FROM user');
  res.json({message: 'ini pesan dari user', users: result});
});

userRouter.get('/userId', async (req, res) => {
  const userId = req.params.userId;
  const [result, response] = await database.execute('SELECT * FROM user WHERE id=?', [userId],)
  res.json({userId: userId, user: result, message: 'id user yang didapat adalah' + userId});
});

userRouter.post('/', async (req, res) => {
  const {nama, telepon} = req.body;
  const [result, response] = await database.execute('INSERT INTO user (nama, telepon) VAlUES (?,?)', [nama, telepon]);
  res.json({message: 'User berhasil ditambahkan', result});
});
