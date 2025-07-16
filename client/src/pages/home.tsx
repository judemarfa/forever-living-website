import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  Shield, 
  Droplets, 
  RefreshCw, 
  Fish, 
  Brain, 
  ShieldCheck, 
  Award, 
  Users, 
  Leaf, 
  Mail, 
  Phone, 
  Clock, 
  Star, 
  ExternalLink,
  Menu,
  X,
  TrendingUp,
  Truck,
  Headphones,
  Facebook,
  Instagram,
  Linkedin,
  Play
} from "lucide-react";
import qrCodeImage from "@/assets/qr-code.png";
import joinFamilyImage from "@/assets/join-family.png";
import antonioMarfaImage from "@/assets/antonio-marfa-professional.png";
import applePillSupplements from "@assets/applePillSupplements_1752674835890.png";
// Using public directory for better asset serving with cache busting
const healthRegenerationLogo = "/health-logo.png?v=" + Date.now();

// Fallback SVG version if image doesn't load
const LogoSVG = () => (
  <svg viewBox="0 0 100 100" className="hexagon-image">
    <defs>
      <clipPath id="hexagon-clip">
        <polygon points="25,0 75,0 100,50 75,100 25,100 0,50" />
      </clipPath>
    </defs>
    <rect width="100" height="100" fill="#1E5631" clipPath="url(#hexagon-clip)" />
    <circle cx="50" cy="20" r="8" fill="#FF6B6B" />
    <text x="50" y="32" fontSize="6" fill="white" textAnchor="middle">BRAIN</text>
    <circle cx="25" cy="40" r="6" fill="#4ECDC4" />
    <text x="25" y="50" fontSize="4" fill="white" textAnchor="middle">LUNGS</text>
    <circle cx="75" cy="40" r="6" fill="#FFE66D" />
    <text x="75" y="50" fontSize="4" fill="white" textAnchor="middle">LIVER</text>
    <circle cx="25" cy="70" r="6" fill="#FF6B6B" />
    <text x="25" y="80" fontSize="4" fill="white" textAnchor="middle">BLOOD</text>
    <circle cx="75" cy="70" r="6" fill="#4ECDC4" />
    <text x="75" y="80" fontSize="4" fill="white" textAnchor="middle">SKIN</text>
    <circle cx="50" cy="85" r="6" fill="#FFE66D" />
    <text x="50" y="95" fontSize="4" fill="white" textAnchor="middle">BONES</text>
  </svg>
);
import recognitionBadge from "@/assets/recognition-badge.png";
import foreverOpportunityImage from "@/assets/forever-opportunity.png";
import businessBenefitsImage from "@/assets/business-benefits.png";
import healthcareDividedImage from "@/assets/healthcare-divided.png";
import todayTomorrowImage from "@/assets/today-tomorrow.png";
import nutritionSuperhighwayImage from "@/assets/nutrition-superhighway.png";
import worthMultibillionImage from "@/assets/worth-multibillion.png";
import youtubeChannelImage from "@assets/image_1752314839822.png";

