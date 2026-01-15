import React, { useState, useEffect } from 'react';
import avatarImage from './avatar.png';
import { 
  Terminal, 
  Download, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Plus, 
  ChevronRight, 
  ChevronDown,
  Cpu,
  Lock,
  Wifi,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

// --- Utility Components ---

const HoverGlitchText = ({ text, className = "", as: Component = "span" }: { text: string, className?: string, as?: any }) => (
  <Component className={`relative inline-block group ${className}`}>
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -ml-[2px] text-cyber-green opacity-0 group-hover:opacity-70 animate-glitch select-none pointer-events-none" aria-hidden="true">{text}</span>
    <span className="absolute top-0 left-0 ml-[2px] text-cyber-purple opacity-0 group-hover:opacity-70 animate-glitch select-none pointer-events-none" style={{ animationDirection: 'reverse' }} aria-hidden="true">{text}</span>
  </Component>
);

const ConstantGlitchText = ({ text, className = "", baseColor="text-gray-500" }: { text: string, className?: string, baseColor?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <span className={`relative z-10 ${baseColor}`}>{text}</span>
    <span className="absolute top-0 left-0 -ml-[2px] text-cyber-green opacity-40 animate-glitch mix-blend-screen select-none pointer-events-none" aria-hidden="true">{text}</span>
    <span className="absolute top-0 left-0 ml-[2px] text-cyber-purple opacity-40 animate-glitch select-none pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '2s' }} aria-hidden="true">{text}</span>
  </span>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-cyber-border bg-[#0a0a0a] mb-2 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-mono text-xs md:text-sm text-cyber-green font-bold flex gap-2 pr-2">
          <span className="opacity-50 shrink-0">&gt;</span> {question}
        </span>
        <ChevronDown size={16} className={`text-cyber-gray shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`px-4 text-gray-400 font-mono text-xs leading-relaxed transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 py-4 border-t border-cyber-border/50' : 'max-h-0 overflow-hidden'}`}>
        {answer}
      </div>
    </div>
  );
};

// --- Components ---

const Header = () => (
  <header className="sticky top-0 z-40 bg-cyber-black/90 backdrop-blur-sm border-b border-cyber-border h-16 md:h-20 px-4 md:px-6 flex items-center justify-between">
    <div className="flex items-center gap-3 md:gap-4">
      {/* Avatar Box */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 border-2 border-cyber-green overflow-hidden group shrink-0">
        <img 
          src={avatarImage}
          alt="Avatar Dylan Digital" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-cyber-green/10 mix-blend-overlay"></div>
      </div>
      
      {/* Title */}
      <div className="flex flex-col justify-center">
        <h1 className="font-display font-bold text-lg md:text-xl tracking-tighter leading-none text-white">
          <HoverGlitchText text="DYLAN DIGITAL" />
        </h1>
        <div className="flex items-center gap-2 mt-0.5 md:mt-1">
          <span className="bg-cyber-green text-black text-[9px] md:text-[10px] font-mono font-bold px-1.5 py-0.5 whitespace-nowrap">
            [ SYSTEM_HACKER ]
          </span>
        </div>
      </div>
    </div>

    <div className="hidden md:flex items-center gap-2 font-mono text-xs text-cyber-green">
      <Terminal size={14} />
      <span className="animate-pulse">SYS_STATUS: ONLINE</span>
    </div>
  </header>
);

const Ticker = () => {
  const items = [
    "USER_MARC vient de générer +75€",
    "⚠️ SYSTEM_ALERT: NOUVEAU MEMBRE REJOINT",
    "💸 USER_SARAH a débloqué le module 3",
    "🚀 REVENUE_STREAM_04 ACTIVÉ",
    "🔒 PROTOCOLE DE SÉCURITÉ: MAXIMAL",
    "USER_ALEX a miné 0.04 BTC"
  ];

  return (
    <div className="border-b border-cyber-border bg-cyber-purple/5 h-8 md:h-10 overflow-hidden flex items-center relative z-10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-4 md:mx-6 font-mono text-[10px] md:text-xs font-bold text-cyber-purple">
            <span className="mr-2">🔥</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative h-auto lg:h-full flex flex-col p-5 md:p-12 lg:p-16 lg:overflow-y-auto custom-scrollbar">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none fixed"></div>

      {/* Access Badge */}
      <div className="inline-flex items-center gap-2 border border-cyber-green/30 bg-cyber-green/5 px-2 md:px-3 py-1 mb-6 md:mb-8 w-fit font-mono text-[10px] md:text-xs text-cyber-green tracking-widest">
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyber-green animate-pulse-fast"></span>
        ACCESS_LEVEL: UNLOCKED
      </div>

      {/* Main Typography - Power Hook */}
      <div className="relative z-10 mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter uppercase text-white mix-blend-screen mb-4 md:mb-6">
          99% DES GENS ÉCHOUENT CAR ILS CRÉENT LA ROUE.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-emerald-400 relative">
             MOI, JE VOUS DONNE LE MOTEUR.
          </span>
        </h2>
        <p className="font-mono text-xs sm:text-sm md:text-base text-gray-400 max-w-xl leading-relaxed border-l-2 border-gray-700 pl-4">
          Accédez aux <span className="text-white font-bold">systèmes automatisés</span> que j'utilise pour générer des revenus quotidiens <span className="text-cyber-purple">sans stock</span>, sans création de produit complexe et sans patron derrière mon dos.
        </p>
      </div>

      {/* Authority Block */}
      <div className="font-mono text-xs md:text-sm border border-cyber-green/50 bg-cyber-green/5 p-4 mb-8 md:mb-12 relative">
        <div className="absolute -top-3 left-4 bg-black px-2 text-cyber-green text-[10px] uppercase tracking-widest border border-cyber-green/50">
          Admin_Message
        </div>
        <p className="text-gray-300 italic">
          "Je ne suis pas un théoricien. Je suis sur le terrain tous les jours. Ce que je vous enseigne, c'est ce qui a payé mes factures ce matin même."
        </p>
        <div className="mt-2 text-right text-[10px] text-cyber-green/70">
          - Dylan Digital
        </div>
      </div>

      {/* Problem Agitation - Why You Are Here */}
      <div className="mb-12">
        <h3 className="font-display font-bold text-lg md:text-xl mb-4 md:mb-6 text-white flex items-center gap-2">
          <AlertTriangle size={20} className="text-cyber-purple" />
          DIAGNOSTIC SYSTÈME 2026
        </h3>
        
        <div className="space-y-4">
          {[
             { problem: "FATIGUE DU SCROLL INFINI", fix: "MÉTHODE LINÉAIRE" },
             { problem: "PEUR DES PROMESSES VIDES", fix: "RÉSULTATS VÉRIFIÉS" },
             { problem: "MANQUE DE TEMPS", fix: "PRODUITS DÉJÀ CRÉÉS (PLR)" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] gap-2 sm:gap-4 items-start sm:items-center font-mono text-xs border-b border-gray-800 pb-3 sm:pb-2">
               <div className="text-red-400 opacity-80 flex items-center gap-2 w-full sm:w-auto">
                 <span className="text-[10px] border border-red-900 bg-red-900/20 px-1 shrink-0">ERROR</span>
                 {item.problem}
               </div>
               <div className="text-gray-600 hidden sm:block">→</div>
               <div className="text-gray-600 sm:hidden rotate-90 ml-4">➜</div>
               <div className="text-cyber-green font-bold flex items-center gap-2 w-full sm:w-auto">
                 <span className="text-[10px] border border-green-900 bg-green-900/20 px-1 text-cyber-green shrink-0">PATCH</span>
                 {item.fix}
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-auto pt-8 border-t border-cyber-border">
         <h3 className="font-display font-bold text-base md:text-lg mb-6 text-gray-400">/// BASE DE CONNAISSANCES (FAQ)</h3>
         <FAQItem 
           question="Est-ce que je peux le faire sans visage ?" 
           answer="Absolument. 80% de mes élèves utilisent des stratégies 'faceless' (sans visage) que je détaille dans le protocole KDM."
         />
         <FAQItem 
           question="Je n'y connais rien au marketing..." 
           answer="C'est justement pour cela que j'ai créé des packs PLR. Le travail difficile (création) est déjà fait pour vous. Vous n'avez qu'à copier-coller le système."
         />
         <FAQItem 
           question="Combien de temps ça prend ?" 
           answer="1 heure par jour suffit pour mettre en place les fondations du système. Une fois lancé, le moteur tourne avec un entretien minimal."
         />
      </div>
    </div>
  );
};

const ProductCardMain = () => {
  return (
    <div className="relative group border border-cyber-purple/30 bg-cyber-dark p-1 transition-all duration-300 hover:border-cyber-purple/60 h-full flex flex-col w-full">
      {/* Neon Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-purple to-purple-800 opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
      
      {/* Card Content */}
      <div className="relative bg-[#0d0d0d] p-5 md:p-8 flex-1 flex flex-col justify-between">
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-purple"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-purple"></div>

        <div>
          <div className="flex justify-between items-start mb-4">
             <div className="bg-cyber-purple/20 border border-cyber-purple/50 px-2 py-1 text-[10px] font-mono text-cyber-purple uppercase tracking-wider">
               Offre Phare
             </div>
             <div className="text-right">
                <span className="block text-gray-400 line-through text-xs md:text-sm">297€</span>
                <span className="block text-white font-bold text-xl md:text-2xl">97€</span>
             </div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4 transform -skew-x-6">
            <HoverGlitchText text="ACCÉLÉRATEUR" /> <span className="block md:inline text-cyber-purple drop-shadow-[0_0_5px_rgba(208,0,255,0.8)]">KDM + PLR</span>
          </h3>

          <p className="font-mono text-xs md:text-sm text-gray-300 mb-6 leading-relaxed border-l-2 border-cyber-purple pl-3">
            Le bouton "ON" de votre business. Je vous donne mes produits les plus rentables. Vous les revendez, vous gardez <span className="text-white font-bold">100% des profits</span>.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
              <CheckCircle2 size={16} className="text-cyber-purple shrink-0" />
              <span>Droit de revente intégral (MRR)</span>
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
              <CheckCircle2 size={16} className="text-cyber-purple shrink-0" />
              <span>Accompagnement personnel 1-to-1</span>
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
              <CheckCircle2 size={16} className="text-cyber-purple shrink-0" />
              <span>Première vente en temps record</span>
            </div>
          </div>
        </div>

        <div>
          <button className="w-full relative group/btn overflow-hidden mb-3 bg-cyber-green h-14 md:h-16 flex items-center justify-center border border-cyber-green hover:bg-cyber-green/90 transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)]">
            <div className="relative flex items-center gap-2">
              <span className="relative inline-block font-display font-black text-lg md:text-xl text-black uppercase tracking-wider">
                <span className="relative z-10">ACTIVER LE SYSTÈME</span>
                {/* 
                   NEW GLITCH EFFECT:
                   Using CSS clip-path animations defined in index.html as 'glitch-slice-1' and 'glitch-slice-2'.
                   High contrast colors (White and Purple) on the Green background.
                */}
                <span className="absolute top-0 left-0 text-white opacity-0 group-hover/btn:opacity-100 animate-glitch-slice-1 select-none pointer-events-none z-20" aria-hidden="true">ACTIVER LE SYSTÈME</span>
                <span className="absolute top-0 left-0 text-cyber-purple opacity-0 group-hover/btn:opacity-100 animate-glitch-slice-2 select-none pointer-events-none z-20" aria-hidden="true">ACTIVER LE SYSTÈME</span>
              </span>
              <Zap size={20} className="md:w-6 md:h-6 text-black fill-current relative z-10" />
            </div>
            
            {/* Scanline Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent translate-y-[-100%] group-hover/btn:translate-y-[100%] transition-transform duration-700 pointer-events-none"></div>
          </button>
          
          <div className="flex justify-center gap-4 text-[9px] md:text-[10px] font-mono text-gray-500 uppercase">
             <span className="flex items-center gap-1"><Lock size={10} /> Paiement Sécurisé</span>
             <span className="flex items-center gap-1"><Wifi size={10} /> Accès Instantané</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCardSmall = () => {
  return (
    <div className="border border-cyber-border bg-[#111] p-5 md:p-6 flex flex-col justify-between hover:border-gray-500 transition-colors duration-300 h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-display font-bold text-white text-base md:text-lg">
             <HoverGlitchText text="LE BLUEPRINT (V1)" />
          </h4>
          <p className="font-mono text-[10px] text-gray-500 uppercase mt-1">La Méthode Complète</p>
        </div>
        <div className="text-right">
          <span className="block font-display font-black text-xl md:text-2xl text-cyber-green">10€</span>
          <span className="font-mono text-[9px] md:text-[10px] text-gray-500 uppercase">PRIX CAFÉ</span>
        </div>
      </div>

      <p className="text-xs text-gray-400 font-mono mb-4 leading-relaxed">
        Le prix d'un café pour éviter 3 ans d'erreurs. Apprenez les bases du marketing digital qui séparent ceux qui s'amusent de ceux qui encaissent.
      </p>

      <ul className="space-y-2 mb-6">
        <li className="flex items-center gap-3 text-xs text-gray-500 font-mono">
          <div className="w-1 h-1 bg-cyber-green"></div>
          Fondations Marketing Solides
        </li>
        <li className="flex items-center gap-3 text-xs text-gray-500 font-mono">
          <div className="w-1 h-1 bg-cyber-green"></div>
          Setup Technique Rapide
        </li>
      </ul>

      <div>
        <button className="w-full py-3 bg-[#1a1a1a] border border-cyber-border text-xs font-bold font-display uppercase text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-200 mb-2">
          ACHETER PACK (10€)
        </button>
        <div className="text-center text-[9px] font-mono text-gray-600 uppercase">
           Garantie "No-Bullshit"
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="border-t border-cyber-border bg-black py-8 md:py-10 px-4 md:px-12">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="font-display font-bold text-xl mb-4 tracking-tight">DYLAN DIGITAL_</h4>
        <p className="font-mono text-xs text-gray-500 max-w-xs leading-relaxed">
          Le système est conçu pour vous garder pauvre. Nous avons les clés pour le réécrire.
        </p>
        <p className="font-mono text-[10px] text-gray-600 mt-6">© 2026 DYLAN DIGITAL CORP.</p>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-end gap-4 md:gap-12">
        {['COMMUNAUTÉ_VIP', 'TIKTOK_FEED', 'LEGAL_TERMS'].map((link) => (
          <a key={link} href="#" className="group flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-cyber-green transition-colors">
            <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyber-green" />
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

// --- Main Layout ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-[1400px] mx-auto border-x border-cyber-border bg-black shadow-2xl">
      <Header />
      <Ticker />
      
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0">
        {/* Left Column (Hero & Info) */}
        <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-cyber-border relative bg-[#050505]">
           <HeroSection />
        </div>

        {/* Right Column (Offers) */}
        <div className="lg:col-span-5 flex flex-col bg-[#080808]">
          {/* Main Offer Top */}
          <div className="flex-none lg:flex-[3] p-4 md:p-8 border-b border-cyber-border flex flex-col justify-center relative overflow-hidden">
             {/* Background Icon */}
             <Cpu className="absolute top-4 right-4 text-cyber-gray opacity-20 rotate-12" size={120} />
             <ProductCardMain />
          </div>

          {/* Secondary Offer Bottom */}
          <div className="flex-none lg:flex-[2] p-4 md:p-8 bg-[#050505]">
            <ProductCardSmall />
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Decorative Fixed Elements */}
      <div className="fixed bottom-6 right-6 hidden xl:block z-40 mix-blend-exclusion">
        <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-white/50">
           <div className="flex items-center gap-2">
             <Wifi size={12} /> NET_SPEED: 840 MBPS
           </div>
           <div className="flex items-center gap-2">
             <Lock size={12} /> ENCRYPTION: AES-256
           </div>
        </div>
      </div>
    </div>
  );
}