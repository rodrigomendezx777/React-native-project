# AppTesteCross

## Descrição

**AppTesteCross** é uma aplicação React Native desenvolvida para fornecer uma interface de login, recuperação de senha e cadastro de usuários, com validações robustas e um design responsivo. A aplicação é projetada para ser usada em dispositivos móveis e oferece uma experiência de usuário fluida e intuitiva.

## Funcionalidades Principais

- **Login:** Tela de login com validação de email e senha.
- **Recuperação de Senha:** Permite que os usuários recuperem suas senhas por meio do envio de um email de recuperação.
- **Cadastro de Usuário:** Tela de cadastro com validação de campos como nome, email, CPF/CNPJ, data de nascimento e aceitação dos termos de uso.
- **Modal de Confirmação:** Modal que aparece após o envio do email de recuperação de senha, informando ao usuário que a senha foi enviada.

## Estrutura do Projeto

- **/assets:** Contém os arquivos de imagem usados na aplicação (ex.: logo, ícones).
- **/components:** Componentes reutilizáveis da aplicação, como o Modal de Confirmação.
- **/screens:** Telas principais da aplicação (LoginScreen, SignupScreen, ForgotPasswordScreen).

## Validações Implementadas

- **Email:** Verifica se o email está em um formato válido.
- **Senha:** Verifica se a senha possui ao menos 6 caracteres.
- **CPF/CNPJ:** Valida o formato e a autenticidade do CPF/CNPJ inserido.
- **Data de Nascimento:** Verifica se a data inserida está no formato correto e se o usuário tem mais de 18 anos.
- **Termos de Uso:** Garante que o usuário aceite os termos antes de concluir o cadastro.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/rodrigomendezx777/React-native-project.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd React-native-project
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npx react-native run-android
   ```
   ou
   ```bash
   npx react-native run-ios
   ```

## Tecnologias Utilizadas

- **React Native**
- **JavaScript/TypeScript**
- **React Navigation**
- **CSS-in-JS (StyleSheet)**
- **React Hooks**

## Contribuição

Sinta-se à vontade para contribuir com melhorias e novas funcionalidades. Basta seguir os passos:

1. Fork este repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Push para a branch:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Este `README.md` destaca todos os pontos importantes da sua aplicação, como funcionalidades, estrutura do projeto, validações e como executar o projeto. Você pode personalizar ainda mais de acordo com as especificidades do seu projeto.
