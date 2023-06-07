import Link from "next/link";
import {
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
  const router = useRouter();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          {/* End homepage menu items */}

          <li>
            <Link href="/lowongan-kerja">
              <span>Lowongan Pekerjaan</span>
            </Link>
          </li>
          {/* End lowongan kerja pages */}

          <li>
            <Link href="/pengumuman">
              <span>Pengumuman</span>
            </Link>
          </li>
          {/* End Agenda page */}

          <li>
            <Link href="/perusahaan-mitra">
               <span>Perusahaan Mitra</span>
            </Link>
          </li>
          {/* End perusahaan mitra page */}

          <li>
            <Link href="/agenda">
              <span>Agenda</span>
            </Link>
          </li>
          {/* End agenda page */}

          <li>
            <Link href="/galeri">
              <span>Galeri</span>
            </Link>
          </li>
          {/* End galeri page */}
          
          <li
            className={`${
              isActiveParentChaild(pageItems, router.asPath) ||
              isActiveParentChaild(router.asPath)
                ? "current "
                : ""
            } dropdown`}
          >
            <span>About Us</span>
            <ul>
              {/* {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(router.asPath)
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, router.asPath)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))} */}
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, router.asPath) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
