import '../styles/globals.css'
import{RouteNameProvider} from '../components/menu.context'

function MyApp({ Component, pageProps }) {
  return (
    <RouteNameProvider>
     <Component {...pageProps} />
    </RouteNameProvider>
  )
}

export default MyApp

