import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  ShieldAlert, 
  Car, 
  Zap, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Wrench,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState('idle');

  // Inject SEO Meta Tags as requested
  useEffect(() => {
    document.title = "Douglas Injeção Eletrônica | Reparo de Módulos & Performance";
    
    const metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = "Especialistas em reparo de módulo automotivo, conserto de ABS, airbag, imobilizador e aumento de potência com chip de performance.";
    document.head.appendChild(metaDesc);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "reparo de módulo automotivo, conserto de ABS, chip de potência, remapeamento automotivo, conserto de airbag";
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDesc);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('orcamento');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API/Form submission delay
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[100svh] min-h-[600px] flex items-center pt-16 lg:pt-0">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40 z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-zinc-900/80 border border-zinc-700 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium tracking-wide text-zinc-300">Diagnóstico Rápido e Preciso</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Soluções Definitivas em <span className="text-red-600">Eletrônica Automotiva</span> e Performance.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              Especialistas em reparos complexos de módulos (ABS, Airbag, Imobilizador) e aumento de potência com Chip de Performance. A tecnologia que seu carro exige, a confiança que você merece.
            </p>
            
            <button 
              onClick={scrollToForm}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-1"
            >
              Solicitar Orçamento
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Especialidades</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Reparo e Programação de Módulos</h3>
              <p className="text-zinc-400 leading-relaxed">Consertos especializados em centrais eletrônicas (ECU), garantindo o funcionamento original de fábrica.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">ABS, Airbag e Imobilizador</h3>
              <p className="text-zinc-400 leading-relaxed">Resolução de luzes de painel e falhas de segurança críticas do seu veículo com equipamentos precisos.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                <Car className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Eletrônica Embarcada</h3>
              <p className="text-zinc-400 leading-relaxed">Diagnóstico e reparo avançado em toda a rede eletrônica do carro, redes CAN, sensores e atuadores.</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Auto Performance (Chip)</h3>
              <p className="text-zinc-400 leading-relaxed">Remapeamento de ECU (Chip Tuning) para extrair mais potência, torque e melhorar a economia de combustível.</p>
            </div>
          </div>

          <div className="text-center">
            <button onClick={scrollToForm} className="inline-flex items-center justify-center px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold text-lg rounded-lg transition-all">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF & AUTHORITY */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher nossa oficina?</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <div className="flex flex-col items-center justify-center p-8 bg-zinc-950 rounded-2xl border border-zinc-800 text-center">
              <span className="text-5xl font-black text-red-500 mb-2">1000+</span>
              <span className="text-lg font-medium text-zinc-300">Módulos Reparados</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-zinc-950 rounded-2xl border border-zinc-800 text-center">
              <Wrench className="w-12 h-12 text-red-500 mb-4" />
              <span className="text-lg font-medium text-zinc-300">Equipamentos de Última Geração</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 relative">
              <div className="flex text-red-500 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed">
                "Resolveram o problema do meu módulo de ABS que a concessionária disse que precisava ser trocado inteiro. Economizei muito tempo e dinheiro! Recomendo de olhos fechados."
              </p>
              <div className="font-bold text-white">— João P.</div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 relative">
              <div className="flex text-red-500 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed">
                "Fiz o chip de potência na minha caminhonete. O carro virou outro, muito mais torque nas ultrapassagens e resposta rápida no acelerador. O atendimento é nota 10."
              </p>
              <div className="font-bold text-white">— Marcos S.</div>
            </div>
          </div>

          <div className="text-center">
            <button onClick={scrollToForm} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* 4. LEAD CAPTURE FORM */}
      <section id="orcamento" className="py-24 bg-zinc-950 scroll-mt-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 flex flex-col lg:flex-row shadow-2xl">
            
            {/* Left side: Info */}
            <div className="w-full lg:w-2/5 bg-zinc-800 p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Fale com um Especialista Agora</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Preencha o formulário para receber uma avaliação preliminar do seu veículo. Nossa equipe técnica entrará em contato via WhatsApp o mais rápido possível.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-zinc-300" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">Atendimento WhatsApp</p>
                      <p className="font-bold text-white">(XX) XXXXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-zinc-300" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">Horário de Funcionamento</p>
                      <p className="font-bold text-white">Seg - Sex: 8h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="w-full lg:w-3/5 p-10 bg-zinc-900">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Pedido Enviado com Sucesso!</h4>
                  <p className="text-zinc-400">Recebemos suas informações. Um especialista entrará em contato pelo WhatsApp em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Nome Completo *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Digite seu nome"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">WhatsApp / Telefone *</label>
                    <input 
                      type="tel" 
                      required
                      pattern="[0-9\-\+\s\(\)]*"
                      placeholder="(DD) 9XXXX-XXXX"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Marca / Modelo / Ano do Veículo *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: VW Amarok 2.0 2018"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Qual é o problema ou serviço desejado? *</label>
                    <select 
                      required
                      defaultValue=""
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all appearance-none"
                    >
                      <option value="" disabled>Selecione uma opção</option>
                      <option value="reparo-modulo">Reparo de Módulo (ECU)</option>
                      <option value="abs-airbag">Falha em ABS / Airbag / Imobilizador</option>
                      <option value="chip-potencia">Auto Performance (Chip de Potência)</option>
                      <option value="diagnostico">Diagnóstico de Eletrônica Embarcada</option>
                      <option value="outros">Outros / Não tenho certeza</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.2)] mt-4"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Pedido de Orçamento'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER & LOCATION */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16">
        <div className="container mx-auto px-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Map Integration */}
            <div className="h-[350px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 relative">
              <iframe 
                src="https://maps.google.com/maps?q=-22.9444827,-46.5357372&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Douglas Injeção Eletrônica"
                className="absolute inset-0"
              />
            </div>
            
            {/* Address Details */}
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-white mb-8">Nossa Localização</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white mb-1">Endereço</h5>
                    <p className="text-zinc-400 leading-relaxed">
                      [Rua/Avenida, Número]<br />
                      [Bairro, Cidade - Estado]<br />
                      CEP: [XXXXX-XXX]
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white mb-1">Contatos</h5>
                    <p className="text-zinc-400">
                      WhatsApp: [Inserir Número]<br />
                      Fixo: [Inserir Número]
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white mb-1">Horário</h5>
                    <p className="text-zinc-400">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="bg-black py-6 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Douglas Injeção Eletrônica Automotiva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}