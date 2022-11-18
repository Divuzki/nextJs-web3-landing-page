import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { AnimatePresence } from "framer-motion";
import NavbarComponent from "./NavbarComponent";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div class="w-[108rem] flex-none flex justify-end">
          <picture>
            <source
              srcset="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              type="image/avif"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
              alt=""
              class="w-[90rem] flex-none max-w-none"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div className="w-screen h-auto flex flex-col antialiased text-slate-400 bg-slate-900">
        <Head>
          <title>BotBuddyzNft</title>
          <meta name="description" content="Generated by create next app" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AnimatePresence initial={false} mode="wait">
          <NavbarComponent />
          <main className="mt-20 md:px-4 px-2 py-2 w-full text-white font-semibold overflow-x-hidden">
            <div className="shadow-lg py-2">
              <div
                id="cr-widget-marquee"
                data-coins="solana,ethereum,tether,bitcoin,binance-usd,marinade,lido-for-solana"
                data-theme="dark"
                data-show-symbol="true"
                data-show-icon="true"
                data-show-period-change="true"
                data-period-change="24H"
                data-api-url="https://api.cryptorank.io/v0"
              >
                <script
                  src="https://cryptorank.io/widget/marquee.js"
                  async
                ></script>
              </div>
            </div>
            {children}
          </main>
        </AnimatePresence>
      </div>
    </>
  );
};

export default BaseLayout;