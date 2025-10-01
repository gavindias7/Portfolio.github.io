import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Phone, Linkedin, MapPin, Download, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gavindias7@gmail.com",
    href: "mailto:gavindias7@gmail.com",
    color: "purple"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "248-704-2992",
    href: "tel:248-704-2992",
    color: "orange"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gavin-dias",
    href: "https://www.linkedin.com/in/gavin-dias",
    color: "purple"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Charlotte, NC 28277",
    href: "https://maps.google.com/?q=Charlotte,NC",
    color: "orange"
  }
];

const quickStats = [
  { label: "Years Experience", value: "3+", color: "purple" },
  { label: "Projects Completed", value: "10+", color: "orange" },
  { label: "Technologies Mastered", value: "25+", color: "purple" },
  { label: "Certifications", value: "5+", color: "orange" }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-purple-950/5 to-orange-950/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just connect professionally
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`text-3xl font-bold mb-2 ${
                    stat.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-card/50 to-muted/20 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <a
                          href={contact.href}
                          target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                          rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 group-hover:scale-[1.02]"
                        >
                          <div className={`p-3 rounded-lg ${
                            contact.color === 'purple' ? 'bg-purple-500/20 group-hover:bg-purple-500/30' : 'bg-orange-500/20 group-hover:bg-orange-500/30'
                          } transition-colors`}>
                            <contact.icon className={`w-5 h-5 ${
                              contact.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{contact.label}</div>
                            <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                              {contact.value}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-gradient-to-br from-purple-500/10 via-card/50 to-orange-500/10 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
                  <p className="text-muted-foreground mb-6">
                    Experienced Lead Appian Developer and AI Agent Engineer with a strong background in enterprise solutions, 
                    automation, and modern web technologies. Passionate about leveraging AI to solve complex business problems 
                    and drive digital transformation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
                      Enterprise Solutions
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-300 border-orange-500/20">
                      AI Automation
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
                      Full-Stack Development
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-300 border-orange-500/20">
                      Leadership
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Resume
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                      onClick={() => window.open('mailto:gavindias7@gmail.com', '_blank')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/10 via-card/50 to-purple-500/10 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Currently Open To:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>Senior/Lead Developer Positions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span>AI/ML Engineering Roles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>Technical Consulting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span>Collaboration Opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t border-border/50"
          >
            <p className="text-muted-foreground">
              Thank you for taking the time to review my portfolio. Let's build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}