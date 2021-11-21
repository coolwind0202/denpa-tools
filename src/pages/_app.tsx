import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import { AutoLayout } from "../components/layout/autoLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AutoLayout>
      <Component {...pageProps} />
    </AutoLayout>
  );
}

export default MyApp
