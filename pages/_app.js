import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { ToastContainer } from "react-toastify";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { ItemsProvider } from "../context/items";
import { ProfilesProvider } from "../context/profiles";
import { LotteryProvider } from "../context/lottery";
import { EventsProvider } from "../context/events";
import Layout from "../components/Layout";
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "../styles/loader.css";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;

const { chains, provider } = configureChains(
  [chain.polygonMumbai, chain.polygon],
  [alchemyProvider({ alchemyId }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Online CoWork",
  chains,
});

const wagmiClient = createClient({
  // autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} coolMode>
          <ApolloProvider client={client}>
            <LotteryProvider>
              <ItemsProvider>
                <EventsProvider>
                  <ProfilesProvider>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                    <ToastContainer
                      position="bottom-right"
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="colored"
                    />
                  </ProfilesProvider>
                </EventsProvider>
              </ItemsProvider>
            </LotteryProvider>
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
