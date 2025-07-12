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
  Eye
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
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. I'll get back to you soon.",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src={firstHealthLogo} 
                alt="1st Health Logo" 
                className="h-16 w-auto mr-2"
              />
              <span className="text-2xl font-bold text-forest">1st Health</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-forest hover:text-sage transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-forest hover:text-sage transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => window.open('https://thealoeveraco.shop/kyrhHmnl', '_blank')}
                className="text-forest hover:text-sage transition-colors duration-200 font-medium"
              >
                Drinks
              </button>
              <button 
                onClick={() => window.open('https://thealoeveraco.shop/uUbSDBAr', '_blank')}
                className="text-forest hover:text-sage transition-colors duration-200 font-medium"
              >
                Nutrition
              </button>
              <button 
                onClick={() => window.open('https://thealoeveraco.shop/stxyuA54', '_blank')}
                className="text-forest hover:text-sage transition-colors duration-200 font-medium"
              >
                ImmuneHealth
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-forest hover:text-sage transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-forest p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 text-forest hover:text-sage transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-2 text-forest hover:text-sage transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => window.open('https://thealoeveraco.shop/kyrhHmnl', '_blank')}
                  className="block w-full text-left px-3 py-2 text-forest hover:text-sage transition-colors duration-200"
                >
                  Drinks
                </button>
                <button 
                  onClick={() => window.open('https://thealoeveraco.shop/uUbSDBAr', '_blank')}
                  className="block w-full text-left px-3 py-2 text-forest hover:text-sage transition-colors duration-200"
                >
                  Nutrition
                </button>
                <button 
                  onClick={() => window.open('https://thealoeveraco.shop/stxyuA54', '_blank')}
                  className="block w-full text-left px-3 py-2 text-forest hover:text-sage transition-colors duration-200"
                >
                  ImmuneHealth
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-forest hover:text-sage transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-sage via-forest to-gold text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg mb-6 font-medium opacity-90">
              "A wise man should consider that health is the greatest of human blessings" - Hippocrates
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Transform Your Health & Wealth
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-cream opacity-90">
              Discover premium wellness products and lucrative business opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://thealoeveraco.shop/p9UXGNcC', '_blank')}
                className="bg-white text-sage hover:bg-cream px-8 py-3 text-lg font-semibold"
              >
                Shop Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => window.open('https://thealoeveraco.shop/CDUSJPbt', '_blank')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sage px-8 py-3 text-lg font-semibold"
              >
                Join Our Team
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-6 font-serif">
                About 1st Health
              </h2>
              
              {/* Carousel */}
              <div className="relative mb-8">
                <div className="overflow-hidden rounded-lg shadow-lg relative">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="min-w-full">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4">
                    <img 
                      src={recognitionBadge} 
                      alt="Manager Recognition Badge" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex justify-center mt-4 space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentSlide ? 'bg-sage' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Main About Image */}
              <div className="relative mb-8">
                <img 
                  src={antonioMarfaImage} 
                  alt="Antonio Marfa - Forever Living Products Manager" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-tight">
                Welcome to 1st Health, where wellness meets opportunity! I'm Antonio Marfa, a dedicated Forever Living Products Manager passionate about helping people achieve optimal health and financial freedom.
              </p>
              
              <p className="text-gray-600 mb-4 text-sm leading-tight">
                With years of experience in the health and wellness industry, I've witnessed firsthand the transformative power of premium natural products. Our aloe vera-based supplements have helped thousands improve their digestive health, boost immunity, and enhance overall vitality.
              </p>
              
              <p className="text-base leading-tight font-semibold text-sage mb-6">
                Have the <span className="text-coral font-bold text-lg">freedom</span> to make your own schedule, work from <span className="text-forest font-bold">anywhere</span> and achieve what you <span className="text-gold font-bold text-lg">desire</span>.
              </p>
              
              <div className="text-center">
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
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-6 font-serif">
              Featured Wellness Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium health supplements, carefully crafted from nature's finest ingredients to support your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-12 h-12 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.386.505A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.112 2.136c1.881.505 9.386.505 9.386.505s7.505 0 9.386-.505a2.999 2.999 0 0 0 2.112-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2 font-serif">
                    judeHealthBiz Talk
                  </h2>
                  <p className="text-white/90 text-sm">
                    Watch powerful health & wellness insights
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-6 text-white/95">
                Discover expert tips, product reviews, and wellness strategies on my YouTube channel. 
                Get the latest updates on health supplements and business opportunities!
              </p>
              
              <Button 
                onClick={() => window.open('https://www.youtube.com/channel/UCY1yrwk__0cJN6E5qHGGxdA', '_blank')}
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-bold rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.386.505A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.112 2.136c1.881.505 9.386.505 9.386.505s7.505 0 9.386-.505a2.999 2.999 0 0 0 2.112-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Videos
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="mt-6 text-sm text-white/80">
                <p>🎥 Health tips • 📚 Product reviews • 💼 Business insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-6 font-serif">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your health and wealth? Contact me today!
            </p>
            
            <div className="flex justify-center">
              <div className="flex items-center text-forest">
                <Mail className="h-6 w-6 mr-3" />
                <span className="text-lg font-medium">judemarfa@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src={firstHealthLogo} 
                  alt="1st Health Logo" 
                  className="h-10 w-auto mr-2"
                />
                <span className="text-xl font-bold">1st Health</span>
              </div>
              <p className="text-green-200 text-sm">
                Your partner in health and wealth transformation through premium Forever Living Products.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-green-200 hover:text-white">Aloe Vera Drinks</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Nutritional Supplements</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Immune Health</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Business</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-green-200 hover:text-white">Join Our Team</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Business Opportunity</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-200 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-600 mt-8 pt-8 text-center text-sm text-green-200">
            <p>&copy; 2024 1st Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}