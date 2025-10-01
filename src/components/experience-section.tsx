import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Lead Appian Developer | AI Agent Engineer",
    company: "Encora Technology Group LLC",
    location: "Remote",
    period: "Jun 2022 – Present",
    type: "Current Role",
    responsibilities: [
      "Leading Appian development and Quality analysis to develop quality applications on time",
      "Architect complex solutions and data models needed to support the application features",
      "Identified and implemented AI-driven automation and orchestration to modernize workflows and boost efficiency",
      "Advise the client on architectural decisions and estimate timelines for the project completion",
      "Perform Appian Administrative tasks like configuring integrations and setting up environments",
      "Conduct daily interactions with the business to understand the changing requirements and demonstrate the progress",
      "Conduct technical interviews to onboard new talent",
      "Mentor junior developers and conduct Appian Training sessions"
    ]
  },
  {
    title: "Senior Software Developer",
    company: "Encora Technology Group LLC",
    location: "Remote",
    period: "Feb 2020 – Jun 2022",
    type: "Previous Role",
    responsibilities: [
      "Working on the Health application development in agile team, mainly on the Appian Platform",
      "Integrating the data-heavy application with various REST and SOAP-based APIs from their different data sources",
      "Designing and implementing dynamic, scalable, and reusable User Interfaces as per business requirements by closely working with business analysts in working sessions",
      "Working with the Data architect to develop the data models to support application functionality",
      "Designing Process Models in Appian Designer to support the underwriting process workflow",
      "Meeting on a daily basis with the business",
      "Conducting client demonstrations",
      "Managing all the project tasks and stories using JIRA",
      "Training for higher Appian Certification and other Development-related certifications"
    ]
  },
  {
    title: "Appian Designer",
    company: "IPD Solutions (Now Encora)",
    location: "Remote",
    period: "Aug 2019 – Feb 2020",
    type: "Previous Role",
    responsibilities: [
      "Developed Business Applications in the Insurance domain",
      "Building an automated system process in Appian",
      "Conducting research and development efforts to explore new and upcoming solutions",
      "Training for higher Appian Certification and other Development-related certifications",
      "Developing Intellectual property (intellectual property) tools to help with other development efforts",
      "Develop Applications to be put on the Appian App Market"
    ]
  },
  {
    title: "Graduate Teaching Assistant",
    company: "CSC 6500 – OS Department (WSU)",
    location: "Detroit, MI",
    period: "Aug 2018 – Dec 2018",
    type: "Academic Role",
    responsibilities: [
      "Assist the students with any difficulties in their TCS class",
      "Conduct exams",
      "Help the professor with grading assignments and examinations"
    ]
  }
];

const internships = [
  {
    title: "Full-Stack Software Developer Intern",
    company: "Sumitomo",
    location: "Remote",
    period: "May 2018 – Aug 2018",
    responsibilities: [
      "Developed a Project Tracking Web Application as a permanent automated solution to the existing traditional project analysis system for advanced time and cost analysis and tracking of the project-related data",
      "Build the web application using PHP",
      "Integrated with Active Directory for seamless login for the users",
      "Developed the user interface using AJAX, Angular 4, HTML 5, CSS 3, and Bootstrap 4",
      "Architected the data model to support the entire application in SQL Server 14",
      "Developed the application using Agile Methodology"
    ]
  },
  {
    title: "Teaching Assistant",
    company: "CSC 4992 – Computer Science Department (WSU)",
    location: "Detroit, MI",
    period: "Jan 2018 – May 2018",
    responsibilities: [
      "Assist the students with any difficulties in Python",
      "Conduct exams",
      "Help the professor with grading assignments and examinations"
    ]
  },
  {
    title: "Full-Stack Web Developer",
    company: "Agniket",
    location: "Remote",
    period: "Feb 2016 – Aug 2017",
    responsibilities: [
      "Developed a website that is driven by a smart allocation system, which is designed to ease the management of supply between Farmers and Retailers",
      "Designed a region-based allocation system that checked for minimum distance to cut down the transportation cost",
      "Built using UI/UX using HTML, CSS, JavaScript, Angular 2, and Bootstrap",
      "Developed the system to run on PHP",
      "Implemented necessary security measures",
      "Built the data model to support the entire application in SQL Server 12"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Progressive career in software development with focus on enterprise solutions and AI automation
          </p>
        </motion.div>

        {/* Main Experiences */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`${exp.type === 'Current Role' 
                ? 'border-purple-500/40 bg-gradient-to-r from-purple-500/5 to-orange-500/5' 
                : 'border-border/50'
              } hover:shadow-lg transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl flex items-center gap-3">
                        <Building className="w-5 h-5 text-purple-400" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground mt-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge 
                        variant={exp.type === 'Current Role' ? 'default' : 'secondary'}
                        className={exp.type === 'Current Role' 
                          ? 'bg-gradient-to-r from-purple-600 to-orange-600 text-white' 
                          : ''
                        }
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Internships & <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Early Career</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="w-4 h-4 text-orange-400" />
                    {internship.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{internship.company}</p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="border-orange-500/30 text-orange-400 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {internship.period}
                      </Badge>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {internship.location}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {internship.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-purple-400 mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}