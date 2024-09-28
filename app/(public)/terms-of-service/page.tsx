import React from 'react';
import Button from '@/components/ui/Button';
import LogoCloud from '@/components/ui/LogoCloud';
import Link from 'next/link';

const TermsOfServicePage = () => {
  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Terms of Service
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Last updated: May 30, 2023
          </p>
        </div>
        
        <div className="mt-12 space-y-8">
          {[
            { title: 'Agreement to Terms', content: 'By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.' },
            { title: 'Use License', content: 'Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.' },
            { title: 'Disclaimer', content: 'The materials on our website are provided on an \'as is\' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.' },
            { title: 'Limitations', content: 'In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.' },
            { title: 'Revisions and Errata', content: 'The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current.' },
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

export default TermsOfServicePage;