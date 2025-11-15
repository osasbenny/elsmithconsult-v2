import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { ChevronRight } from "lucide-react";

export default function BookSession() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation - Copied from Home.tsx for consistency */}
      <nav className="sticky top-0 z-50 bg-white border-b border-secondary">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/logo.jpg" alt="ELSMITH Consulting" className="h-12 w-auto" />
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition">Home</Link>
            <Link href="/about" className="text-foreground hover:text-accent transition">About</Link>
            <Link href="/services" className="text-foreground hover:text-accent transition">Services</Link>
            <Link href="/programs" className="text-foreground hover:text-accent transition">Programs</Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition">Contact</Link>
            <Link href="/book" className="text-foreground hover:text-accent transition font-bold">Book a Session</Link>
          </div>
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Speak to Us Today
              </Button>
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20 md:py-28">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Book a Coaching Session</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Schedule your personalized coaching or facilitation session with our lead consultant.
          </p>
        </div>
      </section>

      {/* Booking Placeholder Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Schedule Your Time
          </h2>
          <div className="bg-secondary/10 border-2 border-dashed border-secondary rounded-lg p-12">
            <p className="text-lg text-foreground mb-4">
              **Booking Widget Placeholder**
            </p>
            <p className="text-muted-foreground mb-6">
              The actual calendar widget (e.g., Calendly, Acuity) will be embedded here once the link is provided.
            </p>
            <a 
              href="https://calendly.com/placeholder-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
                Go to Booking Page (Placeholder Link) <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Secure your slot now and take the next step towards excellence.
          </p>
        </div>
      </section>

      {/* Footer - Copied from Home.tsx for consistency */}
      <footer className="bg-primary text-white py-12 border-t border-blue-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">ELSMITH</h4>
              <p className="text-blue-100">Global Business and Workforce Advisory</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Navigation</h5>
              <ul className="space-y-2 text-blue-100">
                <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-accent transition">About</Link></li>
                <li><Link href="/services" className="hover:text-accent transition">Services</Link></li>
                <li><Link href="/programs" className="hover:text-accent transition">Programs</Link></li>
                <li><Link href="/book" className="hover:text-accent transition">Book a Session</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <ul className="space-y-2 text-blue-100">
                <li>Email: <a href="mailto:engage@elsmithconsulting.com" className="hover:text-accent transition">engage@elsmithconsulting.com</a></li>
                <li>Phone: <a href="tel:+2348032004575" className="hover:text-accent transition">+234 803 200 4575</a></li>
                <li><a href="tel:+447733717516" className="hover:text-accent transition">+44 7733 717516</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="text-blue-100 hover:text-accent transition">LinkedIn</a>
                <a href="#" className="text-blue-100 hover:text-accent transition">Instagram</a>
                <a href="#" className="text-blue-100 hover:text-accent transition">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-100">
            <p>&copy; 2025 ELSMITH Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
