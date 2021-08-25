//CSS that overrides default bootstrap CSS
import './navigation.css'

//Bootstrap components
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

//ENS components
import ProfilePicture from '../ENS components/profilePicture';

function LogInButons () {
    return(
        <Container fluid className="d-flex justify-content-between p-3">
            <Button variant="primary">Register</Button>
            <Button variant="link">Log In</Button>
        </Container>
    )
}

// contains profile picture, name, amount of cred
function ProfileCard () {
    return(
        <Container className="d-flex align-items-center p-3 text-secondary">
            <ProfilePicture className="flex-shrink-0" imgClass={"nav-profile-picture"} imgSrc={""}/>
            <div className="flex-grow-1 ms-2 fs-5">
                <h6 className="m-0">Kaleb Kloppe</h6>
            </div>
        </Container>
    )
}

// contains server name, description, number of members, forked from info
function NavTitle () {
    return(
        <Container className="p-3 text-secondary">
            <h3 className="text-dark">Self-Hosted</h3>
            <p>A place to share alternatives to popular online services that can be self-hosted without giving up privacy or locking you into a service you don't control.</p>
            <h5>1,312 members</h5>
            <h6>forked from r/self-hosted</h6>
        </Container>
    )
}

function NavigationMenu () {
    return(
        <Nav defaultActiveKey="/home" className="flex-column nav-menu-scroll fs-5">
            <Nav.Link >About</Nav.Link>
            <Accordion flush>
                <Accordion.Item eventKey="0" className="bg-transparent">
                    <Accordion.Button className="p-0 bg-transparent fs-5">
                        <Nav.Link>Wiki</Nav.Link>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Accordion flush>
                            <Accordion.Item eventKey="1" className="bg-transparent">
                                <Accordion.Button className="p-0 bg-transparent fs-5">
                                    <Nav.Link >Contribution Guidelines</Nav.Link>
                                </Accordion.Button>
                                <Accordion.Body>
                                    <Nav.Link >Getting Started</Nav.Link>
                                    <Nav.Link >Adding a Page</Nav.Link>
                                    <Nav.Link >File Structure</Nav.Link>
                                    <Nav.Link >Modify a Page</Nav.Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Nav.Link >Explanations</Nav.Link>
                        <Accordion flush>
                            <Accordion.Item eventKey="2" className="bg-transparent">
                                <Accordion.Button className="p-0 bg-transparent fs-5">
                                    <Nav.Link >Getting Started</Nav.Link>
                                </Accordion.Button>
                                <Accordion.Body>
                                    <Nav.Link >Difficulty Tiers</Nav.Link>
                                    <Nav.Link >How do I self-host?</Nav.Link>
                                    <Nav.Link >Intro to reverse proxies</Nav.Link>
                                    <Nav.Link >Operating systems</Nav.Link>
                                    <Nav.Link >Common self-hosted alternatives</Nav.Link>
                                    <Nav.Link >What is self-hosting?</Nav.Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion flush>
                            <Accordion.Item eventKey="3" className="bg-transparent">
                                <Accordion.Button className="p-0 bg-transparent fs-5">
                                    <Nav.Link >Guides</Nav.Link>
                                </Accordion.Button>
                                <Accordion.Body>
                                    <Nav.Link >Devops Toolchains</Nav.Link>
                                    <Nav.Link >Gitlab Installation</Nav.Link>
                                    <Nav.Link >Reverse Proxy Servers</Nav.Link>
                                    <Nav.Link >Ngix Reverse Proxy</Nav.Link>
                                    <Nav.Link >Virtual Private Networks</Nav.Link>
                                    <Nav.Link >WireGuard</Nav.Link>
                                    <Nav.Link >Webservers</Nav.Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Nav.Link ><i class="bi bi-newspaper"></i> Feed</Nav.Link>
            <Nav.Link ><i class="bi bi-card-text"></i> Forum</Nav.Link>
            <Nav.Link ><i class="bi bi-chat-text"></i> Chat</Nav.Link>
            <hr className="m-0"/>
            <Accordion flush>
                <Accordion.Item eventKey="4" className="bg-transparent">
                    <Accordion.Button className="p-0 bg-transparent fs-5">
                        <Nav.Link >Organization</Nav.Link>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Nav.Link >Petitions</Nav.Link>
                        <Nav.Link >Finance</Nav.Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion flush>
                <Accordion.Item eventKey="5" className="bg-transparent">
                    <Accordion.Button className="p-0 bg-transparent fs-5">
                        <Nav.Link >Projects</Nav.Link>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Nav.Link >Kanban</Nav.Link>
                        <Nav.Link >Drive</Nav.Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Nav>
    )
}

function NavControlPanel () {
    return(
        <Container className="nav-control-panel bg-light p-3">
            <h6 className="m-0">Runs on Noteworthy</h6>
            <Button variant="link p-0 fs-6">+ become a host</Button>
        </Container>
    )
}

function Navigation () {
    return(
        <div className="nav-container d-flex flex-column  position-relative bg-light" id="slideMenu">
            <LogInButons/>
            <ProfileCard/>
            <NavTitle/>
            <NavigationMenu/>
            <NavControlPanel/>
        </div>
    )
}

export default Navigation