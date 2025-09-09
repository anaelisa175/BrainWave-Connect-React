# Migração para Next.js - BrainWave Connect

Este projeto foi migrado do Create React App para Next.js mantendo toda a funcionalidade original.

## 🚀 Mudanças Principais

### Estrutura do Projeto
- **Criada nova branch `nextjs-migration`** para preservar o trabalho original
- **Adicionada pasta `pages/`** com o sistema de roteamento do Next.js
- **Configurado `next.config.js`** para otimizações do Next.js
- **Adicionados `_app.js` e `_document.js`** para configuração global

### Roteamento
- **Migrado do React Router para Next.js Router**
- **Página principal**: `pages/index.js`
- **Artigo Premium**: `pages/artigo-premium.js`
- **Atualizado componente ThemeList** para usar `useRouter` do Next.js

### CSS e Estilos
- **Todos os CSS movidos para `_app.js`** conforme exigência do Next.js
- **Removidos imports individuais** de CSS dos componentes
- **Mantida toda a estilização original** sem alterações visuais

### Dependências
- **Adicionado Next.js** e atualizações do React
- **Removido react-scripts** e dependências do CRA
- **Adicionado ESLint** com configurações específicas do Next.js
- **Removido react-router-dom** (substituído pelo roteamento do Next.js)

## 🛠️ Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start

# Linter
npm run lint
```

## 📁 Estrutura de Arquivos

```
├── pages/
│   ├── _app.js          # Configuração global da aplicação
│   ├── _document.js     # Configuração do HTML
│   ├── index.js         # Página principal
│   └── artigo-premium.js # Página do artigo premium
├── src/
│   ├── components/      # Componentes React (sem alterações)
│   └── *.css           # Arquivos de estilo
├── public/             # Arquivos estáticos
└── next.config.js      # Configurações do Next.js
```

## 🎯 Benefícios da Migração

1. **Performance Melhorada**: Server-Side Rendering (SSR) e otimizações automáticas
2. **SEO Otimizado**: Melhor indexação pelos motores de busca
3. **Roteamento Automático**: Sistema de roteamento baseado em arquivos
4. **Otimização de Imagens**: Componente Image otimizado do Next.js
5. **Bundle Splitting**: Carregamento otimizado de código

## 📝 Compatibilidade

- ✅ **Todos os componentes funcionando** sem alterações na lógica
- ✅ **Estilos mantidos** sem perda visual
- ✅ **Funcionalidade preservada** incluindo navegação e interações
- ✅ **Responsividade mantida** em todos os dispositivos

## 🔄 Desenvolvimento Futuro

Com Next.js, agora é possível implementar:
- API Routes para backend
- Geração de páginas estáticas (SSG)
- Otimizações automáticas de performance
- PWA (Progressive Web App)
- Internacionalização (i18n)

---

**Nota**: O trabalho original permanece intacto na branch `main`. Esta migração está na branch `nextjs-migration`.
