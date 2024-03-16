import "@/styles/globals.css";
import Layout from "@/components/layout";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Unbounded } from "next/font/google";
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-unbounded: ${unbounded.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <NextNProgress
        color="hsl(var(--foreground))"
        startPosition={0.3}
        stopDelayMs={100}
        height={5}
        showOnShallow={true}
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
