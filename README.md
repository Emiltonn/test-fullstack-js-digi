# Teste - Fullstack - JavascriptStack (Nodjs/Angular)

![GitHub repo size](https://img.shields.io/github/repo-size/Emiltonn/test-fullstack-js-digi?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Emiltonn/test-fullstack-js-digi?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Emiltonn/test-fullstack-js-digi?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/github/issues/Emiltonn/test-fullstack-js-digi?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/Emiltonn/test-fullstack-js-digi?style=for-the-badge)

> Cadastro de colaboradores e listagem por setor.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Crud Colaboradores
- [x] Token JWT
- [ ] Diagrama de Modelagem de dados
- [ ] Frontend em Angular 2+
- [ ] Crud Setores

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `<NodeJs, Docker, Docker-compose, Yarn>`
- Você tem uma máquina `<Windows / Linux / Mac>`.

## 🚀 Instalan

Para instalar, siga estas etapas:

No seu terminal, com o docker rodando.

Linux, Windows e macOS:

```
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d

```

```
yarn install
```

```
yarn typeorm migration:run
```

```
chmod +x .docker/entrypoint.sh
```

```
yarn dev

```

```

## Rotas API

Encontram-se nas pastas routes do projeto.


## 📫 Contribuindo para o projeto


Para contribuir com <nome_do_projeto>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

```
