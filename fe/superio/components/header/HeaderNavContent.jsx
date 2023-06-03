import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
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
            <Link href="/job-list-v3">
              <span>Lowongan Pekerjaan</span>
            </Link>
          </li>
          {/* End findjobs menu items */}
          <li>
            <Link href="/employers-list-v2">
               <span>Perusahaan Mitra</span>
            </Link>
          </li>
          <li>
            <Link href="/blog-list-v3">
              <span>Agenda</span>
            </Link>
          </li>
          <li>
            <Link href="/galeri">
              <span>Galeri</span>
            </Link>
          </li>
          <li
            className={`${
              isActiveParentChaild(pageItems, router.asPath) ||
              isActiveParentChaild(shopItems[0].items, router.asPath)
                ? "current "
                : ""
            } dropdown`}
          >
            <span>About Us</span>
            <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(shopItems[0].items, router.asPath)
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
              ))}
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
