import type { AppProps } from 'next/app'
import ContextoGlobal from '../context/ApolloProvider'
function MyApp ({ Component, pageProps }: AppProps) {
  return <>
      <ContextoGlobal>
        <Component {...pageProps} />
      </ContextoGlobal>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size:16px;
          color:black;
          text-decoration:none;
          font-family:-apple-system,BlinkMacSystemFont,"segoe ui",Roboto,Helvetica,Arial,sans-serif,"apple color emoji","segoe ui emoji","segoe ui symbol";
        }
        ul{
          list-style:none
        }
      `}</style>
    </>
  
}

export default MyApp
