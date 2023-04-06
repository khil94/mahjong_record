import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GNB from "../layouts/GNB";

export default function App({ Component, pageProps }: AppProps) {
  // const getLayout = Component.getLayout || ((page) => page);
  return (
    <GNB>
      <Component {...pageProps} />;
    </GNB>
  );
}
