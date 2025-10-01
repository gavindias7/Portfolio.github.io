import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code, Database, Cloud, Cpu, Globe, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Appian SAIL", "Appian AI", "Python", "Java", "C++", "C#", "ASP.NET", "JavaScript", "HTML5", "CSS3"],
    color: "purple"
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    skills: ["Prompt & Context Engineering", "RAG", "Tool Use", "MCP Servers", "AI Orchestration & Automation", "OpenAI", "ChatGPT", "Memory Architectures"],
    color: "orange"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MS SQL Server", "Oracle SQL", "MS Access", "MongoDB"],
    color: "purple"
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React", "Angular", "Django", "Node.js", "HTML5", "CSS3", "Bootstrap 4", "AJAX", "jQuery", "Jade"],
    color: "orange"
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["Everything Appian", "JIRA", "AWS", "Google Cloud Platform", "AutoML", "Android Studio", "GitHub", "Pandas"],
    color: "purple"
  },
  {
    title: "Operating Systems",
    icon: Settings,
    skills: ["Windows", "Linux", "Unix", "Android", "macOS"],
    color: "orange"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI automation, full-stack development, and enterprise solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-300 border-${category.color}-500/20 hover:border-${category.color}-500/40 bg-card/50 backdrop-blur-sm`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${category.color}-500/20`}>
                      <category.icon className={`w-5 h-5 text-${category.color}-400`} />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`${category.color === 'purple' 
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20' 
                            : 'bg-orange-500/10 text-orange-300 border-orange-500/30 hover:bg-orange-500/20'
                          } transition-colors cursor-default`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 border-purple-500/20 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Specialized Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Design & Analysis</h4>
                  <p className="text-sm text-muted-foreground">Algorithm Design, Database Systems, Generative AI, Machine Learning, Artificial Intelligence</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Data & Security</h4>
                  <p className="text-sm text-muted-foreground">Data Mining, Computer Security, Web Technology, Theory of Computer Science</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Development</h4>
                  <p className="text-sm text-muted-foreground">Agile Methodology, Enterprise Solutions, Full-Stack Development, API Integration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}