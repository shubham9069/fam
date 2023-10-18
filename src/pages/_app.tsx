import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import UserContext,{UserProvider} from '../context/UserContext';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return  <>
  <UserProvider>
  <Component {...pageProps} /> 
  <Toaster />
  </UserProvider>

  </>
}
