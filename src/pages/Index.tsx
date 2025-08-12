
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Phone, Mail, MapPin, Instagram, Facebook, Camera } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Bridal Makeup",
      price: "From $300",
      duration: "3-4 hours",
      features: ["Trial session included", "Touch-up kit", "Hair styling add-on available", "Premium products"],
      popular: true
    },
    {
      title: "Bridal Party",
      price: "From $150/person",
      duration: "1.5 hours each",
      features: ["Coordinated looks", "Group discounts", "On-location service", "Timeline coordination"],
      popular: false
    },
    {
      title: "Engagement Shoot",
      price: "From $200",
      duration: "2 hours",
      features: ["Natural glam look", "Photo-ready finish", "Touch-up session", "Consultation included"],
      popular: false
    }
  ];

  const portfolio = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
      title: "Classic Elegance"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
      title: "Modern Romance"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=600&fit=crop",
      title: "Vintage Glam"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/0ecb65c0-7e46-4d79-bfde-76acf1fa9fe2.png" 
                alt="Bella Bridal mascot" 
                className="h-10 w-10"
              />
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Bella Bridal
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-rose-500 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-rose-500 transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-rose-500 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-rose-500 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-rose-100 text-rose-700 hover:bg-rose-200">
            ✨ Professional Bridal Makeup Artist
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent leading-tight">
            Your Perfect
            <br />
            Wedding Day Look
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your special day with expertly crafted bridal makeup that enhances your natural beauty and creates timeless memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-lg px-8 py-6">
              Book Your Trial
            </Button>
            <Button size="lg" variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50 text-lg px-8 py-6">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bridal Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive makeup services tailored for your special day
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-rose-500 scale-105' : ''}`}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-600">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-rose-600 mb-2">{service.price}</div>
                  <p className="text-gray-600 mb-6">{service.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Star className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse of our beautiful bridal transformations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center">
                      <Camera className="h-4 w-4 mr-2" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-rose-100 text-rose-700">
                Certified Professional
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Bella Bridal
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 8 years of experience in bridal makeup artistry, I specialize in creating timeless, elegant looks that enhance your natural beauty. My passion lies in making every bride feel confident and radiant on their special day.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I use only premium, long-lasting products and stay current with the latest trends while maintaining classic elegance. Every bride deserves to look and feel absolutely stunning.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">200+</div>
                  <div className="text-gray-600">Happy Brides</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop" 
                alt="Professional makeup artist at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Book?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and create the perfect look for your special day. 
            Contact me today to schedule your consultation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">hello@bellabridal.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Los Angeles, CA</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-lg px-12 py-6 mb-8">
            Book Your Consultation
          </Button>
          
          <div className="flex justify-center space-x-6">
            <div className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors cursor-pointer">
              <Instagram className="h-6 w-6 text-rose-600" />
            </div>
            <div className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors cursor-pointer">
              <Facebook className="h-6 w-6 text-rose-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-bold">Bella Bridal</span>
          </div>
          <p className="text-gray-400 mb-6">
            Creating beautiful memories, one bride at a time.
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Bella Bridal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
