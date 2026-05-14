export const siteConfig = {
  // Configurações de Contato
  whatsappNumber: "5511999999999", // Apenas números, com código do país (55 para Brasil) e DDD
  phoneDisplay: "+55 11 99999-9999", // Número formato para exibição no rodapé
  whatsappMessage: "Olá! Gostaria de mais informações sobre os serviços da Real Legacy.",
  email: "contato@reallegacy.com.br",
  
  // Imagens e Identidade Visual
  // Para trocar a logo, você pode substituir o arquivo logo.png na pasta public/
  // Ou colocar o link de uma imagem externa aqui (ex: "https://seusite.com/logo.png")
  logoUrl: "/Logo.png",
  
  // Textos Principais
  companyName: "Real Legacy",
  heroDescription: "Passagens aéreas, seguro viagem e assessoria completa para sua viagem ou mudança definitiva para a Europa.",
  
  // Redes Sociais
  instagramUrl: "https://instagram.com/reallegacy",
  facebookUrl: "https://facebook.com/reallegacy",
};

// URL formatada para o WhatsApp
export const getWhatsappUrl = () => {
  const encodedMessage = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
};
