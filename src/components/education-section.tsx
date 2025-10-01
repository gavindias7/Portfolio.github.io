import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Wayne State University, MI, USA",
    gpa: "3.78/4",
    period: "May 2019",
    type: "Graduate",
    location: "Detroit, MI",
    highlights: [
      "Specialized in AI and Machine Learning",
      "Advanced coursework in algorithms and data structures",
      "Research focus on enterprise software solutions"
    ]
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "University of Mumbai, Mumbai, India",
    gpa: "7.80/10",
    period: "May 2017",
    type: "Undergraduate",
    location: "Mumbai, India",
    highlights: [
      "Strong foundation in computer science fundamentals",
      "Project-based learning approach",
      "Focus on software development and system design"
    ]
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Educational <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation in computer science with focus on advanced technologies and practical applications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`hover:shadow-lg transition-all duration-300 ${
                edu.type === 'Graduate' 
                  ? 'border-purple-500/40 bg-gradient-to-r from-purple-500/5 to-transparent' 
                  : 'border-orange-500/40 bg-gradient-to-r from-orange-500/5 to-transparent'
              } backdrop-blur-sm`}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${
                          edu.type === 'Graduate' ? 'bg-purple-500/20' : 'bg-orange-500/20'
                        }`}>
                          <GraduationCap className={`w-5 h-5 ${
                            edu.type === 'Graduate' ? 'text-purple-400' : 'text-orange-400'
                          }`} />
                        </div>
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">{edu.school}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge 
                        variant={edu.type === 'Graduate' ? 'default' : 'secondary'}
                        className={edu.type === 'Graduate' 
                          ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' 
                          : 'bg-gradient-to-r from-orange-600 to-orange-700 text-white'
                        }
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </Badge>
                      <Badge variant="outline" className={`${
                        edu.type === 'Graduate' ? 'border-purple-500/30 text-purple-400' : 'border-orange-500/30 text-orange-400'
                      }`}>
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Star className={`w-4 h-4 ${
                          edu.type === 'Graduate' ? 'text-purple-400' : 'text-orange-400'
                        }`} />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              edu.type === 'Graduate' ? 'bg-purple-400' : 'bg-orange-400'
                            }`} />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                      <div className={`text-center p-6 rounded-xl ${
                        edu.type === 'Graduate' ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-orange-500/10 border border-orange-500/20'
                      }`}>
                        <div className="text-3xl font-bold mb-1">{edu.gpa}</div>
                        <div className="text-sm text-muted-foreground">GPA</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Academic Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 via-background to-orange-500/10 border-border/50 backdrop-blur-sm max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Academic Excellence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">3.78</div>
                  <div className="text-sm text-muted-foreground">Graduate GPA</div>
                  <div className="text-xs text-muted-foreground mt-1">Wayne State University</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">7.80</div>
                  <div className="text-sm text-muted-foreground">Undergraduate GPA</div>
                  <div className="text-xs text-muted-foreground mt-1">University of Mumbai</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-sm">
                  Strong academic performance with consistent excellence across both undergraduate and graduate studies,
                  demonstrating dedication to learning and mastery of computer science fundamentals.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}