// Cada domínio deste projeto cai numa pasta do repositório.
//
// Domínio personalizado no Cloudflare Pages sempre serve a raiz do projeto, e
// por isso a página de links mora na raiz e não aparece aqui. Os domínios que
// moram em subpasta precisam desta reescrita, que troca o caminho antes de
// buscar o arquivo. É reescrita e não redirecionamento, então o endereço
// continua limpo na barra do navegador.
//
// Para ligar um domínio novo a uma pasta, acrescente uma linha ao mapa.

const PASTA_POR_DOMINIO = {
  "diagnostico.ojpviaja.com.br": "/diagnostico",
};

export async function onRequest(context) {
  const { request, next } = context;

  let destino = null;
  try {
    const url = new URL(request.url);
    const pasta = PASTA_POR_DOMINIO[url.hostname.toLowerCase()];
    const jaEstaNaPasta =
      pasta && (url.pathname === pasta || url.pathname.startsWith(pasta + "/"));

    if (pasta && !jaEstaNaPasta) {
      url.pathname = pasta + url.pathname;
      destino = new Request(url.toString(), request);
    }
  } catch (erro) {
    // Qualquer falha aqui cai no comportamento normal do Pages, para uma
    // página nunca sair do ar por causa da reescrita.
    destino = null;
  }

  return destino ? next(destino) : next();
}
