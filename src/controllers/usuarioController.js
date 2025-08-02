const bcrypt = require('bcrypt');
const pool = require('../database');

const criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Nome, e-mail e senha são obrigatórios.' });
  }

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const resultado = await pool.query(
      'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id',
      [nome, email, senhaCriptografada]
    );

    res.status(201).json({
      mensagem: 'Usuário criado com sucesso!',
      usuario: { id: resultado.rows[0].id, nome, email },
    });
  } catch (err) {
    if (err.code === '23505') { // unique_violation no PostgreSQL
      return res.status(409).json({ erro: 'E-mail já cadastrado.' });
    }
    res.status(500).json({ erro: 'Erro ao inserir usuário.', detalhes: err.message });
  }
};

const listarUsuarios = async (req, res) => {
  try {
    const resultado = await pool.query('SELECT id, nome, email FROM usuarios');
    res.json(resultado.rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuários.', detalhes: err.message });
  }
};

module.exports = {
  criarUsuario,
  listarUsuarios,
};
