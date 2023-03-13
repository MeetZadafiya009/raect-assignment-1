const Project = () => {
    return (
        <section className="project">
            <div className='project-cloud d-flex justify-content-end'>
                <img src="./../images/Asset 8 3.png" alt="" />
            </div>
            <div className="container pb-5">
                <div className='row py-5'>
                    <div className='col-12'>
                        <h1 className='text-center'>
                            Our Project
                        </h1>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-6">
                        <img className="img-fluid" src="./../images/Our_Project_1.png" alt="project 1" />
                    </div>
                    <div className="col-6">
                        <div className="row gy-3">
                            <div className="col-12">
                                <img className="img-fluid" src="./../images/Our_Project_ 2.png" alt="project 2" />
                            </div>
                            <div className="col-12">
                                <img className="img-fluid" src="./../images/Our_Project_ 3.png" alt="project 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;