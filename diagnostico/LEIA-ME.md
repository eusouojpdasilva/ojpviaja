# Diagnóstico Efeito Reservas

Página do diagnóstico para agências de viagens. Esta pasta é a fonte única da
página. O repositório `diagnostico-efeito` servia essa mesma página até
09/11/2026 e deixa de ser usado.

## Arquivos

- `index.html`: conteúdo e estrutura.
- `styles.css`: identidade visual e layout responsivo.
- `script.js`: menu, animações de entrada e o fluxo do formulário.
- `favicon.svg`: ícone da marca.
- `assets/`: vídeos do hero e da seção de rotina, e o retrato do JP.
- `versao2/`: página "O JP Viaja", que não faz parte do diagnóstico e ficou
  nesta pasta por herança. Mover quebra a URL que está publicada.

A versão anterior da página ficou em `_arquivo/diagnostico-quiz-2026-10/`, na
raiz do repositório. A pasta `_arquivo/` está no `.vercelignore` e fica fora da
pasta publicada, então não ganha URL pública.

## Caminhos

Os caminhos de `styles.css`, `script.js`, `favicon.svg` e `assets/` são
relativos. A página funciona tanto servida na raiz de um domínio quanto numa
subpasta. O `vercel.json` na raiz do repositório liga a barra final, para que
`/diagnostico` redirecione para `/diagnostico/` e os caminhos relativos
resolvam.

## Onde está publicada

- `diagnostico.ojpviaja.com.br`: domínio principal, no Cloudflare Pages.
- `ojpviaja.vercel.app/diagnostico/`: mesma página pelo deploy da Vercel.

## Formulário

As respostas não são gravadas em lugar nenhum. O envio monta uma mensagem e
abre o WhatsApp para a pessoa revisar e enviar. A conexão com o CRM no D1 ainda
não existe.
