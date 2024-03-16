import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
    <Head>
    <title>{`${process.env.NEXT_PUBLIC_SITENAME}`}</title>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="author" content="Vlascut"/>
    <meta property="og:image" content="" />
    <meta property="og:title" content="" />
    <meta property="og:url" content=""/>
    <meta property="og:site_name" content=""/>
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="" />
    <meta name="msapplication-TileColor" content=""/>
    <meta name="theme-color" content=""/>
    <link rel="icon" href="/favicon.ico" />
    </Head>
      {children}
    </>
  )
}