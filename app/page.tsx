import React from 'react';
import Button from '@/components/ui/Button';
import LogoCloud from '@/components/ui/LogoCloud';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Welcome to Our Platform
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Empower your projects with our cutting-edge tools and services.
            Start for free and scale as you grow.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Link href="/signin/signup">
              <Button
                variant="slim"
                type="button"
                className="px-8 py-2 text-sm font-semibold text-white rounded-md hover:bg-zinc-900"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                variant="slim"
                type="button"
                className="px-8 py-2 text-sm font-semibold text-white rounded-md hover:bg-zinc-900"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white sm:text-center">
            Key Features
          </h2>
          <div className="mt-12 space-y-0 sm:mt-16 flex flex-wrap justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
            {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 flex-1 basis-1/3 max-w-xs"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold leading-6 text-white">
                    {feature}
                  </h3>
                  <p className="mt-4 text-zinc-300">
                    Description of {feature.toLowerCase()} and its benefits to the user.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white sm:text-center">
            Why Choose Us
          </h2>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center">
            We provide top-notch services tailored to your needs. Our platform is designed to help you succeed.
          </p>
        </div>

        <LogoCloud />
      </div>
    </section>
  );
};

export default LandingPage;