import "@/styles/globals.css";
import Layout from "./layout/Layout";  // Default import
export default function App({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /></Layout>;
}
