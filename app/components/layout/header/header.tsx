import SideMenu from '../../shared/sideMenu/sideMenu';
import Navigation from '../menu/navigation';

const Header = () => {
	return (
		<header className="w-full flex justify-between items-center">
			<h1 className="text-5xl">Michael Boyd</h1>
			<SideMenu>
				<Navigation />
			</SideMenu>
		</header>
	);
};

export default Header;

