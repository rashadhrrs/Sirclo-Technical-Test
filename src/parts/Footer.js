import React from 'react'
import IconText from './IconText'

export default function Footer() {

    return (
        <footer>
            <div className="px-5">
                <div className= "pt-5 d-flex justify-content-center">
                <i className="fa fa-lg fa-facebook mr-3"/>
                <i className="fa fa-lg fa-twitter mr-3"/>
                <i className="fa fa-lg fa-instagram mr-3"/>
                <i className="fa fa-lg fa-pinterest mr-5"/>
                </div>
                <div className="row pt-5">
                    <div className="col-md-4">
                        <IconText/>
                        <p>
                            Mavelin is a E-Commerce theme focused to 
                            collecting, grouping your content Then selling your 
                            stuffs. It is perfect for small-to-high traffic 
                            e-commerce bussiness site.
                        </p>
                    </div>
                    <div className="col-2 ml-auto">
                        <h3 className="mt-2">Categories</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Man</li>
                            <li className="list-group-item">Woman</li>
                            <li className="list-group-item">Sunglasses</li>
                        </ul>
                    </div>
                    <div className="col-2 mr-2">
                        <h3 className="mt-2">Brand</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Kenn Munk</li>
                            <li className="list-group-item">Artistoys</li>
                            <li className="list-group-item">SIMON & ME</li>
                        </ul>
                    </div>
                    <div className="col-2 mr-2">
                        <h3 className="mt-2">Connect with Us</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Email Us</li>
                            <li className="list-group-item">Facebook</li>
                            <li className="list-group-item">Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
