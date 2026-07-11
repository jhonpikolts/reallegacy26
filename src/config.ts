export const siteConfig = {
  // Configurações de Contato
  whatsappNumber: "351933501177", // Apenas números, com código do país e DDD
  phoneDisplay: "+351 93 350 1177", // Número formatado para exibição no rodapé
  whatsappMessage: "Olá! Gostaria de solicitar informações sobre a Assessoria Completa e Seguro Viagem.",
  email: import.meta.env.VITE_EMAIL || "contato@agenciareallegacy.com.br",
  
  // Detalhes da Empresa
  companyName: "Real Legacy",
  cnpj: "48.234.908/0001-34", // Exemplo se aplicável ou NIF
  address: "Lisboa, Portugal",
  logoUrl: "/Logo.png", // Caso possua arquivo físico na pasta public
  
  // Conteúdo do Site
  heroTitle: "Sua Nova Jornada Começa Aqui",
  heroSubtitle: "Assessoria Internacional de Excelência",
  heroDescription: "Seguro viagem e assessoria completa para sua viagem ou mudança definitiva para Portugal.",
  
  // Redes Sociais
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/jhonemportugal",
  facebookUrl: import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/agenciareallegacy",
};

export function getWhatsappUrl(): string {
  const text = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}