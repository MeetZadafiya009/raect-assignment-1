import './../style/style.scss';
const Teams=()=>{
    return (
        <section>
            <div className='container pb-5'>
                <div className='row py-3'>
                    <div className='col-12'>
                        <h1 className='text-center'>
                            Our Teams
                        </h1>
                    </div>
                </div>
                <div className='row py-3'>
                    <div className='col-sm-4 col-12'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='img-fluid' src="./../images/person1.png" alt="person1" />
                        </div>
                        <p className='text-center py-3'>Jessica D'Sooza</p>
                    </div>
                    <div className='col-sm-4 col-12'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='img-fluid' src="./../images/Person2.png" alt="person1" />
                        </div>
                        <p className='py-3 text-center'>Jhonny Williams</p>
                    </div>
                    <div className='col-sm-4 col-12'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='img-fluid' src="./../images/Person3.png" alt="person1" />
                        </div>
                        <p className='py-3 text-center'>Sanya R.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Teams;