/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import BasicLayout from "layouts/profile/components/non-navbar/non-navbar";

// Images
import bgImage from "assets/images/bg-polbans.jpeg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={1}
          mt={-3}
          p={1}
          mb={4}
          textAlign="center"
          pt={6}
          pb={3}
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Job Seeker Registration
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Selamat Datang! Bagi anda yang akan bergabung ke Pusat Karir Polban Silahkan melakukan
            pendaftaran dengan mengisi formulir di bawah ini
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="nim" label="NIM" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="phone" label="No. Telpon" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="prodi" label="Program Studi" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="prodi" label="Jurusan / Fakultas" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Confirm Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                register
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
