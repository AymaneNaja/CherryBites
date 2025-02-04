// components/Footer.js
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: "400"
})
const Footer = () => {
    return (


        <footer className="footer bg-red-600 text-white p-10">
            <div className={` font-semibold ${abril.className}`}>
                <h1 className='text-white text-2xl '>CherryBites</h1>

            </div>

            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Recepies</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>


    );
};

export default Footer;
