import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import '@/styles/responsive.css'
import '/custom.js'
import { useEffect } from 'react';
import { ThemeProvider } from "@strapi/design-system/ThemeProvider";
import { lightTheme } from "@strapi/design-system/themes";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
  }, []);
  return <ThemeProvider theme={lightTheme}><Component {...pageProps} /></ThemeProvider>

}

export default MyApp
