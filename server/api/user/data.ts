import { createConnection } from '../../utils/db';
import { defineEventHandler, createError } from 'h3';
import jwt from 'jsonwebtoken';

interface Usuario {
  CodUsuario: number;
  NomeCompleto: string;
  IdAluno: number;  // Garantindo que a propriedade 'IdAluno' está presente
  Email: string;
  CodGrupo: string;
  Senha: string;
  Semestre: number;
  Curso: string;
}

export default defineEventHandler(async (event) => {
  const token = event.req.headers['authorization']?.split(' ')[1];

  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Token não fornecido',
    });
  }

  try {
    const decoded = jwt.verify(token, 'segredo-hein') as jwt.JwtPayload;
    const userId = decoded.id;

    const conn = await createConnection();
    const [rows] = await conn.execute('SELECT * FROM usuarios WHERE CodUsuario = ?', [userId]);
    console.log('Dados retornados:', rows);  // Verifique o que está sendo retornado

    if ((rows as Usuario[]).length === 0) {
      throw createError({
        statusCode: 404,
        message: 'Usuário não encontrado',
      });
    }

    const user = (rows as Usuario[])[0];
    await conn.end();

    // Retorne 'IdAluno' junto com os outros dados
    return {
      IdAluno: user.IdAluno,
      nomeCompleto: user.NomeCompleto,
      email: user.Email,
      semestre: user.Semestre,
      curso: user.Curso,
    };
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    throw createError({
      statusCode: 500,
      message: 'Erro ao buscar dados do usuário',
    });
  }
});
