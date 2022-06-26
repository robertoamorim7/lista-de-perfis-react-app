# JSX

- JavaScript XML
- sintaxe usada para que possamos criar interfaces de forma declarativa
- possui uma função que retorna conteúdo HTML
- exporta componentes com sintaxe parecida com tags html

## Fragment

- toda função jsx deve retornar apenas um elemento
- `<> conteudo </>`

## Propriedades

- `props` obtem as propriedades passadas na utilização do componente na pagina e as transmite para a pagina de criação do componente

## Imutabilidade

- principios que os estados do react respeitam
- o conteudo nao deve ser alterado, mas sim substituido
- setState(prevState => [...prevState], newState)

## Key Prop

- todo componente deve ter uma propriedade key que os individualize dos demais irmãos

## Hooks

- funções que permitem ligar/conectar recursos de estado e ciclo de vida do react a partir de componentes totalmente funcionais
- react é uma tecnologia voltada à programação funcional, e os hooks auxiliam nesse objetivo

### useState

- manipular variáveis dentro do react
- faz o componente ser renderizado novamente

### useEffect

- corpo do useEffect são as ações ou aquilo que deve ser executado quando o estado das dependências for atualizado
- é executado automaticamente assim que a interface for renderizada
- array de dependências vazio significa que o useeffect sera executado apenas uma vez, quando o usuario renderizar a tela

## Consumindo APIs

- normal de sempre padrão
- fetch().then(res=>res.json).then(data=>setState(data))
- async function fetchData() {
      const response = await fetch(urlAPI)
      const data = await response.json()
      
      setUser({
        name: data.name, 
        avatar: data.avatar_url})
      }

    fetchData()

