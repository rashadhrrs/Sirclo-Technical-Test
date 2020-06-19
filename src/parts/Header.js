import React from 'react'
import Button from 'elements/Button'

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    }

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse d-flex justify-content-center">
                    <ul className="navbar-nav">
                        <li className={`nav-item${getNavLinkClass("/new-arrival")}`}>
                            <Button className="nav-link" type="link" href="/">
                                NEW ARRIVAL
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                            <Button className="nav-link" type="link" href="/browse-by">
                                WOMAN
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/stories")}`}>
                            <Button className="nav-link" type="link" href="/stories">
                                MEN
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="/agents">
                                ACCESSORIES
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="/agents">
                                SALE
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="/agents">
                                BLOG
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="/agents">
                                CONTACT
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="/agents">
                                LOOKBOOK
                            </Button>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
    )
}
