# ojpviaja

Repositório único das páginas do O JP Viaja. Um projeto na Cloudflare, o
`ojpviaja`, serve tudo que está aqui, e cada domínio cai numa pasta.

## O que mora onde

| Caminho | Página | Domínio |
|---|---|---|
| `/` | Página de links do JP | `ojpviaja.com.br` e `www` |
| `/estrategista/` | Efeito Reservas, JP Estrategista | antes em `propostas.ojpviaja.com.br` |
| `/diagnostico/` | Diagnóstico Efeito Reservas | `diagnostico.ojpviaja.com.br` |
| `/diagnostico/versao2/` | O JP Viaja, versão estática antiga | `ojpviaja.com.br/diagnostico/versao2/` |
| `/propostas/<cliente>/` | Proposta comercial por cliente | `propostas.ojpviaja.com.br` |
| `/_arquivo/` | Versões aposentadas, fora do deploy | nenhum |

## Como os domínios chegam na pasta certa

Domínio personalizado no Cloudflare Pages sempre cai na raiz do projeto, por
isso a página de links fica na raiz e não precisa de regra nenhuma.

O diagnóstico precisa de uma regra, porque mora numa subpasta. Na zona
`ojpviaja.com.br`, em Rules, existe uma URL Rewrite Rule:

- Request URL: `https://diagnostico.ojpviaja.com.br/*`
- Rewrite to, Path: `/diagnostico/${1}`

É reescrita e não redirecionamento, então o endereço continua limpo na barra do
navegador. Os caminhos de CSS, script e assets do diagnóstico são relativos,
para a página funcionar tanto na raiz de um domínio quanto numa subpasta.

## Caminhos

Toda página aqui usa caminho relativo. Nada de `/styles.css`, sempre
`styles.css`. Caminho absoluto quebra assim que a página sai da raiz.

O `vercel.json` liga a barra final, para `/diagnostico` redirecionar para
`/diagnostico/` e os caminhos relativos resolverem.

## Histórico

A página do diagnóstico vinha do repositório `diagnostico-efeito`, aposentado em
09/11/2026. A página de links era upload direto no projeto `ojpviaja-links`,
sem repositório, e passou a viver aqui na mesma data.
