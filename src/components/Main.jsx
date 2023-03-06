import './../style/style.css';
const Main = () => {
    return (
        <>
            <section className='about-us py-5'>
                <div className='container-md pt-5'>
                    <div className='row'>
                        <div className='pe-md-5 col-md-6 mb-md-0 mb-5 col-12 d-flex justify-content-center align-items-center'>
                            <img className="img-fluid" src="./../images/about-us.png" alt="main-img" />
                        </div>
                        <div className='ps-md-5 col-md-6 col-12 px-5'>
                            <div className="row">
                                <div className="col-12 pb-2">
                                    <h1 className="text-center">About Us</h1>
                                </div>
                                <div className="col-12 pb-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore mollitia alias, reiciendis omnis quis delectus eaque nisi nostrum reprehenderit eveniet nihil excepturi molestiae. Rem odio ut distinctio natus voluptatibus?</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <img className='mb-3' src="./../images/Enagagement_icon.png" alt="engagement" />
                                    <h4>Enagagement</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="col-6">
                                    <img className='mb-3' src="./../images/coomunication.png" alt="communication" />
                                    <h4>Communication</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main;