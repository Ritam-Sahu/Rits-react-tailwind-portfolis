import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      e.target.reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I’m always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sahuritam2@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sahuritam2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919832180747"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 98321 80747
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Kolkata, WB, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <X />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
