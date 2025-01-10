/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Import images (make sure to add these to your assets folder)
import pricebookImage from "../assets/pricebook.jpeg";
import paperworkImage from "../assets/paperwork.jpeg";
import fuelInvoiceImage from "../assets/fuel-invoice.jpeg";
import reportingImage from "../assets/reporting.jpg";
import teamImage from "../assets/team.jpeg";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionizing C-Store Management
          </h1>
          <p className="text-xl mb-8">
            Streamlining operations, maximizing efficiency, and boosting
            profitability for convenience stores nationwide.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-lg">
            Explore Our Solutions
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Price Book Management"
              description="Optimize your pricing strategy with our advanced Price Book Management system. Track competitors, analyze market trends, and adjust prices in real-time to maximize profits."
              image={pricebookImage}
              stats={[
                { value: "10,000+", label: "Items Managed" },
                { value: "15%", label: "Avg. Profit Increase" },
              ]}
            />
            <ServiceCard
              title="Digital Paperwork Solutions"
              description="Say goodbye to paper clutter. Our digital paperwork system streamlines your documentation process, ensuring compliance and easy access to critical information."
              image={paperworkImage}
              stats={[
                { value: "50%", label: "Time Saved" },
                { value: "99.9%", label: "Accuracy Rate" },
              ]}
            />
            <ServiceCard
              title="Fuel Invoice Processing"
              description="Automate your fuel invoice management with our cutting-edge system. Track deliveries, reconcile invoices, and optimize your fuel inventory with ease."
              image={fuelInvoiceImage}
              stats={[
                { value: "$1M+", label: "Monthly Transactions" },
                { value: "24h", label: "Avg. Processing Time" },
              ]}
            />
            <ServiceCard
              title="Management Reporting"
              description="Gain actionable insights with our comprehensive reporting tools. Visualize key performance indicators, track sales trends, and make data-driven decisions."
              image={reportingImage}
              stats={[
                { value: "100+", label: "Custom Report Templates" },
                { value: "Real-time", label: "Data Updates" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={teamImage}
                alt="Our Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">
                Expertise You Can Trust
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Over 20 years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Dedicated support team available 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Customizable solutions to fit your unique needs</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Continuous innovation and feature updates</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <blockquote className="text-xl italic">
            "Implementing this c-store management system has transformed our
            operations. We've seen a 30% increase in efficiency and a
            significant boost in our bottom line. It's been a game-changer for
            our business."
          </blockquote>
          <p className="mt-4 font-semibold">
            John Doe, CEO of XYZ Convenience Stores
          </p>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description, image, stats }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WhatWeDo;
