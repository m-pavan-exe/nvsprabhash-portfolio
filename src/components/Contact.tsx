import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in text-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to contribute to meaningful technology solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:prabhasnvs@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    prabhasnvs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+91801873XXXX" className="text-muted-foreground hover:text-primary transition-colors">
                    +91-801873XXXX
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <span className="text-muted-foreground">Tekkali, Srikakulam, AP</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button variant="outline" size="icon" asChild className="hover:shadow-glow transition-all duration-300">
                <a href="https://github.com/NVS-PRABHASH" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:shadow-glow transition-all duration-300">
                <a href="https://www.linkedin.com/in/nvs-prabhash" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
