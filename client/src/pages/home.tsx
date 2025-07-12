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
  Linkedin
} from "lucide-react";
import qrCodeImage from "@/assets/qr-code.png";
import joinFamilyImage from "@/assets/join-family.png";
import antonioMarfaImage from "@/assets/antonio-marfa-professional.png";
import firstHealthLogo from "@/assets/1st-health-logo.svg";
import recognitionBadge from "@/assets/recognition-badge.png";
import foreverOpportunityImage from "@/assets/forever-opportunity.png";
import businessBenefitsImage from "@/assets/business-benefits.png";
import healthcareDividedImage from "@/assets/healthcare-divided.png";
import todayTomorrowImage from "@/assets/today-tomorrow.png";
import nutritionSuperhighwayImage from "@/assets/nutrition-superhighway.png";
import worthMultibillionImage from "@/assets/worth-multibillion.png";

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
              <img 
                src={firstHealthLogo} 
                alt="1st Health Logo" 
                className="h-10 w-auto"
              />
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
              

              
              <Button 
                onClick={() => window.open('https://thealoeveraco.shop/CDUSJPbt', '_blank')}
                className="bg-gradient-to-r from-forest via-sage to-gold hover:from-gold hover:to-coral text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
              >
                🚀 Start Your Journey Today!
                <ExternalLink className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-6 font-serif">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to start your wellness journey with Forever Living Products.
            </p>
          </div>
          
          <div className="max-w-md mx-auto text-center">
            <Card className="bg-gradient-to-br from-sage/10 to-forest/10 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Mail className="h-6 w-6 text-sage mr-3" />
                  <span className="text-lg font-semibold text-forest">judemarfa@gmail.com</span>
                </div>
                
                <Button 
                  onClick={() => window.location.href = 'mailto:judemarfa@gmail.com'}
                  className="bg-sage hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold"
                >
                  Contact Us Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}

