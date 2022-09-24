import Typography from '../Typography';
import './style.css';
import { Link } from 'react-router-dom';
const MobileNav = (props) => {
  return (
    <nav className='MobileNav'>
       <ul>
        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/' onClick={props.onClick}>Home</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/about' onClick={props.onClick}>About Me</Link>
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/resume' onClick={props.onClick}>Resume</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/ourWork' onClick={props.onClick}> Services</Link>
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/portfolio' onClick={props.onClick}> Portfolio</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/clients' onClick={props.onClick}>Clients</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/blog' onClick={props.onClick}>Our Blog</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/contact' onClick={props.onClick}> Contact Us</Link>
          </Typography>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav;