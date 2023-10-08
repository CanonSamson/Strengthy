import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="  pt-[60px]">{children}</main>
            <Footer />
        </>
    )
}