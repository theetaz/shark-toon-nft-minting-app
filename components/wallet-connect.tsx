"use client"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

export const RainbowKitConnectButton: React.FC<any> = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    className='text-slate-200 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 py-1 w-full'>
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal}
                    className='text-slate-200 bg-gradient-to-r from-rose-700 to-pink-600'
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <div className='relative flex justify-center space-x-2'>

                  <Button
                    variant='outline'
                    onClick={openChainModal}
                    className='flex items-center justify-center rounded-full'
                  >

                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl || ""}
                            width={12}
                            height={12}
                          />
                        )}
                      </div>
                    )}


                  </Button>

                  <Button onClick={openAccountModal} variant="outline" className='relative rounded-full'>
                    <span className="absolute flex h-3 w-3 top-0 right-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom >
  );
};