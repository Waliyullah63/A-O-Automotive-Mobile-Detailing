import { motion } from "motion/react";
import { 
  Car, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Instagram, 
  Phone, 
  ChevronRight,
  Menu,
  X,
  Droplets,
  Sparkles,
  Zap,
  Gem
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const REAL_IMAGES = [
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop", // Interior Detailing Brush
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop", // Luxury Dashboard
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop", // Green AMG GT
  "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop", // Vacuuming Interior
  "https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=2071&auto=format&fit=crop", // Luxury Leather Seats
  "https://images.unsplash.com/photo-1552933529-e359b24772ff?q=80&w=2070&auto=format&fit=crop", // Exterior Polishing
  "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=2070&auto=format&fit=crop", // Interior Cleaning Process
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop", // Steering Wheel Detail
  "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop", // Ferrari F8 Tributo
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop", // Luxury Car by Ocean
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-rich-black/90 backdrop-blur-lg py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-display text-3xl tracking-tighter text-gold">A&O</span>
          <span className="hidden sm:inline font-sans font-bold text-xs tracking-[0.2em] uppercase pt-1">Automotive</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-gold transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-gold hover:bg-gold-dark text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 uppercase tracking-wider">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-rich-black border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium hover:text-gold transition-colors uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-gold text-black px-6 py-3 rounded-full text-center font-bold uppercase tracking-wider"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={REAL_IMAGES[2]} 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover opacity-50 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/40 to-rich-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold tracking-widest uppercase">5.0 Rated — 52 Reviews</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.9] tracking-tighter">
            WE COME TO YOU.<br />
            <span className="text-gold-gradient">WE MAKE IT SHINE.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Premium mobile detailing for the cars that deserve nothing less. Serving Monterey County & South Bay's finest vehicles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-black px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(201,168,76,0.3)]">
              Book Now
            </a>
            <a href="#services" className="w-full sm:w-auto border border-white/30 hover:border-gold hover:text-gold px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all">
              View Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: <MapPin className="text-gold" size={32} />,
      title: "We Come To You",
      description: "Fully mobile setup with our own water and power. Home or office, we handle it all."
    },
    {
      icon: <Gem className="text-gold" size={32} />,
      title: "Luxury Specialists",
      description: "Experienced with Ferrari, Lamborghini, AMG, and more. We know high-end finishes."
    },
    {
      icon: <Sparkles className="text-gold" size={32} />,
      title: "Obsessive Detail",
      description: "We don't just wash; we restore. Every crack, crevice, and surface is perfected."
    },
    {
      icon: <Clock className="text-gold" size={32} />,
      title: "Same-Day Service",
      description: "Fast response times and flexible scheduling to fit your busy lifestyle."
    }
  ];

  return (
    <section id="why-us" className="py-24 px-6 bg-rich-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src={REAL_IMAGES[0]} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl mb-4 tracking-tighter">WHY CHOOSE <span className="text-gold">A&O</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl transition-all hover:border-gold/50"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Exterior Wash & Detail",
      price: "From $150",
      description: "Hand wash, wheel deep clean, tire shine, and spray sealant protection.",
      icon: <Droplets size={24} />
    },
    {
      title: "Full Interior Detail",
      price: "From $200",
      description: "Deep vacuum, steam cleaning, leather conditioning, and odor removal.",
      icon: <Sparkles size={24} />
    },
    {
      title: "Paint Decontamination",
      price: "From $300",
      description: "Clay bar treatment and iron removal to make your paint smooth as glass.",
      icon: <Zap size={24} />
    },
    {
      title: "Ceramic Coating Prep",
      price: "From $500",
      description: "Multi-stage paint correction and surface prep for long-term protection.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Luxury & Exotic Package",
      price: "Custom Quote",
      description: "The ultimate white-glove service for high-value collectors and enthusiasts.",
      icon: <Gem size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src={REAL_IMAGES[4]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-7xl mb-4 tracking-tighter">OUR <span className="text-gold">SERVICES</span></h2>
            <p className="text-white/60 text-lg font-light">Tailored detailing packages designed to restore and protect your investment.</p>
          </div>
          <a href="#contact" className="text-gold font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
            Book a Service <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-rich-black border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-gold/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-gold">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">{service.title}</h3>
              <div className="text-gold font-bold text-lg mb-4">{service.price}</div>
              <p className="text-white/50 mb-8 text-sm leading-relaxed">{service.description}</p>
              <button className="w-full py-3 rounded-xl border border-white/20 group-hover:bg-gold group-hover:text-black group-hover:border-gold font-bold uppercase tracking-widest text-xs transition-all">
                Book This Service
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 overflow-hidden bg-rich-black relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <h2 className="font-display text-5xl md:text-7xl tracking-tighter">THE <span className="text-gold">A&O</span> DIFFERENCE</h2>
      </div>
      
      <div className="flex gap-4 overflow-x-auto px-6 pb-8 no-scrollbar relative z-10">
        {REAL_IMAGES.map((img, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[500px] h-[400px] rounded-3xl overflow-hidden relative group border border-white/10">
            <img 
              src={img} 
              alt={`Gallery ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <span className="text-gold font-bold uppercase tracking-widest">A&O Detail #{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "April Z", car: "Ferrari F8", text: "Arrived on time, came fully prepared. My Ferrari looks better than the day I bought it." },
    { name: "Mateo Gallaga", car: "AMG GT", text: "Came to my house fully mobile, flawless execution. The attention to detail is unmatched." },
    { name: "Enayatullah Hakimi", car: "C8 Z06", text: "Attention to detail was unreal. They treated my Corvette like it was their own." },
    { name: "Kenny Tran", car: "Lamborghini Gallardo", text: "Came on time, kept me updated throughout the process. Professional and skilled." },
    { name: "Victor Martinez", car: "Luxury SUV", text: "Best I've seen around. I've tried many detailers but A&O is on another level." },
    { name: "Jessica Hernandez", car: "Daily Driver", text: "Attention to detail and cleanliness 100/10. Highly recommend for any car." }
  ];

  return (
    <section id="reviews" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src={REAL_IMAGES[6]} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center text-gold mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
          </div>
          <h2 className="font-display text-5xl md:text-7xl mb-4 tracking-tighter">52 REVIEWS. <span className="text-gold">5.0 STARS.</span></h2>
          <p className="text-white/50 uppercase tracking-[0.3em] text-xs font-bold">Verified Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-rich-black p-8 rounded-3xl border border-white/5 flex flex-col justify-between"
            >
              <p className="text-white/80 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="font-bold text-sm uppercase tracking-wider">{review.name}</div>
                  <div className="text-gold text-xs font-medium uppercase tracking-tighter">{review.car}</div>
                </div>
                <CheckCircle2 className="text-gold/50" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Book Online", desc: "Select your package and pick a time that works for you." },
    { number: "02", title: "We Come To You", desc: "Our fully equipped mobile unit arrives at your location." },
    { number: "03", title: "Drive Away Spotless", desc: "Enjoy your showroom-ready vehicle without leaving home." }
  ];

  return (
    <section className="py-24 px-6 bg-rich-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="font-display text-8xl text-white/5 absolute -top-10 -left-4 select-none">{step.number}</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter flex items-center gap-4">
                  <span className="text-gold">{step.number}.</span> {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  return (
    <section className="py-12 bg-gold text-black overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee items-center gap-12">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 font-display text-2xl md:text-3xl tracking-tighter uppercase">
            <MapPin size={24} /> Serving Monterey County & South Bay, CA
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={REAL_IMAGES[9]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-6xl md:text-8xl mb-6 tracking-tighter leading-none">
          READY TO MAKE YOUR CAR <br />
          <span className="text-gold">LOOK BRAND NEW?</span>
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-light">
          Don't settle for average. Give your vehicle the A&O treatment it deserves.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            className="group bg-gold hover:bg-gold-dark text-black px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_0_50px_rgba(201,168,76,0.4)] flex items-center gap-4"
          >
            Book Your Detail Now
            <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </a>
          
          <div className="flex flex-wrap justify-center gap-8 text-white/70">
            <a href="tel:1234567890" className="flex items-center gap-2 hover:text-gold transition-colors font-bold uppercase tracking-widest text-sm">
              <Phone size={18} className="text-gold" /> (831) 555-0123
            </a>
            <a href="https://instagram.com" className="flex items-center gap-2 hover:text-gold transition-colors font-bold uppercase tracking-widest text-sm">
              <Instagram size={18} className="text-gold" /> @ao_detailing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-rich-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-display text-4xl tracking-tighter text-gold">A&O</span>
            <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase pt-1">Automotive</span>
          </div>
          <p className="text-white/50 max-w-sm mb-8 font-light">
            Monterey and South Bay's premier mobile detailing service. We bring the showroom finish to your driveway.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
              <Car size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
            <li><a href="#why-us" className="hover:text-gold transition-colors">Why Us</a></li>
            <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Service Area</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li>Monterey, CA</li>
            <li>Carmel-By-The-Sea</li>
            <li>Pebble Beach</li>
            <li>South Bay / San Jose</li>
            <li>Salinas & Surrounding</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest font-bold">
        <p>© 2024 A&O Automotive Mobile Detailing. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Gallery />
        <Reviews />
        <HowItWorks />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
