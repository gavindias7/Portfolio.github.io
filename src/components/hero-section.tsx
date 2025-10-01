import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Mail, Linkedin, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 bg-clip-text text-transparent mb-4">
              GAVIN DIAS
            </h1>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Lead Appian Developer & AI Agent Engineer
              </h2>
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Charlotte, NC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>gavindias7@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>248-704-2992</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Master's in Computer Science
            </Badge>
            <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
              3+ Years Experience
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              AI & Automation Expert
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
              onClick={() => window.open('https://www.linkedin.com/in/gavin-dias', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn Profile
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}