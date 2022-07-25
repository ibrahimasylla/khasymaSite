import '@/public/css/bootstrap.min.css'
import '@/public/css/boxicons.min.css'
import '@/public/css/flaticon.css'
import "@/public/css/slick.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import '@/public/css/style.css'
import '@/public/css/responsive.css'
import '@/public/css/rtl.css'

// Multicolor if you want this color comment out 
// import '@/public/css/colors/brink-pink-style.css'
// import '@/public/css/colors/pink-style.css'
// import '@/public/css/colors/purple-style.css'  

import Layout from '@/components/_App/Layout'
import { ToastProvider } from 'react-toast-notifications'


export default function App({ Component, pageProps }) {

    return (
        <ToastProvider 
            placement = "bottom-left"
            autoDismissTimeout={6000}
            autoDismiss
        >

                <Layout />
                <Component {...pageProps} />

        </ToastProvider>
    )
}