export default function Home() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    {
      src: healthcareDividedImage,
      alt: "Healthcare Industry - Sickness vs Wellness Comparison",
      title: "Healthcare Industry Analysis"
    },
    {
      src: todayTomorrowImage,
      alt: "Today vs Tomorrow - Cellular Regeneration",
      title: "Cellular Regeneration Process"
    },
    {
      src: nutritionSuperhighwayImage,
      alt: "Nutrition Superhighway - Body Systems Timeline",
      title: "Nutrition Superhighway"
    },
    {
      src: worthMultibillionImage,
      alt: "Nutritional Supplements Worth Multi-Billion Globally",
      title: "Global Supplement Market"
    }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 8000); // Change slide every 8 seconds
    
    return () => clearInterval(timer);
  }, [carouselImages.length]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your message!",
      description: "We will get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <img 
                  src={healthRegenerationLogo} 
                  alt="Health Regeneration Timeline" 
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    // Fallback to SVG if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden">
                  <LogoSVG />
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-forest transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('presentation-image')} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-forest transition-colors">
                  About
                </button>
                <button onClick={() => window.open('https://thealoeveraco.shop/kyrhHmnl', '_blank')} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-forest transition-colors">
                  Drinks
                </button>
                <button onClick={() => window.open('https://thealoeveraco.shop/uUbSDBAr', '_blank')} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-forest transition-colors">
                  Nutrition
                </button>
                <button onClick={() => window.open('https://thealoeveraco.shop/stxyuA54', '_blank')} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-forest transition-colors">
                  ImmuneHealth
                </button>
                <button onClick={() => scrollToSection('contact')} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-forest transition-colors">
                  Contact
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-forest"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-forest">
                Home
              </button>
              <button onClick={() => scrollToSection('presentation-image')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-forest">
                About
              </button>
              <button onClick={() => window.open('https://thealoeveraco.shop/kyrhHmnl', '_blank')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-forest">
                Drinks
              </button>
              <button onClick={() => window.open('https://thealoeveraco.shop/uUbSDBAr', '_blank')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-forest">
                Nutrition
              </button>
              <button onClick={() => window.open('https://thealoeveraco.shop/stxyuA54', '_blank')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-forest">
                ImmuneHealth
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-forest">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
            Health is the <span className="text-gold">First</span> Wealth
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light animate-fadeInUp">
            "A wise man should consider that health is the greatest of human blessings" - Hippocrates
          </p>
          {/* Call to Action */}
          <div className="mb-8 animate-fadeInUp">
            <div className="bg-coral/20 backdrop-blur-sm border border-coral/30 rounded-xl p-4 mb-6 animate-pulse">
              <p className="text-white text-lg font-semibold mb-2">🔥 15% discount on all orders</p>
              <p className="text-cream text-sm">Get your premium wellness products now - Click the button below!</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center animate-fadeInUp">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button 
                onClick={() => window.open('https://thealoeveraco.shop/p9UXGNcC', '_blank')}
                className="relative bg-gold hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-gold/50 group animate-glow animate-bounce-subtle"
              >
                <span className="relative z-10 flex items-center">
                  Best Seller
                  <Star className="h-5 w-5 ml-2 animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700 animate-shimmer" />
              </Button>
              
              {/* QR Code */}
              <div className="flex flex-col items-center animate-bounce-subtle">
                <div className="relative">
                  <div 
                    onClick={() => window.open('https://thealoeveraco.shop/p9UXGNcC', '_blank')}
                    className="bg-white p-2 rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group animate-glow"
                  >
                    <img 
                      src={qrCodeImage} 
                      alt="QR Code to Best Seller Products" 
                      className="w-16 h-16 sm:w-20 sm:h-20" 
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-coral text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    NEW
                  </div>
                </div>
                <p className="text-cream text-xs mt-2 text-center font-semibold">📱 Scan for quick access</p>
              </div>

              {/* Join Our Forever Family */}
              <div className="flex flex-col items-center animate-bounce-subtle">
                <div 
                  onClick={() => window.open('https://thealoeveraco.shop/CDUSJPbt', '_blank')}
                  className="bg-white p-2 rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group animate-glow"
                >
                  <img 
                    src={joinFamilyImage} 
                    alt="Join Our Forever Family" 
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain" 
                  />
                </div>
                <p className="text-cream text-xs mt-2 text-center font-semibold">👥 Join Our Family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              {/* Carousel Gallery */}
              <div className="relative mb-8 bg-gradient-to-br from-sage/20 to-gold/20 p-4 rounded-2xl shadow-xl border-2 border-gold/30">
                <div className="relative overflow-hidden rounded-xl">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-64 sm:h-80 object-contain rounded-xl shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-gold shadow-lg scale-125' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                  

                </div>
              </div>
              
              <div id="presentation-image" className="relative mb-8">
                <img 
                  src={antonioMarfaImage} 
                  alt="Antonio Marfa - Professional wellness consultant presenting at Forever Living Products event" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                />
                
                {/* Recognition badge overlay */}
                <div className="absolute bottom-12 left-4">
                  <img 
                    src={recognitionBadge} 
                    alt="Recognized Manager - Antonio Marfa" 
                    className="w-60 h-auto opacity-95 shadow-lg rounded-lg"
                  />
                </div>
              </div>
              
              {/* Content below presentation image */}
              <div className="bg-gradient-to-br from-gold/20 to-coral/20 p-8 rounded-2xl shadow-xl border-2 border-gold/30">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif bg-gradient-to-r from-forest via-sage to-gold bg-clip-text text-transparent">
                  Your Trusted Wellness Partner
                </h2>
                
                <p className="text-xl mb-6 leading-relaxed font-semibold">
                  As a <span className="text-coral font-bold text-2xl">manager-ranked independent agent</span> with Forever Living Products, 
                  I've dedicated my career to helping others achieve <span className="text-forest font-bold">optimal wellness</span> through 
                  nature's most powerful ingredients and also <span className="text-gold font-bold text-xl">build a business</span>.
                </p>
                
                <p className="text-lg leading-relaxed font-semibold text-sage mb-4">
                  Have the <span className="text-coral font-bold text-xl">freedom</span> to make your own schedule, 
                  work from <span className="text-forest font-bold">anywhere</span> and achieve what you <span className="text-gold font-bold text-xl">desire</span>.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <img 
                src={foreverOpportunityImage} 
                alt="The Forever Opportunity - Build Your Business" 
                className="rounded-2xl shadow-2xl w-full h-auto mb-8" 
              />
              
              <img 
                src={businessBenefitsImage} 
                alt="Business Benefits - Build, Earn, Qualify, Training, Discounts, Global Family" 
                className="rounded-2xl shadow-2xl w-full h-auto mb-8" 
              />
              
              <div className="flex justify-center mb-8">
                <Button 
                  onClick={() => window.open('https://thealoeveraco.shop/51mqp', '_blank')}
                  className="bg-gradient-to-r from-forest via-sage to-gold hover:from-gold hover:to-coral text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
                >
                  🚀 Start Your Journey Today!
                  <ExternalLink className="ml-3 h-6 w-6" />
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div 
                  className="relative group cursor-pointer" 
                  onClick={() => window.open('https://www.youtube.com/channel/UCY1yrwk__0cJN6E5qHGGxdA', '_blank')}
                >
                  <img 
                    src={youtubeChannelImage} 
                    alt="JudeHealthBiz Talk YouTube Channel" 
                    className="rounded-2xl shadow-2xl w-full max-w-4xl h-auto transform hover:scale-105 transition-all duration-300" 
                  />
                  
                  {/* Clickable indicator overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-2xl transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <Play className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                  
                  {/* Informational text below the image */}
                  <div className="text-center mt-4">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      🎥 Watch Educational Health & Wellness Videos
                    </p>
                    <p className="text-sm text-gray-600">
                      Click the image above to visit our YouTube channel for valuable health tips and product insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Wellness Guide Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <img 
                src={applePillSupplements} 
                alt="Natural wellness supplements - apple and pills representing health transformation" 
                className="max-w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ maxHeight: '400px' }}
              />
            </div>
            <h1 className="text-4xl font-bold text-green-700 mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl">🌿</span>
              Natural Wellness Guide
            </h1>
            <p className="text-xl text-gray-700 italic">
              Created and curated by judemarfa — Wellness Advocate
            </p>
          </div>

          <div className="bg-green-100 border-l-6 border-green-500 p-6 mb-8 rounded-lg">
            <p className="text-green-800 italic text-lg">
              "An apple a day has evolved into so many wellness supplements — what we eat today can positively impact our wellness tomorrow."
            </p>
          </div>

          <div className="space-y-12">
            {/* Section 1: Gut Health & Detox */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Note:</strong> The following section contains suggested food-based remedies. These are not medications and should not replace professional medical advice or treatment.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span className="text-xl">🌱</span>
                  Section 1: Gut Health & Detox
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <caption className="text-lg font-bold text-gray-800 mb-3 bg-green-50 p-2 rounded">
                      Gut Health & Detox Remedies
                    </caption>
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Supplement / Ingredient</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Suggested Use</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Benefit / Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Aloe Vera Gel Drink</td>
                        <td className="border border-gray-300 p-3">4–6 oz daily</td>
                        <td className="border border-gray-300 p-3">Supports digestion, detox, and absorption</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Green Food Tablets</td>
                        <td className="border border-gray-300 p-3">3–6 tablets daily</td>
                        <td className="border border-gray-300 p-3">Alkalizes gut, nourishes microbiome</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Garlic-Thyme Softgels</td>
                        <td className="border border-gray-300 p-3">4 softgels daily</td>
                        <td className="border border-gray-300 p-3">Natural antimicrobial for gut flora</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Probiotic-rich foods</td>
                        <td className="border border-gray-300 p-3">Daily</td>
                        <td className="border border-gray-300 p-3">Restores beneficial bacteria and enzymes</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Hydration (Water)</td>
                        <td className="border border-gray-300 p-3">8–10 glasses daily</td>
                        <td className="border border-gray-300 p-3">Flushes toxins and enhances absorption</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Disclaimer:</strong> These supplements and remedies are intended as food-based support only and have not been evaluated by the U.S. Food and Drug Administration (FDA). 
                    This guide is not intended to diagnose, treat, cure, or prevent any disease. 
                    If you are experiencing health concerns, please consult a licensed medical doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Cardiovascular Support */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Note:</strong> The following section contains suggested food-based remedies. These are not medications and should not replace professional medical advice or treatment.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <span className="text-xl">❤️</span>
                  Section 2: Cardiovascular Support
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <caption className="text-lg font-bold text-gray-800 mb-3 bg-red-50 p-2 rounded">
                      Heart & Circulation Support
                    </caption>
                    <thead>
                      <tr className="bg-red-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Supplement / Ingredient</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Suggested Use</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Benefit / Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Arctic Sea (Omega-3)</td>
                        <td className="border border-gray-300 p-3">6 softgels daily</td>
                        <td className="border border-gray-300 p-3">Improves circulation and reduces inflammation</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Garlic-Thyme Softgels</td>
                        <td className="border border-gray-300 p-3">4 softgels daily</td>
                        <td className="border border-gray-300 p-3">Natural blood conditioner and antioxidant</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Forever ARGI+ Drink</td>
                        <td className="border border-gray-300 p-3">1 sachet daily</td>
                        <td className="border border-gray-300 p-3">Supports vasodilation via nitric oxide production</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Disclaimer:</strong> These supplements and remedies are intended as food-based support only and have not been evaluated by the U.S. Food and Drug Administration (FDA). 
                    This guide is not intended to diagnose, treat, cure, or prevent any disease. 
                    If you are experiencing health concerns, please consult a licensed medical doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Immune Support */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Note:</strong> The following section contains suggested food-based remedies. These are not medications and should not replace professional medical advice or treatment.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="text-xl">🛡️</span>
                  Section 3: Immune Support
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <caption className="text-lg font-bold text-gray-800 mb-3 bg-blue-50 p-2 rounded">
                      Immune Boosting Remedies
                    </caption>
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Supplement / Ingredient</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Suggested Use</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Benefit / Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Bee Propolis Tablets</td>
                        <td className="border border-gray-300 p-3">2 daily</td>
                        <td className="border border-gray-300 p-3">Natural antibiotic and immune regulator</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Garlic-Thyme Softgels</td>
                        <td className="border border-gray-300 p-3">4 softgels daily</td>
                        <td className="border border-gray-300 p-3">Antiviral and antimicrobial properties</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Vitamin C (Buffered)</td>
                        <td className="border border-gray-300 p-3">3 tablets daily</td>
                        <td className="border border-gray-300 p-3">Cellular defense and antioxidant action</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Royal Jelly Tablets</td>
                        <td className="border border-gray-300 p-3">2 tablets daily</td>
                        <td className="border border-gray-300 p-3">Enzyme-rich, supports immunity</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Green Food Tablets</td>
                        <td className="border border-gray-300 p-3">6 tablets daily</td>
                        <td className="border border-gray-300 p-3">Alkalizing support and phytonutrients</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Disclaimer:</strong> These supplements and remedies are intended as food-based support only and have not been evaluated by the U.S. Food and Drug Administration (FDA). 
                    This guide is not intended to diagnose, treat, cure, or prevent any disease. 
                    If you are experiencing health concerns, please consult a licensed medical doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Joint, Muscle & Pain Relief */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Note:</strong> The following section contains suggested food-based remedies. These are not medications and should not replace professional medical advice or treatment.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                  <span className="text-xl">🦴</span>
                  Section 4: Joint, Muscle & Pain Relief
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <caption className="text-lg font-bold text-gray-800 mb-3 bg-orange-50 p-2 rounded">
                      Pain Relief & Mobility Support
                    </caption>
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Supplement / Ingredient</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Suggested Use</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Benefit / Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">MSM Tablets</td>
                        <td className="border border-gray-300 p-3">2 tablets twice daily</td>
                        <td className="border border-gray-300 p-3">Supports joints and connective tissue</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Forever Freedom Drink</td>
                        <td className="border border-gray-300 p-3">4 oz daily</td>
                        <td className="border border-gray-300 p-3">Glucosamine, Chondroitin, MSM blend</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Aloe Vera Gel</td>
                        <td className="border border-gray-300 p-3">6 oz daily</td>
                        <td className="border border-gray-300 p-3">Reduces inflammation and enhances absorption</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Nature-Min Tablets</td>
                        <td className="border border-gray-300 p-3">6 tablets daily</td>
                        <td className="border border-gray-300 p-3">Provides minerals for bones and muscles</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Vitamin C (Buffered)</td>
                        <td className="border border-gray-300 p-3">3 tablets daily</td>
                        <td className="border border-gray-300 p-3">Collagen support and antioxidant action</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Disclaimer:</strong> These supplements and remedies are intended as food-based support only and have not been evaluated by the U.S. Food and Drug Administration (FDA). 
                    This guide is not intended to diagnose, treat, cure, or prevent any disease. 
                    If you are experiencing health concerns, please consult a licensed medical doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Respiratory & Allergy Support */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Note:</strong> The following section contains suggested food-based remedies. These are not medications and should not replace professional medical advice or treatment.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                  <span className="text-xl">🫁</span>
                  Section 5: Respiratory & Allergy Support
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <caption className="text-lg font-bold text-gray-800 mb-3 bg-teal-50 p-2 rounded">
                      Breath & Sinus Relief
                    </caption>
                    <thead>
                      <tr className="bg-teal-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Supplement / Ingredient</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Suggested Use</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Benefit / Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Aloe Vera Gel Drink</td>
                        <td className="border border-gray-300 p-3">4–6 oz daily</td>
                        <td className="border border-gray-300 p-3">Soothes mucous membranes and clears airways</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Bee Propolis Tablets</td>
                        <td className="border border-gray-300 p-3">2 daily</td>
                        <td className="border border-gray-300 p-3">Natural antibiotic and immune modulator</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Vitamin C (Buffered)</td>
                        <td className="border border-gray-300 p-3">3 tablets daily</td>
                        <td className="border border-gray-300 p-3">Antihistamine action and tissue repair</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Garlic-Thyme Softgels</td>
                        <td className="border border-gray-300 p-3">4 softgels daily</td>
                        <td className="border border-gray-300 p-3">Antimicrobial and breathing aid</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Forever Breathe Oil</td>
                        <td className="border border-gray-300 p-3">Diffuse or topical</td>
                        <td className="border border-gray-300 p-3">Opens airways and refreshes breathing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Disclaimer:</strong> These supplements and remedies are intended as food-based support only and have not been evaluated by the U.S. Food and Drug Administration (FDA). 
                    This guide is not intended to diagnose, treat, cure, or prevent any disease. 
                    If you are experiencing health concerns, please consult a licensed medical doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Mood, Sleep & Energy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Note:</strong> The following section contains suggested food-based remedies. These are not medications and should not replace professional medical advice or treatment.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                  <span className="text-xl">😴</span>
                  Section 6: Mood, Sleep & Energy
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <caption className="text-lg font-bold text-gray-800 mb-3 bg-purple-50 p-2 rounded">
                      Emotional & Physical Vitality
                    </caption>
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Supplement / Ingredient</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Suggested Use</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Benefit / Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Bee Pollen Tablets</td>
                        <td className="border border-gray-300 p-3">2–3 daily</td>
                        <td className="border border-gray-300 p-3">Boosts energy and alertness</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Gin-Chia Tablets</td>
                        <td className="border border-gray-300 p-3">3 daily</td>
                        <td className="border border-gray-300 p-3">Stamina and adrenal balance</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Royal Jelly Tablets</td>
                        <td className="border border-gray-300 p-3">2 daily</td>
                        <td className="border border-gray-300 p-3">Nourishes brain and emotional balance</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Forever Calcium</td>
                        <td className="border border-gray-300 p-3">6 tablets daily</td>
                        <td className="border border-gray-300 p-3">Supports restful sleep and nerve relaxation</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Aloe Vera Gel Drink</td>
                        <td className="border border-gray-300 p-3">4 oz nightly</td>
                        <td className="border border-gray-300 p-3">Calms digestion and aids rest</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Breathing & Stretching</td>
                        <td className="border border-gray-300 p-3">10 min daily</td>
                        <td className="border border-gray-300 p-3">Reduces cortisol and improves clarity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Disclaimer:</strong> These supplements and remedies are intended as food-based support only and have not been evaluated by the U.S. Food and Drug Administration (FDA). 
                    This guide is not intended to diagnose, treat, cure, or prevent any disease. 
                    If you are experiencing health concerns, please consult a licensed medical doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: Longevity & Preventive Wellness */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Note:</strong> The following section contains suggested food-based remedies. These are not medications and should not replace professional medical advice or treatment.
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
                  <span className="text-xl">🌟</span>
                  Section 7: Longevity & Preventive Wellness
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <caption className="text-lg font-bold text-gray-800 mb-3 bg-yellow-50 p-2 rounded">
                      Long-Term Vitality Support
                    </caption>
                    <thead>
                      <tr className="bg-yellow-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Supplement / Ingredient</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Suggested Use</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Benefit / Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Nature-Min Tablets</td>
                        <td className="border border-gray-300 p-3">6 tablets daily</td>
                        <td className="border border-gray-300 p-3">Broad mineral support for bones, cells, and organs</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Vitamin C (Buffered)</td>
                        <td className="border border-gray-300 p-3">3 tablets daily</td>
                        <td className="border border-gray-300 p-3">Antioxidant for immune and collagen repair</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Royal Jelly Tablets</td>
                        <td className="border border-gray-300 p-3">2 tablets daily</td>
                        <td className="border border-gray-300 p-3">Vital enzymes and cellular longevity</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Forever B12 Plus</td>
                        <td className="border border-gray-300 p-3">2 tablets daily</td>
                        <td className="border border-gray-300 p-3">Supports energy and red blood cell formation</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Gin-Chia Tablets</td>
                        <td className="border border-gray-300 p-3">3 tablets daily</td>
                        <td className="border border-gray-300 p-3">Adaptogen for stress and hormonal balance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Disclaimer:</strong> These supplements and remedies are intended as food-based support only and have not been evaluated by the U.S. Food and Drug Administration (FDA). 
                    This guide is not intended to diagnose, treat, cure, or prevent any disease. 
                    If you are experiencing health concerns, please consult a licensed medical doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Inspirational Message */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 border-l-6 border-green-500 p-8 rounded-lg">
              <div className="bg-gray-50 p-4 border-b rounded-t-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Note:</strong> The following message is shared for inspiration only and does not contain medical or financial advice.
                </p>
              </div>
              <div className="p-4">
                <p className="text-green-800 italic text-lg leading-relaxed">
                  "As you enjoy better sleep, breath, and mobility — know this: these products offer more than personal relief. 
                  They're a gateway to helping others rediscover wellness — physically and financially. 
                  Daily use becomes daily opportunity. 
                  Share your story. Share your guide. Watch your impact multiply."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - visible on Contact tab */}
      <footer id="contact" className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-green-400 mr-4" />
              <span className="text-white text-2xl font-bold">
                judemarfa@gmail.com
              </span>
            </div>
            <p className="text-green-400 text-lg font-semibold">
              Ready to start your wellness journey? Contact us today!
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

