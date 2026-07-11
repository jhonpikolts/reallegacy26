/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { siteConfig, getWhatsappUrl } from "./config";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Crown, 
  ShieldCheck, 
  ClipboardList, 
  CircleCheck, 
  ArrowRight, 
  Instagram, 
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

// Memory fallback for sessionStorage to avoid crash in sandboxed/iframe environments
let memoryWhatsappUrl: string | null = null;

function setSavedWhatsappUrl(url: string) {
  memoryWhatsappUrl = url;
  try {
    sessionStorage.setItem('whatsappUrl', url);
  } catch (e) {
    console.warn('sessionStorage is not available:', e);
  }
}

function getSavedWhatsappUrl(): string | null {
  if (memoryWhatsappUrl) return memoryWhatsappUrl;
  try {
    return sessionStorage.getItem('whatsappUrl');
  } catch (e) {
    console.warn('sessionStorage is not available:', e);
    return null;
  }
}

export function HomePage() {
  const whatsappUrl = getWhatsappUrl();

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Estudante",
      text: "A Real Legacy cuidou de absolutamente tudo para meu intercâmbio. Desde a assessoria completa para o visto até o seguro viagem, não precisei me preocupar com nada. Serviço impecável!",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Carlos Eduardo",
      role: "Nômade Digital",
      text: "Profissionalismo do começo ao fim. Me orientaram perfeitamente sobre toda a documentação necessária para o visto e emitiram o seguro viagem obrigatório de forma rápida. Recomendo de olhos fechados.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Família Costa",
      role: "Assessoria Completa para Portugal",
      text: "Fazer uma mudança internacional com duas crianças parecia um pesadelo, mas a assessoria completa da equipe tornou tudo tão simples e seguro. Gratidão imensa!",
      image: "https://i.pravatar.cc/150?img=33"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Formulário de Cotação Rápida
  const navigate = useNavigate();

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const txt = `Olá! Gostaria de solicitar informações sobre Assessoria Completa e Seguro Viagem.`;
    const finalUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(txt)}`;
    
    // Armazena URL de forma segura
    setSavedWhatsappUrl(finalUrl);
    
    // Redireciona para a página de obrigado
    navigate('/obrigado');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-legacy-gold selection:text-legacy-navy relative">
      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-full bg-[#25D366] shadow-2xl shadow-green-500/40 flex items-center justify-center text-white cursor-pointer group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <svg 
          viewBox="0 0 24 24" 
          className="w-9 h-9 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-5 bg-legacy-navy/95 backdrop-blur-md text-white px-4 py-2.5 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap border border-white/20 shadow-2xl pointer-events-none font-display tracking-wide flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Fazer Cotação Imediata
        </span>
      </motion.a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-legacy-navy/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <Crown className="w-8 h-8 text-legacy-gold" />
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              REAL <span className="text-legacy-gold">LEGACY</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#servicos" className="relative hover:text-legacy-gold transition-colors group">
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-legacy-gold transition-all group-hover:w-full" />
            </a>
            <a href="#beneficios" className="relative hover:text-legacy-gold transition-colors group">
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-legacy-gold transition-all group-hover:w-full" />
            </a>
            <a href={whatsappUrl} className="relative hover:text-legacy-gold transition-colors group">
              Cotação
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-legacy-gold transition-all group-hover:w-full" />
            </a>
          </div>

          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full gold-gradient text-legacy-navy font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-legacy-gold/20 flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            Falar com Especialista
          </motion.a>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-legacy-gold/5 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10 px-0 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-legacy-gold/10 border border-legacy-gold/40 text-legacy-gold text-sm font-black uppercase tracking-widest mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full bg-legacy-gold shadow-[0_0_8px_#D4AF37]" 
              />
              Especialista em Brasil x Portugal
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-[1.1]"
            >
              🇵🇹 <span className="gold-text-gradient">Assessoria Completa</span> e Seguro Viagem <br />
              para <span className="gold-text-gradient">Portugal</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl md:text-2xl font-medium text-white mb-1"
            >
              💼 Assessoria Completa por apenas <span className="gold-text-gradient font-black">250 €</span>!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto font-medium"
            >
              🛡️ Adquira também o seu <span className="text-white font-bold">Seguro Viagem Obrigatório</span> à parte por apenas <span className="gold-text-gradient font-bold">34,90 €</span>!
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-3xl border-legacy-gold/30 shadow-2xl shadow-legacy-gold/10 relative text-left"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-legacy-gold/10 blur-[60px] -z-10 rounded-full" />
              
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
                Falar com Especialista no WhatsApp
                <div className="px-2 py-1 rounded bg-[#25D366]/20 text-[#25D366] text-xs font-bold flex items-center gap-1.5 border border-[#25D366]/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online
                </div>
              </h3>
              
              <button 
                onClick={handleQuoteClick}
                className="w-full px-8 py-5 rounded-xl relative overflow-hidden group gold-gradient text-legacy-navy font-black text-lg transition-all flex items-center justify-center gap-3 animate-pulse-glow cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-shimmer" />
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar e Iniciar Conversa
              </button>

              {/* Provas Sociais Carousel */}
              <div className="mt-8 overflow-hidden relative">
                <p className="text-gray-400 text-sm mb-4 text-center">Nossos clientes confirmam e recomendam:</p>
                <div className="flex w-full">
                  <motion.div 
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    className="flex gap-4 shrink-0 pr-4"
                  >
                    {[
                      { nome: "João V.", tex: "Processo de visto super tranquilo!" },
                      { nome: "Marcos P.", tex: "Rápido e atendimento nota 10." },
                      { nome: "Larissa F.", tex: "Visto aprovado com a assessoria, obrigado!" },
                      { nome: "Daniela R.", tex: "O suporte tirou todas minhas dúvidas." },
                      { nome: "Caio M.", tex: "Melhor assessoria para Portugal!" },
                      { nome: "Fernanda L.", tex: "Seguro viagem resolvido sem burocracia." },
                      { nome: "Sônia B.", tex: "Assessoria completa para toda família." },
                      { nome: "Bruno K.", tex: "Perfeito, recomendo demais!" },
                      { nome: "Amanda J.", tex: "Minha ida pro Porto foi tranquila." },
                      { nome: "Luís C.", tex: "Ótimo acompanhamento pelo WhatsApp." }
                    ].map((prova, index) => (
                      <div key={index} className="bg-legacy-navy/60 border border-white/5 rounded-lg p-3 whitespace-nowrap text-sm text-gray-300 w-64 shadow-md bg-opacity-70">
                        <div className="flex items-center gap-2 mb-1">
                          <CircleCheck className="w-4 h-4 text-[#25D366]" />
                          <span className="font-bold text-white">{prova.nome}</span>
                        </div>
                        <p className="overflow-hidden text-ellipsis px-1">{prova.tex}</p>
                      </div>
                    ))}
                  </motion.div>
                   <motion.div 
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    className="flex gap-4 shrink-0 pr-4"
                  >
                    {[
                      { nome: "João V.", tex: "Processo de visto super tranquilo!" },
                      { nome: "Marcos P.", tex: "Rápido e atendimento nota 10." },
                      { nome: "Larissa F.", tex: "Visto aprovado com a assessoria, obrigado!" },
                      { nome: "Daniela R.", tex: "O suporte tirou todas minhas dúvidas." },
                      { nome: "Caio M.", tex: "Melhor assessoria para Portugal!" },
                      { nome: "Fernanda L.", tex: "Seguro viagem resolvido sem burocracia." },
                      { nome: "Sônia B.", tex: "Assessoria completa para toda família." },
                      { nome: "Bruno K.", tex: "Perfeito, recomendo demais!" },
                      { nome: "Amanda J.", tex: "Minha ida pro Porto foi tranquila." },
                      { nome: "Luís C.", tex: "Ótimo acompanhamento pelo WhatsApp." }
                    ].map((prova, index) => (
                      <div key={`dup-${index}`} className="bg-legacy-navy/60 border border-white/5 rounded-lg p-3 whitespace-nowrap text-sm text-gray-300 w-64 shadow-md bg-opacity-70">
                        <div className="flex items-center gap-2 mb-1">
                          <CircleCheck className="w-4 h-4 text-[#25D366]" />
                          <span className="font-bold text-white">{prova.nome}</span>
                        </div>
                        <p className="overflow-hidden text-ellipsis px-1">{prova.tex}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-legacy-blue-dark/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-legacy-gold/5 blur-[100px] -z-10" />
          
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 relative"
            >
              <div className="w-12 h-1 gold-gradient mx-auto mb-6 rounded-full" />
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                O que <span className="gold-text-gradient">oferecemos</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Comprometimento e excelência em cada etapa da sua jornada para a Europa.
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <ClipboardList className="w-8 h-8 text-legacy-gold" />,
                  title: "Assessoria Completa",
                  desc: "Acompanhamento profissional completo por apenas 250 €! Checklist de documentos, formulários e tudo o que você precisa para o seu visto ou residência."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-legacy-gold" />,
                  title: "Seguro Viagem Obrigatório",
                  desc: "Adquira o seu seguro viagem emitido à parte por apenas 34,90 €! Cobertura integral exigida pelo Tratado de Schengen, obrigatória para sua entrada legal em Portugal."
                },
                {
                  icon: <Clock className="w-8 h-8 text-legacy-gold" />,
                  title: "Suporte Personalizado",
                  desc: "Atendimento direto e personalizado via WhatsApp para guiar sua transição, sanar dúvidas de prazos e acompanhar cada detalhe do seu planejamento."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 hover:bg-white/10 transition-all group"
                >
                  <div className="mb-6 p-3 w-fit rounded-xl bg-legacy-gold/10 group-hover:bg-legacy-gold/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Por que escolher a <span className="gold-text-gradient">Real Legacy?</span></h2>
              <div className="space-y-6">
                {[
                  "Atendimento rápido e personalizado via WhatsApp",
                  "Suporte total antes, durante e depois da sua viagem",
                  "Consultores especialistas em vistos e seguros para Portugal",
                  "Foco em segurança, economia e conformidade legal"
                ].map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 p-1 rounded-full bg-legacy-gold/20 flex-shrink-0">
                      <CircleCheck className="w-5 h-5 text-legacy-gold" />
                    </div>
                    <p className="text-lg text-gray-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2 border-legacy-gold/20">
                <div className="w-full h-full bg-legacy-blue-light rounded-2xl flex flex-col items-center justify-center p-12 text-center">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mb-6 rotate-45 shadow-xl shadow-legacy-gold/20"
                  >
                    <ClipboardList className="w-8 h-8 text-legacy-navy -rotate-45" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Sua jornada começa aqui</h3>
                  <p className="text-gray-400">Milhares de clientes já realizaram o sonho de morar ou visitar Portugal com nossa ajuda.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-legacy-gold/10 rounded-full blur-3xl opacity-50" />
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-legacy-blue-dark/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">O que nossos <span className="gold-text-gradient">clientes dizem</span></h2>
              <p className="text-gray-400">Histórias reais de quem confiou na Real Legacy.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-legacy-gold hover:bg-legacy-gold/10 transition-colors border-legacy-gold/20"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-legacy-gold hover:bg-legacy-gold/10 transition-colors border-legacy-gold/20"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="overflow-hidden relative px-4 py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card p-8 md:p-12 text-center relative border-legacy-gold/10"
                  >
                    <Quote className="w-12 h-12 text-legacy-gold/20 absolute top-6 left-6" />
                    
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-legacy-gold text-legacy-gold" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-300 italic mb-8 relative z-10">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    
                    <div className="flex flex-col items-center justify-center gap-3">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full border-2 border-legacy-gold/50 object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</h4>
                        <span className="text-sm text-legacy-gold">{testimonials[currentTestimonial].role}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentTestimonial ? "bg-legacy-gold w-6" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 text-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Nossa equipe <span className="gold-text-gradient">está online agora!</span></h2>
            <p className="text-xl text-gray-400 mb-12">Clique abaixo e fale com um especialista para iniciar sua assessoria e emitir seu seguro viagem.</p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-6 rounded-2xl relative overflow-hidden group gold-gradient text-legacy-navy font-black text-xl transition-all animate-pulse-glow"
            >
              <div className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full skew-x-12 group-hover:animate-shimmer" />
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current animate-bounce" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Assessoria & Seguro
            </motion.a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-legacy-blue-dark border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <Crown className="w-6 h-6 text-legacy-gold" />
                <span className="font-display font-bold text-lg tracking-tight">
                  REAL <span className="text-legacy-gold">LEGACY</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Agência especializada em assessoria completa para quem deseja viajar, trabalhar ou morar em Portugal com total segurança e economia.
              </p>
              <div className="flex gap-4">
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-legacy-gold transition-colors hover:border-legacy-gold/50">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Contato</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-legacy-gold" />
                  {siteConfig.phoneDisplay}
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-legacy-gold" />
                  Seg - Sab: 09h às 18h
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-legacy-gold" />
                  Atendimento Online
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>Real Legacy © 2026 - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ObrigadoPage() {
  const savedUrl = getSavedWhatsappUrl() || getWhatsappUrl();

  useEffect(() => {
    // Flag para garantir que o redirecionamento aconteça apenas uma vez
    let redirected = false;

    // Função que executa o redirecionamento físico
    const doRedirect = () => {
      if (!redirected) {
        redirected = true;
        console.log('Redirecionando para o WhatsApp:', savedUrl);
        
        try {
          const isIframe = window.self !== window.top;
          if (isIframe) {
            // Em ambiente de iframe (ex: visualização do AI Studio),
            // tentamos redirecionar a janela pai (top-level) para evitar restrições de X-Frame-Options
            try {
              window.top!.location.href = savedUrl;
            } catch (err) {
              console.warn("Falha ao redirecionar window.top, tentando window.open ou alteração direta:", err);
              // Como fallback para sandbox restrito de iframe, tentamos abrir em uma nova aba
              window.open(savedUrl, '_blank');
              // Também aplicamos localmente para garantir o redirecionamento como último recurso
              window.location.href = savedUrl;
            }
          } else {
            // Em ambiente de produção normal (fora de iframe), redirecionamos a aba atual diretamente
            window.location.href = savedUrl;
          }
        } catch (e) {
          console.error("Falha no redirecionamento avançado, usando fallback:", e);
          window.location.href = savedUrl;
        }
      }
    };

    // Timeout de segurança (fallback): se após 1500ms (1.5 segundos) o Google Ads 
    // ainda não tiver respondido ou se houver um bloqueador de anúncios que 
    // impeça o callback do gtag de rodar, redirecionamos de qualquer forma 
    // para não travar a experiência do usuário.
    const safetyTimeout = setTimeout(() => {
      console.log('Timeout de segurança atingido. Redirecionando...');
      doRedirect();
    }, 1500);

    // Dispara as tags do Google Ads
    if (typeof (window as any).gtag === 'function') {
      console.log('Disparando tags do Google Ads antes do redirecionamento...');
      
      try {
        // 1. Atualiza a configuração da tag para a rota atual (importante para que o Google Ads identifique o carregamento da página /obrigado no React SPA)
        (window as any).gtag('config', 'AW-17410167490', {
          page_title: 'Obrigado',
          page_location: window.location.origin + '/obrigado',
          page_path: '/obrigado'
        });

        // 2. Dispara a visualização de página personalizada com event_callback
        (window as any).gtag('event', 'page_view', {
          page_title: 'Obrigado',
          page_location: window.location.origin + '/obrigado',
          page_path: '/obrigado',
          send_to: 'AW-17410167490',
          event_callback: () => {
            console.log('Google Ads confirmou o envio do evento de visualização de página!');
            clearTimeout(safetyTimeout);
            doRedirect();
          }
        });

        // 3. Dispara também o evento genérico "conversion" como garantia extra de ativação no painel
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-17410167490',
          event_callback: () => {
            console.log('Google Ads confirmou o envio do evento de conversão!');
            clearTimeout(safetyTimeout);
            doRedirect();
          }
        });
      } catch (err) {
        console.error('Erro ao disparar tags do Google Ads:', err);
      }
    } else {
      console.log('gtag não encontrado. Redirecionando imediatamente via fallback...');
      clearTimeout(safetyTimeout);
      doRedirect();
    }

    return () => {
      clearTimeout(safetyTimeout);
    };
  }, [savedUrl]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-legacy-navy text-white px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 rounded-3xl max-w-lg w-full text-center border-legacy-gold/30 shadow-2xl shadow-legacy-gold/10"
      >
        <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
          <CircleCheck className="w-10 h-10 text-legacy-navy" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Obrigado!</h1>
        <p className="text-xl text-gray-300 mb-8">
          Você será redirecionado para o nosso <span className="text-[#25D366] font-bold">WhatsApp</span> em instantes...
        </p>
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-legacy-gold animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-3 h-3 rounded-full bg-legacy-gold animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-3 h-3 rounded-full bg-legacy-gold animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-gray-400 mb-4">Se o redirecionamento automático não iniciar, clique no botão abaixo:</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={savedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-black text-base hover:bg-[#20ba56] transition-all shadow-lg shadow-green-500/20"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/obrigado" element={<ObrigadoPage />} />
      </Routes>
    </BrowserRouter>
  );
}