import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './../style/style.scss';
import Nav from './Nav';
const Header = () => {
    const [display,setDisplay]=useState(false);
    const ref=useRef();
    return (
        <header className="header">
            <div className="div1">
                <img src='./../images/top-left.png' alt="top-left" />
            </div>
            <div className="div2">
                <img src="./../images/top-right.png" alt="top-right" />
            </div>
            <div className="div3">
                <img src="./../images/bottom-left.png" alt="" />
            </div>
            <div className="div4">
                <img src="./../images/bottom-right.png" alt="" />
            </div>
            <div className='img-div'>
                <img className='img-fluid' src="./../images/Vector Smart Object.png" alt="" />
            </div>
            <div className='bg-img'>
                <img className='img-fluid ' src="./../images/bg-img.png" alt="bg-img" />
            </div>
            <div className='container py-3 px-5 nav-menu'>
                <div className='row align-items-center'>
                    <div className='col-3 ps-sm-0 ps-5 d-flex justify-content-center align-items-center'>
                        <img className='img-fluid logo' src="./../images/logo.png" alt="logo" />
                    </div>
                    <div className='offset-6 d-md-none d-flex justify-content-end col-3'>
                            <button onClick={()=>setDisplay(!display)} className='menu-toggle px-0'>
                                <img  className='menu-bar-icon' src="./../images/menu-bar-icon.png" alt="menu bar" />
                            </button>
                    </div>
                    <div style={{display:display ? "block":"none"}} className='col-md-9 col-12 d-md-flex justify-content-end align-items-center'>
                        <ul className="nav menu">
                            <li className="nav-item">
                                <Link className="nav-link active">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >Teams</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Clients</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='ps-5 row justify-content-center align-items-center'>
                    <div className='hero-part offset-lg-5 col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                        <div>
                            <h1 className='main-heading'>Mandleson Communication <br />and EngageMent</h1>
                            <p className='main-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nihil <br />culpa  molestias hic unde nulla minima ipsa esse tempore</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;