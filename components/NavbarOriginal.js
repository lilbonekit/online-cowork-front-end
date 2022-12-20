import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Navmenu from "./Navmenu";
import DirectoriesMenu from "./DirectoriesMenu";
import Image from "next/image";
import logoWhite from "../public/logos/white-logo.png";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { ProfilesContext } from "../context/profiles";

export default function NavbarMain() {
  const [mounted, setMounted] = useState(false);
  const { profiles } = useContext(ProfilesContext);
  const { data: account, isSuccess } = useAccount();
  const { disconnect } = useDisconnect();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const profile = profiles?.find(
    (p) => isSuccess && account?.address === p.fields.walletAddress
  );

  useEffect(() => {
    setMounted(true);
  }, []);
  console.log({ profile });

  return (
    mounted && (
      <header className="bg-coworkblue box-shadow-n">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex flex-wrap items-center justify-between border-b border-white lg:border-none">
            <div className="flex items-center cursor-pointer">
              <Link href="/" passHref>
                <Image
                  src={logoWhite}
                  alt="logo"
                  width={170}
                  height={60}
                  // blurDataURL="data:..." automatically provided
                  placeholder="blur"
                />
              </Link>
            </div>
            <div className="ml-10 space-x-4 flex items-center">
              <Link href="/how-it-works" passHref>
                <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-medium rounded-md text-coworkdarkbeige hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  How it Works
                </a>
              </Link>
              <Link href="/members" passHref>
                <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-medium rounded-md text-coworkdarkbeige hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Members
                </a>
              </Link>
              {/* <DirectoriesMenu /> */}
              <Link href="https://office.onlinecowork.com" passHref>
                <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-medium rounded-md text-coworkdarkbeige hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Join Discord Community
                </a>
              </Link>
              {account && !profile && (
                <Link href="/create-profile" passHref>
                  <a className="inline-flex items-center px-4 py-2 border-transparent text-sm font-medium rounded-md text-coworkdarkbeige border border-indigo-100 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Start Here
                  </a>
                </Link>
              )}

              {account ? (
                <Navmenu account={account} disconnect={() => disconnect()} />
              ) : (
                <ConnectButton />
              )}
            </div>
          </div>
        </nav>
      </header>
    )
  );
}
