import React from 'react';
import Button from '@/components/ui/Button';
import LogoCloud from '@/components/ui/LogoCloud';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Last updated: May 30, 2023
          </p>
        </div>
        
        <div className="mt-12 space-y-8">
          {[
            { title: 'Information We Collect', content: 'We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.' },
            { title: 'How We Use Your Information', content: 'We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.' },
            { title: 'Will Your Information Be Shared With Anyone?', content: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.' },
            { title: 'Do We Use Cookies And Other Tracking Technologies?', content: 'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.' },
            { title: 'How Long Do We Keep Your Information?', content: 'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.' },
          ].map((section, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
              <p className="text-zinc-300">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:flex sm:flex-col sm:align-center">
          <Link href="/contact">
            <Button
              variant="slim"
              type="button"
              className="block w-full sm:w-auto py-2 px-8 text-sm font-semibold text-center text-white rounded-md hover:bg-zinc-900"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        <LogoCloud />
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;