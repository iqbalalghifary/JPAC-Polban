import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "examples/Navbars/DefaultNavbar/Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={require('examples/Navbars/DefaultNavbar/images/logo.png')} width={44} height={52} />
			<h3>Pusat Karir POLBAN</h3>
			<nav ref={navRef}>
				<a href="/#">Lowongan Pekerjaan</a>
				<a href="/#">Perusahaan Mitra</a>
				<a href="/#">Tracer Study</a>
				<a href="/#">Help</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
