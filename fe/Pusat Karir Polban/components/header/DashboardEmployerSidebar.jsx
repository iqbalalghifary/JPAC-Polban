import Link from "next/link";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import Cookies from 'js-cookie';

const DashboardEmployerSidebar = () => {
    const router = useRouter();
    const { menu } = useSelector((state) => state.toggle);

    const dispatch = useDispatch();
    // menu togggle handler
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };

    const destroySession = () => {
        Cookies.remove('token');
        Cookies.remove('role');
        Cookies.remove('username');
        window.location = "http://localhost:3000/login";
    };

    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
            {/* Start sidebar close icon */}
            <div className="pro-header text-end pb-0 mb-0 show-1023">
                <div className="fix-icon" onClick={menuToggleHandler}>
                    <span className="flaticon-close"></span>
                </div>
            </div>
            {/* End sidebar close icon */}

            <div className="sidebar-inner">
                <ul className="navigation">
                    {employerMenuData.map((item) => (
                        <li
                            className={`${
                                isActiveLink(item.routePath, router.asPath)
                                    ? "active"
                                    : ""
                            } mb-1`}
                            key={item.id}
                            onClick={menuToggleHandler}
                        >
                            <Link href={item.routePath}>
                                <i className={`la ${item.icon}`}></i>{" "}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                        <li
                            className={`mb-1`}
                            key={12}
                            onClick={destroySession}
                        >
                            <Link href={'#'}>
                                <i className={`la la-sign-out`}></i>{" "}
                                Logout
                            </Link>
                        </li>                                        
                </ul>
            </div>
        </div>
    );
};

export default DashboardEmployerSidebar;
