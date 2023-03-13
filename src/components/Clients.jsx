import './../style/style.scss';
const Clients = () => {
    return (
        <section className='clients'>
            <div className='clients-cloud d-flex'>
                <img src="./../images/Assets 9 1.png" alt="" />
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center"><span className='client-heading'>Our Clients</span></h1>
                    </div>
                </div>
                <div className="row px-5 pt-5 pb-5">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/1.png" alt="" />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/2.png" alt="" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/3.png" alt="" />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/4.png" alt="" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/5.png" alt="" />
                    </div>
                </div>
                <div className="row px-5">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/6.png" alt="" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/7.png" alt="" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/8.png" alt="" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./../images/9.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Clients;