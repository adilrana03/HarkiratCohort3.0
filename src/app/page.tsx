"use client"; // Add this directive at the top

import React, { useMemo } from "react";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import {
	WalletModalProvider,
	WalletMultiButton,
	WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { SendTokens } from "@/components/Wallet";

export default function Home() {
	const network = WalletAdapterNetwork.Devnet;
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={[]} autoConnect>
				<WalletModalProvider>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}>
						<WalletMultiButton />
						<WalletDisconnectButton />
					</div>
					<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
						<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
							<SendTokens />
						</main>
					</div>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}
