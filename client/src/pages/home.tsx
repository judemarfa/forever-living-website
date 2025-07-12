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
                <button onClick={() => scrollToSection('shop')} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-forest transition-colors">
                  Shop
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
              <button onClick={() => scrollToSection('shop')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-forest">
                Shop
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-gold/10 to-coral/10 shadow-xl border-2 border-gold/40 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-gold text-3xl mb-3 animate-pulse">
                      <TrendingUp className="h-10 w-10" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent">
                      💰 Earn Supplemental Income
                    </h3>
                    <p className="text-forest font-semibold text-base">
                      The <span className="text-coral font-bold">harder you work</span>, the more 
                      <span className="text-gold font-bold"> earning potential</span> you have. 
                      Building a business takes <span className="text-sage font-bold">commitment</span>.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-sage/10 to-forest/10 shadow-xl border-2 border-sage/40 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-coral text-3xl mb-3 animate-pulse">
                      <Award className="h-10 w-10" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-coral to-gold bg-clip-text text-transparent">
                      🎯 Qualify for Incentives
                    </h3>
                    <p className="text-forest font-semibold text-base">
                      Unlock your <span className="text-gold font-bold">potential</span> to earn 
                      <span className="text-coral font-bold"> bonuses</span> and qualify to explore 
                      <span className="text-sage font-bold">travel destinations</span>.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
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

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-6 font-serif">
              Featured Wellness Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium health supplements, carefully crafted from nature's finest ingredients to support your wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Aloe Vera Drink */}
            <Card className="bg-gradient-to-br from-sage/10 to-forest/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-sage text-white p-3 rounded-full mr-4">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-forest">Aloe Vera Drink</h3>
                    <p className="text-gray-600">Ancient Wellness, Modern Benefits</p>
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Fresh aloe vera gel" 
                  className="rounded-lg mb-6 w-full h-48 object-cover" 
                />
                
                <div className="mb-6">
                  <h4 className="font-semibold text-forest mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-gold" />
                    Ancient Heritage
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Treasured since Egyptian times, aloe vera has been nature's healing gift for over 6,000 years. Cleopatra herself relied on its powerful properties for health and beauty.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <Heart className="h-5 w-5 text-coral mb-2" />
                    <h5 className="font-semibold text-forest mb-1">Gut Health</h5>
                    <p className="text-sm text-gray-600">Supports digestive wellness</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <Droplets className="h-5 w-5 text-blue-500 mb-2" />
                    <h5 className="font-semibold text-forest mb-1">Hydration</h5>
                    <p className="text-sm text-gray-600">Deep cellular hydration</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <Shield className="h-5 w-5 text-green-500 mb-2" />
                    <h5 className="font-semibold text-forest mb-1">Immune Support</h5>
                    <p className="text-sm text-gray-600">Strengthens natural defenses</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <RefreshCw className="h-5 w-5 text-sage mb-2" />
                    <h5 className="font-semibold text-forest mb-1">Natural Detox</h5>
                    <p className="text-sm text-gray-600">Gentle body cleansing</p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.open('https://thealoeveraco.shop/p9UXGNcC', '_blank')}
                  className="bg-sage hover:bg-green-600 text-white w-full"
                >
                  Learn More About Aloe Vera
                </Button>
              </CardContent>
            </Card>
            
            {/* Arctic Sea Omega-3 */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                    <Fish className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-forest">Arctic Sea Omega-3</h3>
                    <p className="text-gray-600">Essential Heart Health Support</p>
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Omega-3 fish oil capsules" 
                  className="rounded-lg mb-6 w-full h-48 object-cover" 
                />
                
                <div className="mb-6">
                  <Card className="bg-coral text-white p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        <span className="font-semibold">The Silent Killer</span>
                      </div>
                      <p className="text-sm opacity-90">
                        Heart disease often shows no symptoms until it's too late. Preventive care through Omega-3 supplementation is crucial.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-2">
                      <Heart className="h-5 w-5 text-red-500 mr-2" />
                      <h5 className="font-semibold text-forest">Cardiovascular Health</h5>
                    </div>
                    <p className="text-sm text-gray-600">Supports healthy heart function and circulation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center mb-2">
                      <Brain className="h-5 w-5 text-purple-500 mr-2" />
                      <h5 className="font-semibold text-forest">Brain Function</h5>
                    </div>
                    <p className="text-sm text-gray-600">Essential fatty acids for cognitive health</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex items-center mb-2">
                      <ShieldCheck className="h-5 w-5 text-orange-500 mr-2" />
                      <h5 className="font-semibold text-forest">Anti-Inflammatory</h5>
                    </div>
                    <p className="text-sm text-gray-600">Reduces inflammation throughout the body</p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.open('https://thealoeveraco.shop/p9UXGNcC', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  Protect Your Heart Health
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-6 font-serif">
              Premium Product Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of health and wellness products, each carefully formulated to support your journey to optimal health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
                title: "Aloe Vera Gel",
                description: "Pure, natural aloe vera gel for internal and external use",
                badge: "Premium Quality",
                icon: <Leaf className="h-5 w-5" />,
                color: "text-sage"
              },
              {
                image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
                title: "Arctic Sea Omega-3",
                description: "Essential fatty acids for heart and brain health",
                badge: "Heart Health",
                icon: <Fish className="h-5 w-5" />,
                color: "text-blue-600"
              },
              {
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
                title: "Forever Daily",
                description: "Complete daily vitamin and mineral supplement",
                badge: "Daily Essentials",
                icon: <Shield className="h-5 w-5" />,
                color: "text-gold"
              },
              {
                image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
                title: "Forever Lite Ultra",
                description: "High-protein shake for weight management",
                badge: "Weight Management",
                icon: <TrendingUp className="h-5 w-5" />,
                color: "text-coral"
              },
              {
                image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
                title: "Aloe Skincare",
                description: "Natural skincare products with aloe vera",
                badge: "Beauty & Care",
                icon: <Heart className="h-5 w-5" />,
                color: "text-purple-600"
              },
              {
                image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
                title: "Bee Products",
                description: "Natural honey, bee pollen, and royal jelly",
                badge: "Nature's Gift",
                icon: <Heart className="h-5 w-5" />,
                color: "text-yellow-600"
              }
            ].map((product, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-forest mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`font-semibold ${product.color}`}>{product.badge}</span>
                    <div className={product.color}>
                      {product.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Shop our complete collection of premium Forever Living Products with secure ordering, flexible payment options, and direct shipping to your door.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm text-center animate-on-scroll">
              <CardContent className="p-6">
                <div className="text-gold text-3xl mb-4">
                  <Shield className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Ordering</h3>
                <p className="text-green-100">Safe and encrypted transactions with multiple payment options</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm text-center animate-on-scroll">
              <CardContent className="p-6">
                <div className="text-gold text-3xl mb-4">
                  <Truck className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Direct Shipping</h3>
                <p className="text-green-100">Fast and reliable delivery straight from Forever Living</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm text-center animate-on-scroll">
              <CardContent className="p-6">
                <div className="text-gold text-3xl mb-4">
                  <Headphones className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personal Support</h3>
                <p className="text-green-100">Dedicated customer service and wellness consultation</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced Call to Action */}
          <div className="text-center animate-on-scroll">
            <div className="bg-coral/20 backdrop-blur-sm border border-coral/30 rounded-xl p-6 mb-8 animate-pulse">
              <p className="text-white text-2xl font-bold mb-2">🌟 15% discount on all orders</p>
              <p className="text-cream text-lg">Premium wellness products trusted by thousands</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-6">
              <Button 
                onClick={() => window.open('https://thealoeveraco.shop/p9UXGNcC', '_blank')}
                className="relative bg-gold hover:bg-yellow-500 text-white px-12 py-4 text-xl font-bold transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-gold/50 group inline-flex items-center animate-glow animate-bounce-subtle"
              >
                <span className="relative z-10 flex items-center">
                  Best Seller
                  <Star className="h-6 w-6 ml-2 animate-pulse" />
                  <ExternalLink className="h-5 w-5 ml-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700 animate-shimmer" />
              </Button>
              
              {/* QR Code */}
              <div className="flex flex-col items-center animate-bounce-subtle">
                <div className="relative">
                  <div 
                    onClick={() => window.open('https://thealoeveraco.shop/p9UXGNcC', '_blank')}
                    className="bg-white p-3 rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group animate-glow"
                  >
                    <img 
                      src={qrCodeImage} 
                      alt="QR Code to Best Seller Products" 
                      className="w-20 h-20 sm:w-24 sm:h-24" 
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-coral text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    SHOP
                  </div>
                </div>
                <p className="text-cream text-sm mt-2 text-center font-semibold">📱 Scan to Shop Now!</p>
              </div>

              {/* Join Our Forever Family */}
              <div className="flex flex-col items-center animate-bounce-subtle">
                <div className="relative">
                  <div 
                    onClick={() => window.open('https://thealoeveraco.shop/CDUSJPbt', '_blank')}
                    className="bg-white p-3 rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group animate-glow"
                  >
                    <img 
                      src={joinFamilyImage} 
                      alt="Join Our Forever Family" 
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain" 
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-sage text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    JOIN
                  </div>
                </div>
                <p className="text-cream text-sm mt-2 text-center font-semibold">👥 Join Our Family</p>
              </div>
            </div>
            
            <p className="text-green-100 text-sm flex items-center justify-center">
              <Shield className="h-4 w-4 mr-1" />
              Secure ordering, payment, and direct shipping available
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-6 font-serif">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who have transformed their health with Forever Living Products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                testimonial: "The Aloe Vera drink has completely transformed my digestive health. I feel more energized and my skin looks amazing!",
                name: "Sarah M.",
                title: "Verified Customer",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
              },
              {
                rating: 5,
                testimonial: "Arctic Sea Omega-3 has been a game-changer for my heart health. My doctor is impressed with my improved numbers!",
                name: "David R.",
                title: "Verified Customer",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
              },
              {
                rating: 5,
                testimonial: "Working with this manager has been incredible. The personal support and product knowledge is outstanding!",
                name: "Maria L.",
                title: "Verified Customer",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg animate-on-scroll">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-gold flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover" 
                    />
                    <div>
                      <h4 className="font-semibold text-forest">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-6 font-serif">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch for personalized wellness consultation and product recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-forest mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-sage text-white p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest">Email</h4>
                    <p className="text-gray-600">your-email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-sage text-white p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-sage text-white p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest">Availability</h4>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-forest mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button size="icon" className="bg-sage hover:bg-green-600 text-white">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-sage hover:bg-green-600 text-white">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-sage hover:bg-green-600 text-white">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-forest mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your Name"
                    className="focus:ring-sage focus:border-sage"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="focus:ring-sage focus:border-sage"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    className="focus:ring-sage focus:border-sage"
                  />
                </div>
                
                <div>
                  <Label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Interest
                  </Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                    <SelectTrigger className="focus:ring-sage focus:border-sage">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="products">Product Information</SelectItem>
                      <SelectItem value="consultation">Wellness Consultation</SelectItem>
                      <SelectItem value="business">Business Opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your wellness goals or questions..."
                    className="focus:ring-sage focus:border-sage"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-sage hover:bg-green-600 text-white transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                FOREVER<sup className="text-xs">®</sup>
              </h3>
              <p className="text-green-100 mb-4">
                Your trusted independent Forever Living Products manager, dedicated to helping you achieve optimal health through nature's finest ingredients.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-green-100 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-green-100 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-green-100 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-green-100 hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('products')} className="text-green-100 hover:text-white transition-colors">
                    Products
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="text-green-100 hover:text-white transition-colors">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-green-100 hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-green-100">
                <li>Aloe Vera</li>
                <li>Omega-3</li>
                <li>Vitamins</li>
                <li>Skincare</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-green-100">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  your-email@example.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Mon-Fri: 9AM-6PM
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-100 text-sm">
              © 2024 Independent Forever Living Products Manager. All rights reserved.
            </p>
            <p className="text-green-100 text-xs mt-2">
              This website is owned and operated by an independent Forever Living Products Business Owner and is not affiliated with Forever Living Products International, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
