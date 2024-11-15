import { createConnection } from '../../utils/db';
import bcrypt from 'bcryptjs';
import { defineEventHandler, createError, readBody } from 'h3';
import jwt from 'jsonwebtoken';

interface Usuario {
  CodUsuario: number;
  NomeCompleto: string;
  Email: string;
  Senha: string;
}

export default defineEventHandler(async (event) => {
  const { email, senha }: { email: string; senha: string } = await readBody(event);

  console.log("Dados recebidos no backend:", email, senha); // Verificar os dados recebidos

  try {
    const conn = await createConnection();
    const result = await conn.execute('SELECT * FROM usuarios WHERE Email = ?', [email]);
    const rows = result[0] as Usuario[];
    await conn.end();

    if (rows.length === 0) {
      console.error("Usuário não encontrado no banco de dados.");
      throw createError({
        statusCode: 401,
        message: 'Credenciais inválidas'
      });
    }

    const aluno: Usuario = rows[0];

    // Verificando a senha com bcrypt
    const isPasswordValid = await bcrypt.compare(senha, aluno.Senha);
    console.log("Senha válida:", isPasswordValid);

    if (!isPasswordValid) {
      console.error("Senha incorreta.");
      throw createError({
        statusCode: 401,
        message: 'Credenciais inválidas'
      });
    }

    // Gerar um token JWT
    const token = jwt.sign(
      { id: aluno.CodUsuario, email: aluno.Email },
      'segredo-hein', // Chave secreta
      { expiresIn: '1h' } // Expiração do token
    );
    
    return {
      token,
      id: aluno.CodUsuario,
      nome: aluno.NomeCompleto,
      email: aluno.Email
    };
  } catch (error) {
    console.error("Erro ao realizar login:", error); // Log detalhado de erro
    throw createError({
      statusCode: 500,
      message: 'Erro ao realizar login'
    });
  }
});
