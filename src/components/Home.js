import React from "react";
import Header from "./Header";
import "../css/Home.css";

function Home() {
    return (
        <div>
            <Header />

            <div className="container content">
                <div className="row">
                    <div className="col-sm-3 talk">
                        <h1>Learn</h1>
                        <h1>Online</h1>
                        <br />
                        <h6 className="bold-four">
                            At Kaksha, you can start learning online with live
                            updates and logs of classroom
                        </h6>
                        <br />
                        <h6>
                            <a
                                className="btn btn-dark start start-two"
                                href="/login"
                            >
                                Login
                            </a>
                            <a
                                className="btn btn-dark start start-two ml-3"
                                href="/register"
                            >
                                Register
                            </a>
                        </h6>
                    </div>
                    <div className="col-sm-9 showcase-img">
                        {/* <div className="circle"></div> */}
                    </div>
                </div>
            </div>

            <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Home Comfort</h5>
                                <p class="lead mb-0">
                                    Learn from your home with all your comfort
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Best Teachers</h5>
                                <p class="lead mb-0">
                                    Learn from the best teachers in the world
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-check m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Report</h5>
                                <p class="lead mb-0">
                                    Get a detailed report of every classroom you
                                    attend
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
