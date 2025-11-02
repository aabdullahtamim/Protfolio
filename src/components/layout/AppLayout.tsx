
import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

export default function AppLayout() {
    return (
        <div>
            <div className='px-10'>
                <Navbar />
            </div>

            <Outlet />

            <Footer />
        </div>
    )
}
