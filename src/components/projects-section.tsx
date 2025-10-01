import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, ExternalLink, Lightbulb, Award } from 'lucide-react';

const projects = [
  {
    title: "L&D AI Agent",
    company: "Microsoft Copilot Studio",
    period: "May 2025 – July 2025",
    type: "AI/ML Project",
    description: "Designed, developed, and deployed a production-ready L&D AI agent, delivering scalable, intelligent support for enterprise learning environments and reducing manual intervention.",
    highlights: [
      "Engineered advanced agent capabilities, including tool orchestration, knowledge retrieval, and autonomous task execution",
      "Achieved an 80% agentic workflow complemented by 20% structured logic for reliability"
    ],
    technologies: ["AI Agents", "Microsoft Copilot Studio", "Machine Learning", "Enterprise Solutions"]
  },
  {
    title: "Claims Intake Portal",
    company: "Appian",
    period: "May 2024 – Present",
    type: "Enterprise Application",
    description: "Led the Appian Team to build the Insurance Claims Portal intake system and back-office system to manage the claims workflow.",
    highlights: [
      "Built comprehensive claims management system",
      "Integrated with multiple insurance systems",
      "Streamlined workflow automation"
    ],
    technologies: ["Appian", "Insurance Domain", "Workflow Automation", "System Integration"]
  },
  {
    title: "Configurable Workflow System",
    company: "Appian",
    period: "Feb 2023 – May 2023",
    type: "System Architecture",
    description: "Contributed to making key Appian Architectural Decisions to help construct complex, highly configurable Workflow systems.",
    highlights: [
      "Designed scalable workflow architecture",
      "Implemented complex business rule engine",
      "Enhanced system configurability"
    ],
    technologies: ["Appian", "System Architecture", "Workflow Engine", "Business Rules"]
  },
  {
    title: "Ticketing & Onboarding System",
    company: "Appian",
    period: "May 2022 – Jan 2023",
    type: "Enterprise Application",
    description: "Led the Appian Team to develop two record-centric applications. Integrated with DocuSign & IDP (Appian AI).",
    highlights: [
      "Built comprehensive ticketing system",
      "Integrated document processing with AI",
      "Streamlined onboarding workflows"
    ],
    technologies: ["Appian", "DocuSign", "Appian AI", "Document Processing"]
  },
  {
    title: "Insurance Underwriting System",
    company: "Appian",
    period: "Aug 2020 – Nov 2023",
    type: "Enterprise Application",
    description: "Designed process-backed system that integrated with multiple data sources and implemented complex business rules & routing.",
    highlights: [
      "Integrated with multiple insurance data sources",
      "Implemented sophisticated underwriting logic",
      "Enhanced decision-making processes"
    ],
    technologies: ["Appian", "Insurance Domain", "Data Integration", "Business Rules"]
  },
  {
    title: "Blogging Web Application",
    company: "DBMS",
    period: "Jan 2018 – May 2018",
    type: "Academic Project",
    description: "Designed a Database system and complex Schemes for the Blogging Web Application. Also, implemented a user social network.",
    highlights: [
      "Built comprehensive social networking features",
      "Designed scalable database architecture",
      "Implemented user interaction systems"
    ],
    technologies: ["JSP", "AJAX", "JavaScript", "MySQL", "jQuery", "Angular 2", "Bootstrap 4", "Eclipse", "Workbench"]
  },
  {
    title: "Porto Seguro's Safe Driver Prediction",
    company: "Kaggle (Machine Learning)",
    period: "Sep 2017 – Dec 2017",
    type: "AI/ML Project",
    description: "Built a model that predicts the probability that a driver will initiate an auto insurance claim in the next year.",
    highlights: [
      "Achieved high prediction accuracy",
      "Applied advanced ML techniques",
      "Insurance domain expertise"
    ],
    technologies: ["Machine Learning", "Python", "Data Science", "Insurance Analytics"],
    award: "Academic Recognition"
  }
];

const achievements = [
  {
    title: "Advance Applied GenAI/LLM/Agents Certifications",
    period: "Mar 2024 – Present",
    type: "certification"
  },
  {
    title: "Appian Certified Lead Developer (Level 3)",
    period: "May 2024 – Present",
    type: "certification"
  },
  {
    title: "Best Academic Project Award",
    period: "Jul 2017 – Apr 2017",
    type: "award",
    description: "Team came up with an innovative software solution for Internet and Smartphone reprogrammable market"
  },
  {
    title: "Member of CACR (Citizens Association for Child Rights)",
    period: "Feb 2015 – Feb 2016",
    type: "volunteer",
    description: "NGO where I volunteered for the Computer Literacy Program in MCGM schools to help underprivileged students learn about Computer Literacy and Digital Skills"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of enterprise applications, AI solutions, and innovative software projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm ${
                project.type === 'AI/ML Project' ? 'border-purple-500/30' : 
                project.type === 'Enterprise Application' ? 'border-orange-500/30' : 
                'border-border/50'
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2 mb-2">
                        <Lightbulb className={`w-5 h-5 ${
                          project.type === 'AI/ML Project' ? 'text-purple-400' : 'text-orange-400'
                        }`} />
                        {project.title}
                        {project.award && (
                          <Award className="w-4 h-4 text-yellow-500" />
                        )}
                      </CardTitle>
                      <p className="text-muted-foreground mb-2">{project.company}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${
                        project.type === 'AI/ML Project' ? 'border-purple-500/30 text-purple-400' :
                        project.type === 'Enterprise Application' ? 'border-orange-500/30 text-orange-400' :
                        'border-border/50'
                      } text-xs`}
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.period}
                    </Badge>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`w-fit ${
                      project.type === 'AI/ML Project' ? 'bg-purple-500/10 text-purple-300 border-purple-500/20' :
                      project.type === 'Enterprise Application' ? 'bg-orange-500/10 text-orange-300 border-orange-500/20' :
                      'bg-muted text-muted-foreground'
                    }`}
                  >
                    {project.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              project.type === 'AI/ML Project' ? 'bg-purple-400' : 'bg-orange-400'
                            }`} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-border/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements and Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Achievements & <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Recognition</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-md transition-all duration-300 bg-gradient-to-br from-card/50 to-muted/20 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      achievement.type === 'certification' ? 'bg-purple-500/20' :
                      achievement.type === 'award' ? 'bg-yellow-500/20' :
                      'bg-orange-500/20'
                    }`}>
                      {achievement.type === 'certification' ? (
                        <Award className={`w-4 h-4 text-purple-400`} />
                      ) : achievement.type === 'award' ? (
                        <Award className={`w-4 h-4 text-yellow-400`} />
                      ) : (
                        <Lightbulb className={`w-4 h-4 text-orange-400`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.period}</p>
                      {achievement.description && (
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}