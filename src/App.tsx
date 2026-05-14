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
  const whatsappUrl = getWhatsappUrl();

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Estudante",
      text: "A Real Legacy cuidou de absolutamente tudo para meu intercâmbio. Desde a passagem até o seguro viagem, não precisei me preocupar com nada. Serviço impecável!",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Carlos Eduardo",
      role: "Nômade Digital",
      text: "Profissionalismo do começo ao fim. Me ajudaram a encontrar as melhores rotas e me orientaram perfeitamente sobre a documentação. Recomendo de olhos fechados.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Família Costa",
      role: "Mudança Residencial",
      text: "Fazer uma mudança internacional com duas crianças parecia um pesadelo, mas a assessoria da equipe tornou tudo tão simples e seguro. Gratidão imensa!",
      image: "https://i.pravatar.cc/150?img=33"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
          <div className="w-2 h-2 rounded-full bg-[#25D366]" />
          Dúvidas? Fale conosco
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
            <img src={siteConfig.logoUrl} alt={siteConfig.companyName} className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              REAL <span className="text-legacy-gold">LEGACY</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {["servicos", "beneficios"].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="relative hover:text-legacy-gold transition-colors group capitalize"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-legacy-gold transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full gold-gradient text-legacy-navy font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-legacy-gold/20"
          >
            Falar no WhatsApp
          </motion.a>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-legacy-gold/5 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 flex justify-center"
            >
              <img 
                src={siteConfig.logoUrl} 
                alt={`${siteConfig.companyName} Logo`} 
                className="w-full max-w-[400px] h-auto rounded-3xl shadow-2xl shadow-legacy-gold/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-legacy-gold text-xs font-bold uppercase tracking-widest mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-legacy-gold animate-pulse" />
              Especialista em Portugal
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
            >
              Transformando seu sonho <br />
              de <span className="gold-text-gradient">Portugal</span> em realidade.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10"
            >
              {siteConfig.heroDescription}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href={whatsappUrl}
                className="w-full sm:w-auto px-8 py-4 rounded-xl gold-gradient text-legacy-navy font-black text-lg hover:shadow-2xl hover:shadow-legacy-gold/30 transition-all flex items-center justify-center gap-2"
              >
                Solicitar Cotação Agora
                <ArrowRight className="w-5 h-5" />
              </a>
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
                  icon: <Plane className="w-8 h-8 text-legacy-gold" />,
                  title: "Passagens Aéreas",
                  desc: "Melhores preços do mercado com suporte completo na reserva e marcação de assentos."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-legacy-gold" />,
                  title: "Seguro Viagem",
                  desc: "Seguro obrigatório para solicitação do visto, com cobertura completa para sua segurança."
                },
                {
                  icon: <ClipboardList className="w-8 h-8 text-legacy-gold" />,
                  title: "Assessoria Especializada",
                  desc: "Ajuda personalizada com documentação, vistos e orientações cruciais para o embarque."
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
                  "Consultores especialistas em rotas para Portugal",
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
                      <CheckCircle2 className="w-5 h-5 text-legacy-gold" />
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
                    <Plane className="w-8 h-8 text-legacy-navy -rotate-45" />
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Pronto para sua nova vida em <span className="gold-text-gradient">Portugal?</span></h2>
            <p className="text-xl text-gray-400 mb-12">Nossa equipe está online agora para tirar todas as suas dúvidas e planejar seu embarque.</p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappUrl}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl gold-gradient text-legacy-navy font-black text-xl shadow-2xl shadow-legacy-gold/30"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento Grátis
            </motion.a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-legacy-blue-dark border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <img src={siteConfig.logoUrl} alt={siteConfig.companyName} className="h-10 w-auto object-contain" referrerPolicy="no-referrer" loading="lazy" />
                <span className="font-display font-bold text-lg tracking-tight">
                  REAL <span className="text-legacy-gold">LEGACY</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Agência especializada em assessoria completa para quem deseja viajar, trabalhar ou morar em Portugal com total segurança e economia.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-legacy-gold transition-colors hover:border-legacy-gold/50">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-legacy-gold transition-colors hover:border-legacy-gold/50">
                  <Facebook className="w-5 h-5" />
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
                  Seg - Sex: 09h às 19h
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-legacy-gold" />
                  Atendimento Online Global
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Acesso Rápido</h4>
              <ul className="space-y-4 text-sm text-gray-400 underline-offset-4">
                <li><a href="#servicos" className="hover:text-white hover:underline transition-colors">Serviços</a></li>
                <li><a href="#beneficios" className="hover:text-white hover:underline transition-colors">Sobre Nós</a></li>
                <li><a href={whatsappUrl} className="hover:text-white hover:underline transition-colors">Cotação</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition-colors">Políticas</a></li>
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

