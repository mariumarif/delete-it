import React, { useState, useEffect } from 'react';
import './womencat.css';
import mencat1 from '../../images/men-salon-1.jpg';
import mencat2 from '../../images/men-salon-2.jpg';
import logoo from '../../images/icon.png';
import catbgimg from '../../images/bgsalcat.jpg'
import {
    BrowserRouter as Router,
    Switch, Route, Link, useParams
} from 'react-router-dom';

const WomenCategories = () => {

    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('http://localhost:3000/salons?id=2');
        setUsers(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    const salonId = 0;
    const getId = (e) => {
        salonId = e.target.id;
        console.log(salonId);
    }
    const { id } = useParams();

    return (
        <>
            <header className="fixed fixed-top">
                <div className="navbar-div">
                    <nav className="navbar navbar-light">
                        {/* <!-- Brand --> */}
                        <Link to='./'>
                            <a className="navbar-brand ml-5" href="#">

                                <img src={logoo} alt="" />

                            </a>
                        </Link>
                    </nav>
                </div>
            </header>
            <div className='cat-bg' style={{ backgroundImage: `url(${catbgimg})` }}>
                <h1 className='text-center orange px-5 py-5 d-flex justify-content-center align-items-center'>WOMEN CATEGORIES</h1>
            </div>
            {
                users.map((user) => {
                    return (
                        <>
                            <div className='container' key={user.id}>
                                <Link to={`/womansalon/${user.id}`} className="salon-div">
                                    <div className='row d-flex justify-content-center align-items-center salon-categoryy mb-4'>
                                        <div className='col-lg-4 mb-4'>
                                            <img src={mencat2} className='men-salon-1' className='img-fluid' />
                                        </div>
                                        <div className='col-lg-8'>
                                            <h1>{user.name}</h1>
                                            <p>{user.description}
                                            </p>
                                            <h5>{user.timings}</h5>
                                            <p>{user.address}</p>

                                            <p>Ratings &nbsp;
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <Link to={`/womansalon/${user.id}`}>
                                                    <i id={user.id} class="fa fa-arrow-right men-arrow" onClick="getId()"></i>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            
                        </>
                    )
                })
            }
            {/* FOOTER */}
            <div className='container-fluid footer'>
                <div className='row'>
                    <div className='col-lg-12 col-12 text-center py-5'>
                        <h4>Connect with Salon.Pk</h4>
                        <i className="fa fa-facebook fa-2x mr-3 mt-2" />
                        <i className="fa fa-instagram fa-2x mr-3 mt-2" />
                        <i className="fa fa-twitter mr-3 fa-2x mt-2" />

                        <p className='mt-3'>+92 333 4890877</p>

                        <p>info@gmail.com</p>
                    </div>

                </div>
            </div>
        </>
    )
};
export default WomenCategories;