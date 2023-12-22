import { NavMenu, NavWrapper } from './styled';
import { NavBarProps } from './types';

const navMenu = {
  'All locations': '/#',
};

export const NavBar: React.FC<NavBarProps> = ({ title }) => (
  <NavWrapper>
    <NavMenu>
      {Object.entries(navMenu).map((entry, index) => {
        const [title, link] = entry;
        return (
          <a href={link} key={index}>
            {title}
          </a>
        );
      })}
    </NavMenu>

    {title && <h1>{title}</h1>}
  </NavWrapper>
);
