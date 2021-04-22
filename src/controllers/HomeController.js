import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Humberto',
      sobrenome: 'Sant Ana',
      email: 'testehumberto@api.com',
      idade: 29,
      peso: 79.90,
      altura: 1.79,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
