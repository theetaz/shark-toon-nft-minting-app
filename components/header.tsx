"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { RainbowKitConnectButton } from './wallet-connect';
import { Button } from './ui/button';
import { useConfigStore } from '@/stores/configs';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {

  const toggleSidebar = useConfigStore((state) => state.toggleSidebar)

  return (
    <header className="navigation">
      <nav className='py-4 container'>
        <div className='hidden md:grid grid-cols-3 uppercase font-bold'>
          <div className='section-one flex justify-between items-center'>
            <Link href="/" className='hover:scale-110 hover:text-[#3A9BBB] duration-300'>Home</Link>
            <Link href="/" className='hover:scale-110 hover:text-[#3A9BBB] duration-300'>Utility</Link>
            <Link href="/" className='hover:scale-110 hover:text-[#3A9BBB] duration-300'>Roadmap</Link>
          </div>
          <div className='section-logo flex justify-center'>
            <Image
              src="/images/stt-logo.svg"
              alt="Shark Toon Treasure"
              width={300}
              height={100}
            />
          </div>
          <div className='section-wallet-connect flex justify-between items-center'>
            <Link href="/" className='hover:scale-110 hover:text-[#3A9BBB] duration-300'>About</Link>
            <Link href="/" className='hover:scale-110 hover:text-[#3A9BBB] duration-300'>Team</Link>
            <RainbowKitConnectButton />
          </div>
        </div>

        <div className='md:hidden grid grid-cols-2 uppercase font-bold'>
          <div className='section-logo flex justify-start'>
            <Image
              src="/images/stt-logo.svg"
              alt="Shark Toon Treasure"
              width={300}
              height={100}
            />
          </div>
          <div className='section-side-menu flex justify-end items-center'>
            <Button variant='outline' size='icon' onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
