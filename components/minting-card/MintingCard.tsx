"use client"
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { MinusCircle, PlusCircle } from "lucide-react";

const MintingCard: React.FC = () => {

  const bloc1Ref = useRef<HTMLDivElement>(null)
  const bloc2Ref = useRef<HTMLDivElement>(null)

  const [mintingAmount, setMintingAmount] = React.useState(1);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.screen.width / 2;
      const screenHeight = window.screen.height / 2.8;

      const centroX = e.clientX - screenWidth;
      const centroY = screenHeight - (e.clientY + 13);

      const degX = centroX * 0.02;
      const degY = centroY * 0.01;

      if (bloc1Ref.current) {
        bloc1Ref.current.style.transform = `perspective(1000px) rotateY(${degX}deg) rotateX(${degY}deg)`;
      }

      const pxX = centroX * 0.00; // You might want to adjust these multipliers
      const pxY = centroY * 0.00;

      // Apply styles to bloc2Ref
      if (bloc2Ref.current) {
        bloc2Ref.current.style.transform = `translateY(${pxY}px) translateX(${pxX}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup - remove event listener when component unmounts.
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex items-center justify-center" ref={bloc1Ref}>
      <div className={`relative h-[600px] w-[400px] rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}>
        <div ref={bloc2Ref} className="absolute inset-0 w-full h-full">
          <Image
            className="rounded-xl opacity-80 backdrop-blur-md"
            src="/images/nft-main-logo.png"
            alt="Shark Toon Treasure NFTs"
            loading='lazy'
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-start my-6">
          <div className="title font-extrabold text-3xl drop-shadow-xl text-sky-600">
            <span className="relative flex h-3 w-3 top-3 right-0 left-[175px] bottom-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            Minting LIVE
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
          <div className="minting-controls flex justify-between  space-x-2 w-full">
            <div className="minus-button">
              <Button className="w-full" onClick={() => mintingAmount === 1 ? setMintingAmount(1) : setMintingAmount(mintingAmount - 1)}>
                <MinusCircle className="w-4 h-4" />
              </Button>
            </div>
            <div className="input w-full">
              <Input className="text-center" placeholder="1" type="number" min={1} value={mintingAmount} />
            </div>
            <div className="plus-button">
              <Button className="w-full" onClick={() => setMintingAmount(mintingAmount + 1)}>
                <PlusCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="mint-button mt-2 w-full">
            <Button
              className="text-slate-200 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 py-1 w-full">
              Mint Now
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MintingCard;