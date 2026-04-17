import { VarnishApp, getTheme } from "@allenai/varnish2";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import SEOHead from "./components/SEOHead";

const theme = getTheme({
  palette: {
    primary: { main: "#1772d0" },
    secondary: { main: "#f09228" },
  },
  typography: {
    fontFamily: "'Lato', Verdana, Helvetica, sans-serif",
  },
});

export default function App() {
  return (
    <HelmetProvider>
      <VarnishApp theme={theme}>
        <HashRouter>
          <SEOHead />
          <Layout />
        </HashRouter>
      </VarnishApp>
    </HelmetProvider>
  );
}
