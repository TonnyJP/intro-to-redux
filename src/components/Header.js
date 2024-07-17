import { authActions } from '../store';
import classes from './Header.module.css';
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthentificated = useSelector((state => state.auth.isAuthentificated));

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthentificated && <><li>
            <a href='/'>My Products</a>
          </li>
            <li>
              <a href='/'>My Sales</a>
            </li></>}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
