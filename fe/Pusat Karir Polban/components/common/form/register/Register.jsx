import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FormPelamar from "./FormPelamar";
import FormPerusahaan from "./FormPerusahaan";
import FormMahasiswa from "./FormMahasiswa";
import Link from "next/link";

const Register = () => {
  return (
    <div className="form-inner">
      <h3>Daftar Akun</h3>
      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-4 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-graduation-cap"></i> Alumni
              </button>
            </Tab>

            <Tab className="col-lg-4 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Perusahaan
              </button>
            </Tab>

            <Tab className="col-lg-4 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Mahasiswa
              </button>
            </Tab>
            
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <FormPelamar />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <FormPerusahaan />
        </TabPanel>

        <TabPanel>
          <FormMahasiswa />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link
            href="#"
            className="call-modal login"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            data-bs-target="#loginPopupModal"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
