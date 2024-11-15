// Exemplo de um retorno de API ajustado para retornar Integrantes como string[]
import { Request, Response } from 'express';

// Função que manipula a rota GET para '/api/group/data'
export const getGroupData = (req: Request, res: Response) => {
  const groupData = {
    NomeGrupo: 'Grupo de Teste',
    CodGrupo: '12345',
    LiderNome: 'Fernando',
    // Garantindo que Integrantes seja um array de strings
    Integrantes: ['André', 'Gustavo', 'Isabela', 'Matheus'],
  };

  return res.json(groupData);
};
