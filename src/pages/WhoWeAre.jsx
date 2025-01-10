/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import images (make sure to add these to your assets folder)
import heroImage from "../assets/who-we-are-hero.jpg";
import founderImage from "../assets/founder.jpeg";
import value1Image from "../assets/value1.jpeg";
import value2Image from "../assets/value2.jpeg";
import value3Image from "../assets/value3.jpeg";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img
          src={heroImage}
          alt="Our Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Pioneering the future of c-store management with passion,
              innovation, and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src={founderImage}
                alt="Founder"
                className="rounded-full w-64 h-64 object-cover mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Founded in 2005 by Jane Doe, our company was born out of a
                vision to revolutionize the convenience store industry. With
                over 15 years of experience in retail management, Jane
                recognized the need for a comprehensive solution that could
                address the unique challenges faced by c-store owners.
              </p>
              <p className="text-lg mb-4">
                What started as a small team of passionate individuals has grown
                into a leading force in c-store management solutions. Today, we
                serve thousands of stores across the nation, continuously
                innovating and adapting to meet the evolving needs of our
                clients.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More About Our Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Innovation"
              description="We constantly push the boundaries of what's possible in c-store management technology."
              image={value1Image}
            />
            <ValueCard
              title="Integrity"
              description="We believe in transparency, honesty, and ethical business practices in all our dealings."
              image={value2Image}
            />
            <ValueCard
              title="Customer-Centric"
              description="Our clients' success is our success. We're dedicated to providing unparalleled support and solutions."
              image={value3Image}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Jane Doe"
              position="Founder & CEO"
              bio="With over 20 years of experience in retail and technology, Jane leads our company's vision and strategy."
            />
            <TeamMember
              name="John Smith"
              position="CTO"
              bio="John brings 15 years of software development expertise, driving our technological innovations."
            />
            <TeamMember
              name="Emily Brown"
              position="COO"
              bio="Emily's background in operations management ensures our solutions are efficient and scalable."
            />
            <TeamMember
              name="Michael Lee"
              position="Head of Customer Success"
              bio="Michael's passion for client satisfaction guides our customer-centric approach."
            />
            <TeamMember
              name="Sarah Johnson"
              position="Head of Product"
              bio="Sarah's deep understanding of the c-store industry shapes our product roadmap."
            />
            <TeamMember
              name="David Wilson"
              position="CFO"
              bio="David's financial acumen helps drive our growth and sustainability."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8">
            We're always looking for talented individuals who are passionate
            about revolutionizing the c-store industry. Explore our career
            opportunities and be part of our journey.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-lg">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ title, description, image }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

const TeamMember = ({ name, position, bio }) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <Badge className="mb-3">{position}</Badge>
      <p className="text-gray-600">{bio}</p>
    </Card>
  );
};

export default WhoWeAre;
