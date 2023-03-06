import { Link } from 'react-router-dom';
import './../style/style.scss';
const Footer = () => {
    return (
        <footer className='footer pt-5'>
            <div className='container footer-container py-5'>
                <div className='row'>
                    <div className='col-xl-3 col-md-6 mb-xl-0 mb-md-4 mb-3'>
                        <h3 className='text-center'>Social</h3>
                        <div className='d-flex justify-content-center align-items-center'>
                        <ul className='footer-menu'>
                            <li>
                                <Link>
                                    <div className='d-flex align-items-center'>
                                        <div className='google-icon justify-content-center d-flex align-items-center'><img className='img-fluid' src="./../images/facebook 1.png" alt="facebook" /></div>
                                        <span className='ms-2'>facebook</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <div className='d-flex   align-items-center'>
                                        <div className='google-icon justify-content-center d-flex align-items-center'><img className='img-fluid' src="./../images/linkedin 1.png" alt="linkedin" /></div>
                                        <span className='ms-2'>linkedin</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <div className='d-flex align-items-center'>
                                        <div className='google-icon justify-content-center d-flex align-items-center'><img className='img-fluid' src="./../images/search 1.png" alt="google" /></div>
                                        <span className='ms-2'>Google</span>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-xl-0 mb-md-4 mb-3'>
                        <h3 className='text-center ps-4'>Explore</h3>
                        <div className="d-flex justify-content-center align-items-center">
                            <ul className="explore-menu footer-menu">
                                <li><Link>Services</Link> </li>
                                <li><Link>Team</Link></li>
                                <li><Link>Clients</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-xl-0 mb-md-4 mb-3'>
                        <h3 className='text-center'>Contact</h3>
                        <div className="d-flex justify-content-center align-items-center">
                        <ul className="footer-menu">
                            <li><Link>siddhraj zori,sargasan</Link></li>
                            <li><Link>Zignuts Technolab pvt ltd</Link></li>
                            <li><Link>189839749748</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-xl-0 mb-md-4 mb-3'>
                        <h3 className='text-center'>Email</h3>
                        <div className="d-flex justify-content-center align-items-center">
                        <ul className="footer-menu">
                            <li>
                                <Link>hello@zignuts.com</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;