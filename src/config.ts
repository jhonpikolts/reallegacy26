export const siteConfig = {
  // Configurações de Contato
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "5521971734511", // Apenas números, com código do país (55 para Brasil) e DDD
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || "+55 (21) 97173-4511", // Número formato para exibição no rodapé
  whatsappMessage: "Olá! Gostaria de mais informações sobre os serviços da Real Legacy.",
  email: import.meta.env.VITE_EMAIL || "contato@agenciareallegacy.com.br",
  
  // Imagens e Identidade Visual
  // Para trocar a logo, você pode substituir o arquivo logo.png na pasta public/
  // Ou colocar o link de uma imagem externa aqui (ex: "https://seusite.com/logo.png")
  logoUrl: "/Logo.png",
  
  // Textos Principais
  companyName: "Real Legacy",
  heroDescription: "Passagens aéreas, seguro viagem e assessoria completa para sua viagem ou mudança definitiva para a Europa.",
  
  // Redes Sociais
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/agenciareallegacy",
  facebookUrl: import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/agenciareallegacy",
};

// URL formatada para o WhatsApp
export const getWhatsappUrl = () => {
  const encodedMessage = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
};
