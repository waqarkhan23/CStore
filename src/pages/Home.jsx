/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import heroImage from "../assets/hero.jpg";
import dataImage from "../assets/data.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Streamline Your C-Store Management
            </h1>
            <p className="text-xl mb-8">
              Efficient solutions for Price Book, Paperwork, Fuel Invoices, and
              Management Reporting
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Price Book Management"
              description="Easily manage and update your store's pricing information."
              stat="5,000+"
              statDescription="Items Managed"
            />
            <FeatureCard
              title="Digital Paperwork"
              description="Streamline your paperwork process with our digital solutions."
              stat="60%"
              statDescription="Time Saved"
            />
            <FeatureCard
              title="Fuel Invoice Tracking"
              description="Efficiently track and manage your fuel invoices in one place."
              stat="$500k+"
              statDescription="Monthly Transactions"
            />
            <FeatureCard
              title="Management Reporting"
              description="Generate comprehensive reports for informed decision-making."
              stat="24/7"
              statDescription="Data Access"
            />
          </div>
        </div>
      </section>

      {/* Data Entry Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={dataImage}
              alt="Data Entry"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Effortless Data Entry</h2>
            <p className="text-lg mb-6">
              Our intuitive interface makes daily paperwork and management tasks
              a breeze. Quickly input and access critical data, from inventory
              levels to sales figures, all in one centralized platform.
            </p>
            <ul className="list-disc list-inside mb-8">
              <li>User-friendly forms for quick data input</li>
              <li>Real-time data validation and error checking</li>
              <li>Automated calculations and report generation</li>
              <li>Secure cloud storage for all your important information</li>
            </ul>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg">
              Explore Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description, stat, statDescription }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="border-t pt-4">
        <p className="text-3xl font-bold text-blue-600">{stat}</p>
        <p className="text-sm text-gray-500">{statDescription}</p>
      </div>
    </div>
  );
};

export default Home;
