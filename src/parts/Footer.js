import React from 'react'
import IconText from './IconText'

export default function Footer() {

    return (
        <footer>
            <div className="container pt-4">
                <div className="row">
                    <div className="col">
                        <IconText/>
                        <p>
                            Mavelin is a E-Commerce theme focused to 
                            collecting, grouping your content Then selling your 
                            stuffs. It is perfect for small-to-high traffic 
                            e-commerce bussiness site.
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h3 className="mt-2">Categories</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Man</li>
                            <li className="list-group-item">Woman</li>
                            <li className="list-group-item">Sunglasses</li>
                        </ul>
                    </div>
                    <div className="col-2 mr-3">
                        <h3 className="mt-2">Categories</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Man</li>
                            <li className="list-group-item">Woman</li>
                            <li className="list-group-item">Sunglasses</li>
                        </ul>
                    </div>
                    <div className="col-2 mr-2">
                        <h3 className="mt-2">Connect with Us</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Man</li>
                            <li className="list-group-item">Woman</li>
                            <li className="list-group-item">Sunglasses</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
