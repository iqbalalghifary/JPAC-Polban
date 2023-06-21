import Link from "next/link";

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Jobs are waiting for you!</h2>
          <div className="text">
            Come and apply now on our website, Polban Career Center!
          </div>
        </div>

        <div className="btn-box">
          <Link href="/lowongan-kerja" className="theme-btn btn-style-three">
            Find Jobs
          </Link>
          <Link href="/register" className="theme-btn btn-style-two">
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
