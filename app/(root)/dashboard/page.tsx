import React from 'react';
import Button from '@/components/ui/Button';
import LogoCloud from '@/components/ui/LogoCloud';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Dashboard
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Manage your account, projects, and settings
          </p>
        </div>
        
        <div className="mt-12">
          <div className="relative self-center bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
            {['overview', 'projects', 'settings'].map((tab) => (
              <Link key={tab} href={`/dashboard/${tab}`}>
                <button
                  type="button"
                  className="ml-0.5 relative w-1/3 border border-transparent text-zinc-400 rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <div className="bg-zinc-900 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Welcome back, User!</h3>
            <p className="text-zinc-300">Here's a quick overview of your account:</p>
            <ul className="list-disc list-inside text-zinc-300 mt-2">
              <li>Current Plan: Pro</li>
              <li>Usage: 75%</li>
              <li>Next billing date: June 1, 2023</li>
            </ul>
          </div>
          <div className="bg-zinc-900 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Recent Activity</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>Project "Alpha" created</li>
              <li>Invited team member: john@example.com</li>
              <li>Updated account settings</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <Link href="/pricing">
            <Button
              variant="slim"
              type="button"
              className="block w-full py-2 text-sm font-semibold text-center text-white rounded-md hover:bg-zinc-900"
            >
              Upgrade Your Plan
            </Button>
          </Link>
        </div>

        <LogoCloud />
      </div>
    </section>
  );
};

export default Dashboard;