import Typography from '../Typography';
import { Link } from 'react-router-dom';
import './style.css';
const DesktobNav = () => {
  return (
    <nav className='DesktobNav'>
      <ul>
        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/'>Home</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/about'>About Me</Link>
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/resume'>Resume</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/ourWork'> Services</Link>
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/portfolio'> Portfolio</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/clients'>Clients</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/blog'>Our Blog</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='/contact'> Contact Us</Link>
          </Typography>
        </li>
      </ul>
    </nav>
  )
}

export default DesktobNav;