function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const interesse = document.getElementById("interesse").value;
  const mensagem = document.getElementById("mensagem").value;

  const numeroWhatsApp = "5591999999999";

  const texto = `Olá, meu nome é ${nome}.%0A` +
    `Telefone: ${telefone}.%0A` +
    `Tenho interesse em: ${interesse}.%0A` +
    `Mensagem: ${mensagem}`;

  window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, "_blank");
}
