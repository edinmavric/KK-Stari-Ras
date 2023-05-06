import './Header.css';
import { NavLink } from 'react-router-dom';

const HeaderList = ({ link, listContent }) => {
  return (
    <li>
      <NavLink
        alt=""
        to={link}
        className={({ isActive }) => {
          return isActive ? 'active' : '';
        }}
      >
        {listContent}
      </NavLink>
    </li>
  );
};

export default HeaderList;
