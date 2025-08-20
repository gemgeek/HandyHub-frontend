import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h1>
      <p className="text-lg text-gray-600 mb-4">
        HandyHub makes finding the perfect artisan for your project simple and stress-free. Here's our three-step process:
      </p>

      <div className="space-y-8">
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-none w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Search for a Service</h2>
            <p className="text-gray-600">
              Use our homepage search bar to find the service you need and your location.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-none w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Connect with a Verified Artisan</h2>
            <p className="text-gray-600">
              Browse profiles of local artisans. Check their reviews and verification status to find trusted help.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-none w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get the Job Done!</h2>
            <p className="text-gray-600">
              Reach out to the artisan directly to get a quote and schedule the work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;