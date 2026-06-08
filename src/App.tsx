/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { siteConfig, getWhatsappUrl } from "./config";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Plane, 
  ShieldCheck, 
  ClipboardList, 
  CheckCircle2, 
  ArrowRight,
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Assessoria Completa para Portugal",
      text: "A equipe da Real Legacy foi impecável do início ao fim. Conseguimos nossa documentação muito mais rápido do que esperávamos. Atendimento 5 estrelas!",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Pedro Alves",
      role: "Passagens e Roteiro",
      text: "Encontraram passagens com preços que não achamos em nenhum outro lugar. A viagem foi perfeita e sem nenhuma dor de cabeça.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Família Costa",
      role: "Assessoria Completa para Portugal",
      text: "Fazer uma mudança internacional com duas crianças parecia um pesadelo, mas a assessoria da equipe tornou tudo tão simples e seguro. Gratidão imensa!",
      image: "https://i.pravatar.cc/150?img=33"
    }
  ];

  // Formulário de Cotação Rápida
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");

  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const nameStr = quoteName.trim() ? ` Me chamo ${quoteName.trim()}.` : "";
    const phoneStr = quotePhone.trim() ? ` Meu WhatsApp para contato é ${quotePhone.trim()}.` : "";
    const txt = `Olá!${nameStr}${phoneStr} Gostaria de fazer uma cotação de passagens.`;
    const finalUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(txt)}`;
    e.currentTarget.href = finalUrl;
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#050a15] text-gray-100 font-sans selection:bg-legacy-gold/30">
      {/* HEADER EXCLUSIVO */}
      <header className="fixed w-full top-0 z-50 bg-[#050a15]/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-legacy-gold to-legacy-light flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Plane className="w-5 h-5 text-[#050a15] -rotate-45" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              <span className="text-legacy-gold">Real</span>Legacy
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicos" className="text-gray-300 hover:text-legacy-gold transition-colors">Serviços</a>
            <a href="#diferenciais" className="text-gray-300 hover:text-legacy-gold transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="text-gray-300 hover:text-legacy-gold transition-colors">Depoimentos</a>
            <a 
              href={getWhatsappUrl()}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-legacy-gold hover:text-[#050a15] hover:border-legacy-gold transition-all duration-300"
            >
              Falar com Consultor
            </a>
          </nav>
          
          {/* Mobile Menu Button - Simplificado para o escopo */}
          <a 
            href={getWhatsappUrl()}
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden p-2 text-legacy-gold"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION DE ALTA CONVERSÃO */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Constelação bg */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-legacy-gold/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050a15] via-[#050a15]/80 to-[#050a15]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 py-20 pb-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-legacy-gold/10 border border-legacy-gold/20 text-legacy-gold text-sm font-medium mb-4"
              >
                <Star className="w-4 h-4 fill-legacy-gold" />
                <span>Agência Nº1 em Viagens para Portugal</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-[1.1]"
              >
                🇵🇹 Passagens para <span className="gold-text-gradient">Portugal</span> <br />
                com Atendimento Especializado
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-xl md:text-2xl font-medium text-white mb-1"
              >
                ✈️ Passagens Brasil → Portugal a partir de <span className="gold-text-gradient font-bold">R$ 1.847</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Valores sujeitos à disponibilidade.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-legacy-gold to-transparent opacity-50"></div>
                
                <h3 className="text-xl font-medium mb-6 text-left flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-legacy-gold/20 flex items-center justify-center text-legacy-gold">
                    ⚡
                  </span>
                  <div>
                    <span className="block text-white">Receba sua cotação em 15 minutos</span>
                    <span className="block text-sm text-gray-400 font-normal mt-1">Preencha os dados abaixo e te chamaremos no WhatsApp.</span>
                  </div>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-20">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium text-left block">Nome</label>
                    <input 
                      type="text" 
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      placeholder="Qual o seu nome?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-legacy-gold/50 transition-colors focus:ring-1 focus:ring-legacy-gold/50 text-left"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium text-left block">WhatsApp</label>
                    <input 
                      type="tel" 
                      value={quotePhone}
                      onChange={(e) => setQuotePhone(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-legacy-gold/50 transition-colors focus:ring-1 focus:ring-legacy-gold/50 text-left"
                    />
                  </div>
                </div>
                
                <a 
                  href="#"
                  onClick={handleQuoteClick}
                  className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-legacy-gold to-legacy-light text-[#050a15] font-bold rounded-xl text-lg transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden hover:scale-[1.01]"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                  <span>Quero Minha Cotação Gratuita</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-xs text-gray-500 mt-4 text-center">Nenhum compromisso financeiro ao solicitar cotação.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NOSSOS SERVIÇOS (TABS INTERATIVAS) */}
        <section id="servicos" className="py-24 bg-[#0a101e] relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-legacy-gold font-medium tracking-wider uppercase text-sm">O que fazemos</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Soluções Completas de Viagem</h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {siteConfig.services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTab === index 
                        ? "bg-legacy-gold text-[#050a15] shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {index === 0 && <Plane className="w-4 h-4" />}
                    {index === 1 && <ClipboardList className="w-4 h-4" />}
                    {index === 2 && <ShieldCheck className="w-4 h-4" />}
                    {service.title}
                  </button>
                ))}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#050a15] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-legacy-gold/5 rounded-full filter blur-[80px]"></div>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{siteConfig.services[activeTab].title}</h3>
                      <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                        {siteConfig.services[activeTab].description}
                      </p>
                      <ul className="space-y-4 mb-8">
                        {siteConfig.services[activeTab].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-legacy-gold shrink-0 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={`${getWhatsappUrl()}&text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o serviço de ${siteConfig.services[activeTab].title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white hover:bg-legacy-gold hover:text-[#050a15] transition-all border border-white/10 hover:border-legacy-gold"
                      >
                        Tenho interesse <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <img 
                        src={
                          activeTab === 0 ? "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" :
                          activeTab === 1 ? "https://images.unsplash.com/photo-1554252116-2dcd481ec0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" :
                          "https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        }
                        alt={siteConfig.services[activeTab].title}
                        className="object-cover w-full h-full opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a15] via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL / DEPOIMENTOS */}
        <section id="depoimentos" className="py-24 bg-[#050a15] relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-legacy-gold/5 rounded-full filter blur-[100px]"></div>
          
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">O que nossos clientes dizem</h2>
              <p className="text-gray-400 mt-4 text-lg">Milhares de histórias de sucesso e sonhos realizados.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative"
                >
                  <Quote className="absolute top-8 right-8 text-legacy-gold/20 w-24 h-24 rotate-180" />
                  
                  <div className="flex gap-1 text-legacy-gold mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-legacy-gold" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 relative z-10 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-14 h-14 rounded-full border-2 border-legacy-gold"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-legacy-gold text-sm">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-6 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-legacy-gold hover:border-legacy-gold transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'w-8 bg-legacy-gold' : 'w-2 bg-white/20'}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-legacy-gold hover:border-legacy-gold transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#03060c] pt-20 pb-10 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <Plane className="w-6 h-6 text-legacy-gold -rotate-45" />
                  <span className="text-2xl font-bold tracking-tight text-white">
                    <span className="text-legacy-gold">Real</span>Legacy
                  </span>
                </div>
                <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                  Referência em assessoria de viagens e vistos. Conectando pessoas a novos destinos com segurança, economia e transparência.
                </p>
                <div className="flex gap-4">
                  <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-legacy-gold hover:text-[#050a15] transition-colors border border-white/10">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-legacy-gold hover:text-[#050a15] transition-colors border border-white/10">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><a href="#servicos" className="hover:text-legacy-gold transition-colors">Nossos Serviços</a></li>
                  <li><a href="#diferenciais" className="hover:text-legacy-gold transition-colors">Por que nos escolher</a></li>
                  <li><a href="#depoimentos" className="hover:text-legacy-gold transition-colors">Clientes Satisfeitos</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6">Contato</h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-legacy-gold shrink-0 mt-0.5" />
                    <span>WhatsApp Comercial<br/><a href={getWhatsappUrl()} className="text-white hover:text-legacy-gold transition-colors">Clique aqui para falar</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-legacy-gold shrink-0 mt-0.5" />
                    <span>Segunda a Sexta<br/>09:00 - 18:00</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Real Legacy Viagens. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}