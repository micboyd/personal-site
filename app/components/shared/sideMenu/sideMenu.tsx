import { useState, ReactNode } from 'react';

interface SideMenuProps {
	children: ReactNode; // Explicitly typing the children prop
}

const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	// Toggle the side menu
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button onClick={toggleMenu} className="text-black text-3xl">
				<i className="fa-regular fa-bars"></i>
			</button>

			<div
				className={`fixed top-0 right-0 h-full w-[30%] bg-white text-black transform transition-transform duration-200 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} z-20`}>
				<div className="p-4">{children}</div>
			</div>

			{isOpen && (
				<div
					className="fixed inset-0 bg-black opacity-50 transition-opacity duration-200"
					onClick={toggleMenu}
				/>
			)}
		</div>
	);
};

export default SideMenu;

