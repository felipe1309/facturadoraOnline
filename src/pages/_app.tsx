import type { AppProps } from 'next/app'
import ContextoGlobal from '../context/ApolloProvider'
function MyApp ({ Component, pageProps }: AppProps) {
  return <>
      <ContextoGlobal>
        <Component {...pageProps} />
      </ContextoGlobal>
    </>
  
}

export default MyApp
