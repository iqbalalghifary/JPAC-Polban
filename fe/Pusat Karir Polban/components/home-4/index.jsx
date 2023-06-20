import Header from "./Header";
import Footer from "./Footer";
import Hero4 from "../hero/hero-4";
import JobFilterTab from "../job-featured/JobFilterTab";
import Block2 from "../block/Block2";
import TopCompany from "../top-company/TopCompany";
import JobCategorie1 from "../job-categories/JobCategorie1";
import Blog from "../blog/Blog";
import Partner from "../common/partner/Partner";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";

const index = () => {
    return (
        <>
            <LoginPopup />
            {/* End Login Popup Modal */}

            <Header />
            {/* <!--End Main Header --> */}

            <MobileMenu />
            {/* End MobileMenu */}

            <Hero4 />
            {/* <!-- End Banner Section--> */}

            <section className="job-section alternate">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Let's Build Your Career!</h2>
                        <div className="text">
                        Recognize the opportunities that will determine your future
                        </div>
                    </div>
                    {/* End sec-title */}

                    <div className="default-tabs tabs-box">
                        <JobFilterTab />
                    </div>
                    {/* End .default-tabs */}
                </div>
            </section>
            {/* <!-- End Job Section --> */}

            <section className="process-section pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>How It Works?</h2>
                        <div className="text">
                            Let's get started easily with the Career Center
                            Polban
                        </div>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <Block2 />
                    </div>
                </div>
            </section>
            {/* <!-- End Process Section --> */}

            <section className="top-companies style-two">
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>Top Company Registered</h2>
                        <div className="text">
                            more than thousands of companies have cooperated with
                            Bandung State Polytechnic
                        </div>
                    </div>

                    <div className="carousel-outer" data-aos="fade-up">
                        <div className="companies-carousel">
                            <TopCompany />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Top Companies --> */}

            <section className="job-categories">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Popular Job Categories</h2>
                        <div className="text">
                            Find the type of job that suits you
                        </div>
                    </div>

                    <div
                        className="row "
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {/* <!-- Category Block --> */}
                        <JobCategorie1 />
                    </div>
                </div>
            </section>
            {/* End Job Categorie Section */}

            <section className="news-section style-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Agenda</h2>
                        <div className="text">
                        Follow our activities and look forward to the next interesting agendas!
                        </div>
                    </div>
                    {/* End ."sec-title */}
                    <div className="row" data-aos="fade-up">
                        <Blog />
                    </div>
                </div>
            </section>
            {/* <!-- End News Section --> */}

            <section className="clients-section alternate">
                <div className="sponsors-outer" data-aos="fade">
                    {/* <!--Sponsors Carousel--> */}
                    <ul className="sponsors-carousel">
                        <Partner />
                    </ul>
                </div>
            </section>
            {/* <!-- End Clients Section--> */}

            <Footer />
            {/* <!-- End Main Footer --> */}
        </>
    );
};

export default index;
