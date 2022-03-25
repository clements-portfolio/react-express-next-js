/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
const Navbar = ({ variant, title, icon }) => {
    /* - - - - - < Return JSX Markup /> - - - - - */
    return (
      <nav className={variant}>
        <Link to='/'><h1><i className={icon}></i> {title}</h1></Link>
        <ul>
          <Link to='/'><li>Search</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </nav>
    );
  }

/* ~ ~ ~ ~ ~ { Define Required Properties } ~ ~ ~ ~ ~ */
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
  
/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default Navbar;