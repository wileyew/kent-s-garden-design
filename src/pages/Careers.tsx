import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteContent";

// Sample job openings
const jobOpenings = [
  {
    id: 1,
    title: "Landscape Designer",
    type: "Full-time",
    location: "Northern Virginia area",
    description: "We're seeking a creative landscape designer with experience in residential garden design and a passion for sustainable practices.",
    requirements: [
      "3+ years experience in landscape design",
      "Proficiency with design software (AutoCAD, SketchUp)",
      "Strong plant knowledge, especially Pacific Northwest natives",
      "Excellent client communication skills",
    ],
  },
  {
    id: 2,
    title: "Garden Maintenance Specialist",
    type: "Full-time / Part-time",
    location: "Northern Virginia area",
    description: "Join our maintenance team to help keep our clients' gardens beautiful year-round.",
    requirements: [
      "1+ years garden maintenance experience",
      "Knowledge of plant care and pruning techniques",
      "Valid driver's license",
      "Ability to work outdoors in all weather",
    ],
  },
  {
    id: 3,
    title: "Installation Crew Lead",
    type: "Full-time",
    location: "Northern Virginia area",
    description: "Lead our installation team in bringing landscape designs to life.",
    requirements: [
      "5+ years landscape installation experience",
      "Leadership and project management skills",
      "Knowledge of hardscaping and irrigation",
      "Ability to read landscape plans",
    ],
  },
];

const benefits = [
  "Competitive salary",
  "Health insurance",
  "Paid time off",
  "Professional development opportunities",
  "Company equipment and vehicles",
  "Supportive team environment",
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build a rewarding career helping create beautiful, sustainable gardens
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">Why Work at Kent's Garden LLC</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              We're a family-owned business that values craftsmanship, creativity, and care for the environment. 
              Join a team that's passionate about transforming outdoor spaces and making a positive impact in our community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Open Positions</h2>

            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">{job.type}</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Button asChild className="mt-4 md:mt-0 bg-primary hover:bg-primary-hover">
                        <a href={`mailto:${siteConfig.company.email}?subject=Application for ${job.title}`}>
                          Apply Now
                        </a>
                      </Button>
                    </div>

                    <p className="text-muted-foreground mb-4">{job.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Don't See the Right Position?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always interested in meeting talented individuals who share our passion for gardens. 
              Send us your resume and let us know how you'd like to contribute to our team.
            </p>
            <Button asChild size="lg" variant="outline" className="border-2">
              <a href={`mailto:${siteConfig.company.email}?subject=General Application`}>
                <Mail className="mr-2 h-5 w-5" />
                Send General Application
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;