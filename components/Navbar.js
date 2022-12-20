import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logoWhite from "../public/logos/white-logo.png";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import Navmenu from "./Navmenu";
import useCurrentUser from "../utils/useCurrentUser";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();

  const currentUser = useCurrentUser();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <div className="bg-coworkblue start-here-btn">
        <div className="flex items-center justify-between border-b  cursor-pointer w-full py-6 flex-wrap border-white lg:border-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px">
                  <li className="mb-8">
                    {account && !currentUser && (
                      <Link href="/create-profile" passHref>
                        <a className="btn btn-primary">Create Profile</a>
                      </Link>
                    )}
                  </li>
                  <li className="my-1">
                    <Link href="/lottery" passHref>
                      <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                        Lottery
                      </a>
                    </Link>
                  </li>
                  <li className=" my-1 ">
                    <Link href="/how-it-works" passHref>
                      <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                        How it Works
                      </a>
                    </Link>
                  </li>
                  <li className="my-1 ">
                    <Link href="/members" passHref>
                      <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                        Members
                      </a>
                    </Link>
                  </li>
                  <li className=" my-1 ">
                    <Link href="/events" passHref>
                      <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                        Events
                      </a>
                    </Link>
                  </li>
                  <li className=" my-1 ">
                    <Link href="https://office.onlinecowork.com" passHref>
                      <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                        Join Discord Community
                      </a>
                    </Link>
                  </li>

                  <li className="mt-10">
                    {account ? (
                      <Navmenu
                        account={account}
                        disconnect={() => disconnect()}
                      />
                    ) : (
                      <ConnectButton />
                    )}
                  </li>
                </ul>
              </div>
            </section>

            <ul className="DESKTOP-MENU hidden space-x-3 lg:flex">
              <li>
                <Link href="/lottery" passHref>
                  <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                    Lottery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" passHref>
                  <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                    How it Works
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/members" passHref>
                  <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                    Members
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                    Events
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://office.onlinecowork.com" passHref>
                  <a className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-sm font-light rounded-md text-coworkdarkbeige hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                    Join Discord Community
                  </a>
                </Link>
              </li>
              <li>
                {account && !currentUser && (
                  <Link href="/create-profile" passHref>
                    <a className="inline-flex items-center px-4 py-2 mr-4 border-transparent text-sm font-light rounded-md text-coworkdarkbeige border border-coworkdarkbeige hover:bg-coworkdarkbeige hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                      Start Here
                    </a>
                  </Link>
                )}
              </li>
              <li>
                {account ? (
                  <Navmenu account={account} disconnect={() => disconnect()} />
                ) : (
                  <ConnectButton />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  );
}
