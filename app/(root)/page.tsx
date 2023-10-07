import React from "react";
import MintingCard from "@/components/minting-card/MintingCard";
import Image from "next/image";
import { BoxIcon } from "lucide-react";

// Main component function
export default function Home() {
  return (
    <main className="container mx-auto my-10 p-4 md:grid md:grid-cols-2">
      <div className="nft-details-container">

        {/* Title Section */}
        <div className="header-title mb-6">
          <h1 className="text-3xl font-bold">Discover, Collect, & Sell</h1>
          <h1 className="text-center sm:text-left font-extrabold text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Shark Toon Treasure NFTs
          </h1>
        </div>

        {/* MintingCard for small screens */}
        <div className="nft-minting-card my-4 md:hidden">
          <MintingCard />
        </div>

        {/* Features List */}
        <div className="features-list my-20">


          <div className="flex items-center space-x-2 my-4">
            <div className="icon">
              <BoxIcon className="w-4 h-4" />
            </div>
            <div className="text">Benefit of early access to future collections and exclusive access to a range of perks.</div>
          </div>
          <div className="flex items-center space-x-2 my-4">
            <div className="icon">
              <BoxIcon className="w-4 h-4" />
            </div>
            <div className="text">Receive invitations to exclusive events of a passionate community.</div>
          </div>

          <div className="flex items-center space-x-2 my-4">
            <div className="icon">
              <BoxIcon className="w-4 h-4" />
            </div>
            <div className="text">Opportunity to participate in community-driven decision-making processes.</div>
          </div>

          <div className="flex items-center space-x-2 my-4">
            <div className="icon">
              <BoxIcon className="w-4 h-4" />
            </div>
            <div className="text">By owning a Rugfreecoins NFT, Become a custodian of one of these extraordinary digital treasures.</div>
          </div>

          <div className="flex items-center space-x-2 my-4">
            <div className="icon">
              <BoxIcon className="w-4 h-4" />
            </div>
            <div className="text">Support the organisations dedicated to eagle conservation and habitat restoration initiatives.</div>
          </div>

          <div className="flex items-center space-x-2 my-4">
            <div className="icon">
              <BoxIcon className="w-4 h-4" />
            </div>
            <div className="text">become a part of a passionate community that appreciates the natural world and the artistry it inspires.</div>
          </div>

        </div>

        {/* Sponsors Section */}
        <div className="sponsor-list my-20">
          <div className="title text-3xl font-bold mb-4">Sponsored by</div>
          <div className="logo-list grid grid-cols-2 md:grid-cols-3 items-center gap-4 my-4">
            <Image
              className="rounded-xl"
              src="/images/metamask.png"
              alt="metamask"
              width={150}
              height={100}
            />
            <Image
              className="rounded-xl"
              src="/images/trust-wallet.png"
              alt="trust-wallet"
              width={150}
              height={100}
            />

            <Image
              className="rounded-xl"
              src="/images/wallet-connect.png"
              alt="wallet-connect"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* MintingCard for medium and larger screens */}
      <div className="nft-minting-card my-4 hidden md:block">
        <MintingCard />
      </div>
    </main>
  );
}
