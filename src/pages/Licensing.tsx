import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle2 } from "lucide-react";

const Licensing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent-light to-background">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Licensing & Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kent's Garden LLC is fully licensed, insured, and committed to professional excellence
          </p>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">Our Licenses & Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-8 w-8 text-accent" />
                    <h3 className="text-2xl font-serif font-bold">VA State Corporate Commission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our Virginia State Corporate Commission documentation will be uploaded here.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-8 w-8 text-accent" />
                    <h3 className="text-2xl font-serif font-bold">Certificate of Insurance (COI)</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our Certificate of Insurance will be uploaded here.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 md:col-span-2">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-8 w-8 text-accent" />
                    <h3 className="text-2xl font-serif font-bold">Class B License Certificate</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our Class B License Certificate will be uploaded here once obtained. We are scheduled to take our contractor exams and specialty exam within the next 2 months.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Professional Standards</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Kent's Garden LLC maintains all required licenses and insurance to operate legally and safely in Virginia. 
                We are committed to meeting and exceeding all state and local requirements for landscaping and hardscaping contractors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Code Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Professional Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licensing;


