[![Version](https://img.shields.io/npm/v/react-native-template-pointec-basic.svg?label=version)](https://www.npmjs.com/package/react-native-template-pointec-basic)
[![NPM Download](https://img.shields.io/npm/dt/react-native-template-pointec-basic.svg)](https://www.npmjs.com/package/react-native-template-pointec-basic)
[![GitHub Issues](https://img.shields.io/github/issues-raw/paesrafael/react-native-template-pointec-basic.svg)](https://github.com/paesrafael/react-native-template-pointec-basic/issues)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/paesrafael/react-native-template-pointec-basic.svg)](https://github.com/paesrafael/react-native-template-pointec-basic/commits/master)
[![Licenses](https://img.shields.io/npm/l/react-native-template-pointec-basic.svg)](https://choosealicense.com/licenses/mit)

<p align="center">
  <a href="htts://pointec.dev" target="_blank">
    <img width="405" height="69" src="https://assets.pointec.dev/image/pointec-logo-site.png" alt="POINTEC IT SOLUTIONS logo" />
  </a>

  <h2 align="center">Template POINTEC Basic</h2>
</p>

# Tabela de conteúdo

- [Sobre o projeto](#sobre-o-projeto)
  - [Feito com](#feito-com)
- [Iniciando](#iniciando)
  - [Pré-requisitos](#pré-requisitos)
  - [Estrutura de arquivos](#estrutura-de-arquivos)
  - [Instalação](#instalação)
    - [Passo adicional no Android](#passo-adicional-no-android)
- [Configuração dos Módulos de import](<#configuração-dos-módulos-de-imports-(eslint-plugin-import-helpers)>)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o projeto

Projeto para a criação de um template do React Native. Agilizando na hora de iniciar um novo projeto, facilitando o fluxo de desenvolvimento.

## Feito com

O templete inclui os seguites pacotes:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;
  - [react-native-reanimated](https://reactnavigation.org/docs/getting-started) - Dependência para o React Navigation
  - [react-native-screens](https://reactnavigation.org/docs/getting-started) - Dependência para o React Navigation
  - [react-native-safe-area-context](https://reactnavigation.org/docs/getting-started) - Dependência para o React Navigation
  - [react-native-community/masked-view](https://github.com/react-native-community/react-native-masked-view) - Dependência para o React Navigation
  - [react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/) - Fornece uma maneira do aplicativo fazer a transição entre telas, onde cada nova tela é colocada no topo de uma pilha.
  - [react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/) - Uma barra de guias simples na parte inferior da tela que permite alternar entre diferentes rotas.
  - [react-navigation/drawer](https://reactnavigation.org/docs/drawer-navigator) - Componente que renderiza uma `drawer` de navegação que pode ser aberta e fechada através de gestos.
  - [react-native-paper](https://reactnavigation.org/docs/material-bottom-tab-navigator/#using-with-react-native-paper-optional) - Uma biblioteca para a interface que segue o Material Design, é compatível com os padrões e deixa seu aplicativo mais nativo.
  - [react-navigation/material-bottom-tabs](https://reactnavigation.org/docs/material-bottom-tab-navigator) - Uma barra de guias com tema do `Material Design` na parte inferior da tela que permite alternar entre diferentes rotas com animação.
  - [react-navigation/material-top-tabs](https://reactnavigation.org/docs/material-top-tab-navigator) - Uma barra de guias com tema do `Material Design` na parte superior da tela que permite alternar entre diferentes rotas tocando na rota ou passando horizontalmente.
  - [react-native-community/react-native-tab-view](https://github.com/react-native-community/react-native-tab-view) - Um componente de exibição de guia com recursos animados e gestos suaves.
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [React Native Modal](https://github.com/react-native-community/react-native-modal) - Um modal aprimorado, animado e personalizável, conta com uma API simples e ajustes de layout.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - Uma opção para usar ícones, há vários conjuntos de ícones incluídos.
- [React Native SVG](https://github.com/react-native-community/react-native-svg) - Fornece suporte SVG ao React Native no iOS e Android, e uma camada de compatibilidade para a web.
- [Styled Components](https://github.com/styled-components/styled-components) - Permite escrever código CSS aos componentes.
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-config-standard](https://github.com/standard/standard) - Este pacote fornece ao .eslintrc a configuração Standard;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers) - Regras para ordenação automática dos módulos de imports;
  - [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) - Regras adicionais do ESlint para o Node.js;
  - [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) - Impor práticas recomendadas para promises do JS;
  - [eslint-plugin-standard](https://github.com/standard/eslint-plugin-standard) - Regras Standard básicas para o ESlint;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

## Iniciando

Para utilizar o template, seja através do React Native CLI ou copiando localmente os arquivos, siga as etapas abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é recomendado que você tenha o ambiente configurado para criar e testar aplicativos em React Native. Se você tem, ótimo segue em frente, senão corre pra configurar :)

### Estrutura de arquivos

A estrutura dos arquivos está conforme abaixo:

```bash
pointec-basic
├── src/
│   ├── assets/
│   │   ├── pointec_logo.png
│   │   └── pointec_logo@2x.png
│   │   └── pointec_logo@3x.png
│   ├── components/
│   │   └── Details/
│   │       └── index.js
│   │       └── styles.js
│   ├── config/
│   │   └── index.js
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   │       └── styles.js
│   ├── routes/
│   │   └── main.routes.js
│   ├── services/
│   │   └── api.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
├── .travis.yml
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```

### Instalação

1. Para instalar e utilizar esse template o processo é simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init MeuTemplate --template pointec-basic
```

2. Após o projeto ser criado por completo, você pode deletar o arquivo `App.js` da raiz, alteramos para o arquivo `index.js` na pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

#### Passo Adicional no Android

Para que os gestos sejam habilitados no Android é necessário um passo a mais, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e comece importando os pacotes:

```java
// ...
import com.facebook.react.ReactActivity;
// Importações adicionadas
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Feito a importação vamos criar um método novo, logo abaixo do `getMainComponentName()`:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

## Configuração dos Módulos de imports (eslint-plugin-import-helpers)

Para a ordenação automática dos imports, criamos no `eslintrc.json` um padrão de configuração.

```
Você pode adaptar conforme suas necessidades.
```

## Contribuição

Se quiser você pode contribuir com o projeto. Contribuições são o que fazem a comunidade open source um lugar incrível. Qualquer contribuição que você fizer será **muito bem vinda**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/MyFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma nova feature`)
5. Faça o Push da Branch (`git push origin feature/MyFeature`)
6. Abra um Pull Request

Para testar o template de um caminho local, coloque o caminho absoluto junto com o prefixo `file://`

```
react-native init MeuTemplate --template file:///Users/DEV/MeusProjetos/react-native-template-pointec-basic
```

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

POINTEC - [Github](https://github.com/paesrafael) - **developer@pointec.dev**
