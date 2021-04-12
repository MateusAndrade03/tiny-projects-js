const btn = document.querySelector('.btn');
const resultado = document.querySelector('.resultado');

if (btn.value !== 'Voltar') {
  btn.addEventListener('click', (e) => {
    e.preventDefault(e);

    const nome = document.querySelector('.nome').value;
    const idade = +document.querySelector('.idade').value;
    const sexo = document.querySelector('.sexo').value;
    const missao = document.querySelector('.missao').value;
    const hospedagem = document.querySelector('.hospedagem').value;
    const curso = document.querySelector('.curso').value;
    const rotulo = document.querySelector('.rotulo');

    const resultadoSpan = document.querySelectorAll('.resultado-span');
    const esconde = document.querySelector('.esconde');

    let valorTotal = 0;
    let nomeMissao;

    try {
      if (!nome || !idade || !sexo || !missao || !hospedagem || !curso)
        throw new Error();
    } catch (error) {
      alert('Todo os campos devem ser preenchidos!');
      return;
    }

    if (nome !== 'Noé') {
      try {
        if (idade > 100) throw new Error();
      } catch (error) {
        alert('Idade fora do limite permitido. A não ser que você sejá Noé!');
        return;
      }
    }

    switch (missao) {
      case 'ol':
        nomeMissao = 'Orlando';
        valorTotal = 7050;
        break;
      case 'ny':
        nomeMissao = 'Nova Iorque';
        valorTotal = 8300;
        break;
      case 'sf':
        nomeMissao = 'São Francisco';
        valorTotal = 9140;
        break;
    }

    if (hospedagem === 'individual') {
      valorTotal = valorTotal + valorTotal * 0.4;
    }

    if (curso === 'integral') {
      valorTotal += 2500;
    } else {
      valorTotal += 1650;
    }

    const config = {
      style: 'currency',
      currency: 'BRL',
    };
    valorTotal = new Intl.NumberFormat('pt-BR', config).format(valorTotal);

    const dados = [
      nome,
      idade,
      sexo === 'm' ? 'Masculino' : 'Feminino',
      nomeMissao,
      hospedagem === 'individual' ? 'Individual' : 'Duplo',
      curso === 'integral' ? 'Integral' : 'Meio Período',
      valorTotal,
    ];

    rotulo.innerText = 'Dados do Cristão';

    resultadoSpan.forEach((span, i) => {
      span.innerText = dados[i];
      console.log(i);
    });

    resultado.classList.remove('hidden');
    esconde.classList.add('hidden');
    btn.value = 'Voltar';

    if (btn.value === 'Voltar') {
      btn.addEventListener('click', () => {
        location.reload();
      });
    }
  });
}
