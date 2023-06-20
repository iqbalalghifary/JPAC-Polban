import Link from "next/link";

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Pekerjaan menunggu kamu!</h2>
          <div className="text">
            Ayo segera lamar di website kami Pusat Karir Polban
          </div>
        </div>

        <div className="btn-box">
          <Link href="/job-list-v3" className="theme-btn btn-style-three">
            Cari Pekerjaan
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
