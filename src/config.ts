export const siteConfig = {
  // Configurações Gerais do Site
  companyName: "Real Legacy",
  logoUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=300&q=80", // Logo ilustrativa, substitua pela sua se necessário
  phoneDisplay: "+351 912 345 678", // Número formatado para exibição visual
  
  // WhatsApp & Contatos
  whatsappNumber: "351912345678", // Substitua pelo seu número real do WhatsApp com código do país (ex: 351 para Portugal)
  email: "contato@reallegacy.com.br",
  address: "Lisboa, Portugal",
  
  // Textos Principais
  heroTitle: "Assessoria Completa e Seguro Viagem para Portugal",
  heroDescription: "Seguro viagem e assessoria completa para sua viagem ou mudança definitiva para Portugal.",
  
  // Redes Sociais
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/jhonemportugal",
  facebookUrl: import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/agenciareallegacy",
};

/**
 * Retorna a URL completa de início de conversa do WhatsApp padrão do site
 */
export function getWhatsappUrl() {
  const defaultText = `Olá! Gostaria de solicitar informações sobre Assessoria Completa e Seguro Viagem.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(defaultText)}`;
}