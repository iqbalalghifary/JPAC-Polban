"use client";
import Link from "next/link";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar>
          <Menu>
            <MenuItem
              className={isActiveLink("/", router.asPath) ? "menu-active-link" : ""}
              key="home"
              routerLink={<Link href="/" />}
            >
              Home
            </MenuItem>
            <MenuItem
              className={isActiveLink("/lowongan-kerja", router.asPath) ? "menu-active-link" : ""}
              key="lowongan-pekerjaan"
              routerLink={<Link href="/lowongan-kerja" />}
            >
              Lowongan Pekerjaan
            </MenuItem>
            <MenuItem
              className={isActiveLink("/pengumuman", router.asPath) ? "menu-active-link" : ""}
              key="pengumuman"
              routerLink={<Link href="/pengumuman" />}
            >
              Pengumuman
            </MenuItem>
            <MenuItem
              className={isActiveLink("/perusahaan-mitra", router.asPath) ? "menu-active-link" : ""}
              key="perusahaan-mitra"
              routerLink={<Link href="/perusahaan-mitra" />}
            >
              Perusahaan Mitra
            </MenuItem>
            <MenuItem
              className={isActiveLink("/agenda", router.asPath) ? "menu-active-link" : ""}
              key="agenda"
              routerLink={<Link href="/agenda" />}
            >
              Agenda
            </MenuItem>
            <MenuItem
              className={isActiveLink("/galeri", router.asPath) ? "menu-active-link" : ""}
              key="galeri"
              routerLink={<Link href="/galeri" />}
            >
              Galeri
            </MenuItem>
            <SubMenu
              label="Tentang Kami"
              key="tentang-kami"
              className={isActiveParentChaild(
                [
                  { routePath: "/about" },
                  { routePath: "/faq" },
                  { routePath: "/terms" },
                ],
                router.asPath
              ) ? "menu-active" : ""}
            >
              <MenuItem
                className={isActiveLink("/about", router.asPath) ? "menu-active-link" : ""}
                key="about"
                routerLink={<Link href="/about" />}
              >
                About
              </MenuItem>
              <MenuItem
                className={isActiveLink("/faq", router.asPath) ? "menu-active-link" : ""}
                key="faq"
                routerLink={<Link href="/faq" />}
              >
                FAQ
              </MenuItem>
              <MenuItem
                className={isActiveLink("/terms", router.asPath) ? "menu-active-link" : ""}
                key="terms"
                routerLink={<Link href="/terms" />}
              >
                Terms
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <SidebarFooter />
    </div>
  );
};

export default Index;
