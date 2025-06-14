"use client"

import { useEffect, useRef,useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Car, Shield, Clock, Users} from "lucide-react"
// import { Linkedin, Instagram, Facebook, Mail } from "lucide-react"
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaFacebookF, FaGooglePlay } from "react-icons/fa"
import "./app.css"
import {FaLinkedinIn} from "react-icons/fa6"


gsap.registerPlugin(ScrollTrigger)

export default function ParkItUpLanding() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const mainTextRef = useRef<HTMLHeadingElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Virat Kohli",  
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqm3FRuMyJxozqZ5FpeE5EbgmAkRkX3LCc_AeaQp2jMMESpK8zI5fyh_RXhoTe2JI9XBd4_PKbsFDUlRc_YNWwdkblg6i6xHR07dTCyu8e1Q",
      text: "This app has completely transformed how I find parking in the city. No more driving around for 20 minutes looking for a spot!",
      rating: 4.8,
      source: "Play store",
    },
    {
      name: "Rohit Sharma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MVt2B5udFNhfw8ZeC_cJiOwAPdO7fCZlZA&s",
      text: "The GPS integration is incredible. It shows me exactly where available spots are and even tells me the pricing upfront.",
      rating: 4.8,
      source: "App store",
    },
    {
      name: "Sachin Tendulkar",
      image: "https://i0.wp.com/sportsistan.com/wp-content/uploads/2024/07/Sachin-Tendulkar-Stats-Records-and-Awards.webp",
      text: "I love the real-time updates and the ability to reserve spots ahead of time. Makes my daily commute so much easier!",
      rating: 4.9,
      source: "Play store",
    },
    {
      name: "Jasprit Bumrah",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRfLilfD7Se3ixE4hFZSgY1cwqewl0_msa6LDSzJIVrRCsuYg2ABHT1Wa-6elodxeYxXtd7DyZEqMCyyZBh0MluuhPJkvOOZXZ4k4xyjGb4Q",
      text: "The user interface is so clean and intuitive. Even my parents can use it without any problems. Highly recommended!",
      rating: 4.7,
      source: "App store",
    },
  ]

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mainTextRef.current) {
        gsap.fromTo(
          mainTextRef.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5,
          },
        )
      }

      gsap.fromTo(
        ".hero-content > *:not(h1)",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 1,
          ease: "power2.out",
        },
      )

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          const timestamp = Date.now()
          console.log(`Stats animation triggered at: ${new Date(timestamp).toISOString()}`)

          gsap.fromTo(
            ".stat-item",
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              stagger: 0.2,
              ease: "back.out(1.7)",
            },
          )
        },
      })

      ScrollTrigger.create({
        trigger: featuresRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(
            ".feature-card",
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
            },
          )
        },
      })
            ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            ".cta-content > *",
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
            },
          )

          gsap.fromTo(
            ".phone-mockup",
            { y: 60, opacity: 0, rotation: -5 },
            {
              y: 0,
              opacity: 1,
              rotation: 0,
              duration: 1,
              stagger: 0.2,
              ease: "back.out(1.2)",
            },
          )
        },
      })

      gsap.to(".pricing-badge", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
      gsap.to(".phone-mockup", {
        y: -15,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      })

    }, [heroRef, statsRef, featuresRef, ctaRef])


    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextTestimonial()
      }, 9000) //time

      return () => clearInterval(interval)
    }
  }, [isHovered, currentTestimonial, nextTestimonial])

  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
      )
    }
  }, [currentTestimonial])

  return (
    
    <div className="min-h-screen ">
      {/* <Routes>
        <Route path="/profile" element={<UserProfile />} />
      </Routes> */}
      {/* Nav bar */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-blue-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-400">PARK it up</div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">
                How it works
              </a>
              <a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
              <a href="#blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                Blog
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Button className="nav-button secondary">Sign In</Button>
              <Button className="nav-button">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>
      <section ref={heroRef} className=" pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <Badge className="mb-6 bg-[#232834] text-yellow-400 border-yellow-900">
                #1 best parking app 2024 🏆
              </Badge>

              <h1 ref={mainTextRef} className="text-5xl lg:text-7xl font-bold text-gray-100 mb-6 leading-tight wipe-up">
                THE SOLUTION TO YOUR PARKING PROBLEMS
              </h1>

              <p className="text-xl text-gray-400 mb-8 max-w-lg">
                The mobile parking app that is integrated with GPS that can make it easier for you to find the nearest
                parking lot with a variety of price ranges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input placeholder="Search parking areas..." className="search-input pl-12 w-full bg-[#232834] text-gray-100 border-blue-900" />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input placeholder="Nearby access location..." className="search-input pl-12 w-full bg-[#232834] text-gray-100 border-blue-900" />
                </div>
                <Button className="cta-button px-8 bg-blue-700 text-white hover:bg-blue-800">Get Access</Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>No spam email</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>24/7 support system</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span>Free trial 13 days</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a4xzprubrLJsXHnBSTihaoo5LP13q5.png"
                  alt="Parking visualization with pricing"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />

                <div className="absolute top-20 right-20 pricing-badge bg-blue-900 text-white">$2.1/h</div>
                <div className="absolute top-40 left-16 pricing-badge bg-blue-900 text-white">$3.2/h</div>
                <div className="absolute bottom-32 right-32 pricing-badge bg-blue-900 text-white">$2.0/h</div>
                <div className="absolute bottom-20 left-20 pricing-badge bg-blue-900 text-white">$5.0/h</div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <section ref={statsRef} className="stats-section py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-gray-100">
              <h2 className="text-2xl font-bold mb-4">
                There are systems that offer nearby listings and competitive prices
              </h2>
              <p className="mb-2">Curious about new developments and updates?<br />Follow our social media</p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedin className="w-6 h-6" /></a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white"><FaInstagram className="w-6 h-6" /></a>
                <a href="https://facebook.com" className="text-gray-400 hover:text-white"><FaFacebook className="w-6 h-6" /></a>
                <a href="mailto:email@example.com" className="text-gray-400 hover:text-white"><FaEnvelope className="w-6 h-6" /></a>
              </div>
            </div>

            <div className="stat-item text-center">
              <div className="text-6xl font-bold text-blue-200 mb-2">99%</div>
              <p className="text-blue-100">Accurate data based on our system</p>
            </div>

            <div className="stat-item text-center">
              <div className="text-6xl font-bold text-blue-200 mb-2">570k+</div>
              <p className="text-blue-100">Users who are actively using the application</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fMxUow09IMWMeIQSbWfJu3tBKqwZSD.png"
                alt="Mobile app interface"
                width={500}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div>
              <Badge className="mb-6 bg-blue-900 text-blue-200">Our best features for you 💎</Badge>

              <h2 className="text-4xl font-bold text-gray-100 mb-6">THE SOLUTION TO YOUR PARKING PROBLEMS</h2>

              <p className="text-lg text-gray-400 mb-8">
                We are aware that many people have difficulty finding a parking space. We made a feature that can
                certainly solve your parking problems so far
              </p>

              <div className="grid gap-6">
                <Card className="feature-card p-6 bg-[#232834] border-blue-900">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-100">Well organized information</h3>
                        <p className="text-gray-400">Clear and structured parking data for easy decision making</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="feature-card p-6 bg-[#232834] border-blue-900">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-900 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-100">Google maps integration</h3>
                        <p className="text-gray-400">Seamless navigation with real-time location tracking</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="feature-card p-6 bg-[#232834] border-blue-900">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-100">Integrate with car sensor</h3>
                        <p className="text-gray-400">Smart connectivity with your vehicle for automated parking</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button className="mt-8 bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-20 mx-10 mb-10 rounded-4xl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <div className="overflow-hidden">
                <div ref={testimonialRef} className="bg-gray-700 rounded-2xl p-8 min-h-[300px]">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-600">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                    </div>
                  </div>

                  <div className="mb-6">
                    <svg className="w-8 h-8 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                    <p className="text-gray-300 leading-relaxed text-lg">{testimonials[currentTestimonial].text}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center mr-3">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-semibold ml-1">{testimonials[currentTestimonial].rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">from {testimonials[currentTestimonial].source}</span>
                    </div>

                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentTestimonial ? "bg-blue-400 w-6" : "bg-gray-500 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2  transform -translate-y-1/2 rounded-full p-1 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white hover:text-4xl opacity-60 hover:opacity-100 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2  transform -translate-y-1/2  rounded-full p-1 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white hover:text-4xl opacity-60 hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="mt-6 w-full bg-gray-600 rounded-full h-1">
                <div
                  className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-gray-600 text-white border-gray-500">Testimonials from user </Badge>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                WHAT OUR USER SAY ABOUT US
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                You will get many benefits from our features. Finding a parking space becomes easier
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <Button className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-3 rounded-full border-2 border-gray-500 hover:border-gray-400 transition-all">
                  Learn More
                </Button>

                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl font-bold text-blue-400">{testimonials.length}</span>
                    <span className="text-sm">Happy Users</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl font-bold text-yellow-400">4.8</span>
                    <span className="text-sm">Avg Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="cta-gradient py-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 ml-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="cta-content text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Free trial download now 🎉
              </Badge>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                BE PART OF THE FUTURE PARKING ERA NOW
              </h2>

              <p className="text-xl text-white/80 mb-8 max-w-lg">
                You can try this application for 13 days and please feel the convenience of the future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/20 focus:border-white/40"
                />
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Get Access
                </Button>
              </div>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone 1 */}
                <div className="phone-mockup relative z-10 mx-65 ">
                  <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem]  p-3 shadow-2xl">
                    <div className="w-full h-full bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="px-4 space-y-4 ">
                        {/* User Profile */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                            <div>
                              <p className="text-white text-sm">Welcome back</p>
                              <p className="text-white font-semibold">Ali Husni !</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-white text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>Pati, IDN</span>
                          </div>
                        </div>

                        {/* Search Bar */}
                        <div className="bg-gray-700 rounded-xl p-3 flex items-center space-x-3">
                          <Search className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-400">Search a parking area</span>
                        </div>

                        {/* Vehicle Section */}
                        <div className="bg-gray-700 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-gray-400 text-sm">My Vehicle</span>
                            <Car className="w-4 h-4 text-gray-400" />
                          </div>
                          <h3 className="text-white font-bold text-lg mb-3">Porsche 817T</h3>
                          <div className="bg-gray-600 rounded-lg p-3 flex items-center justify-between">
                            <div className="w-16 h-10 bg-gray-500 rounded flex items-center justify-center">
                              <Car className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-white text-sm">Explore</span>
                          </div>
                        </div>

                        {/* Last Parking */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white font-semibold">Last Parking space</span>
                            <span className="text-gray-400 text-sm">See more</span>
                          </div>
                          <div className="bg-gray-700 rounded-xl p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
                              <div>
                                <p className="text-white font-semibold">Pati Mall Parking</p>
                                <p className="text-gray-400 text-sm">st Pati wallabe no 04, Pati City</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex space-x-4 text-sm">
                                <div>
                                  <p className="text-gray-400">Distance</p>
                                  <p className="text-white">1.5 km</p>
                                </div>
                                <div>
                                  <p className="text-gray-400">Pricing</p>
                                  <p className="text-white">$ 21 / h</p>
                                </div>
                              </div>
                              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="phone-mockup absolute right-30 top-20 z-0">
                  <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                    <div className="w-full h-full bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* Map View */}
                      <div className="px-4 space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <button className="p-2 bg-gray-700 rounded-full">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <span className="text-white font-semibold">Pati City, IDN</span>
                          <Search className="w-5 h-5 text-gray-400 ml-auto" />
                        </div>

                        {/* Map Area */}
                        <div className="bg-blue-900 rounded-xl h-80 relative overflow-hidden">
                          {/* Simulated map with parking spots */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900">
                            {/* Parking spot indicators */}
                            <div className="absolute top-16 left-8 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              $2.1/h
                            </div>
                            <div className="absolute top-32 right-12 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              $3.2/h
                            </div>
                            <div className="absolute bottom-24 left-16 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              $5.0/h
                            </div>

                            {/* Car icon */}
                            <div className="absolute bottom-32 right-20 w-8 h-6 bg-white rounded transform rotate-45"></div>
                          </div>
                        </div>

                        {/* Spots near you */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white font-semibold">Spots near you</span>
                            <span className="text-gray-400 text-sm">See more</span>
                          </div>
                          <div className="bg-gray-700 rounded-xl p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                              <div className="flex-1">
                                <p className="text-white font-semibold">Disneyland Pati</p>
                                <p className="text-gray-400 text-sm">Jati Disneyland no 04, Pati City</p>
                                <div className="flex items-center justify-between mt-2">
                                  <div className="flex space-x-4 text-sm">
                                    <div>
                                      <span className="text-gray-400">Distance</span>
                                      <span className="text-white ml-2">102 m</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-400">Pricing</span>
                                      <span className="text-white ml-2">$ 5.0 / h</span>
                                    </div>
                                  </div>
                                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg text-sm">
                                    Book Now
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#181c23] text-gray-400 py-12 border-t border-blue-900">
        <div className="container mx-auto px-2">
          <div className="grid md:grid-cols-4 gap-6 text-sm align-center">
            <div>
              <h3 className="text-shadow-white font-bold text-lg mb-4">PARK It Up</h3>
              <p className="mb-2">Curious about new developments and updates?<br />Follow our social media</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/company/park-it-up/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGooglePlay className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-shadow-white font-bold text-lg mb-4">ADDRESS</h3>
              <p className="mb-2">Delhi Technological University,<br />Delhi, India -110042</p>
            </div>
            <div>
              <h3 className="text-shadow-white font-bold text-lg mb-4">CONTACT US</h3>
              <p className="mb-2">
                <a href="tel:+919757050071" className="hover:text-white">+91 9757050071</a>
              </p>
              <p className="mb-2">
                <a href="tel:+917977246237" className="hover:text-white">+91 7977246237</a>
              </p>
              <p className="mb-2">
                <a href="mailto:pranjalchaurasia_23se113@dtu.ac.in" className="hover:text-white">pranjalchaurasia_23se113@dtu.ac.in</a>
              </p>
            </div>
            <div>
              <h3 className="text-shadow-white font-bold text-lg mb-4">OUR POLICIES</h3>
              <p className="mb-2"><a href="#" className="hover:text-white transition-colors mb-2">Privacy Policy</a></p>
              <p className="mb-2"><a href="#" className="hover:text-white transition-colors mb-2">Term of Use</a></p>
              <p className="mb-2"><a href="#" className="hover:text-white transition-colors mb-2">Term of Order</a></p>
            </div>
          </div>
          <div className="text-center mt-10 pt-4 border-t border-blue-900">
            <p className="text-gray-600 text-sm pt-2">© 2025 PARK It Up. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
// hello