
import './style.css';
import { AiOutlineTwitter } from 'react-icons/ai';
import {FaVimeoSquare } from 'react-icons/fa';
import {BiRss } from 'react-icons/bi';
import {AiOutlineDribbble } from 'react-icons/ai';
import {FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return(
        <footer className='footer'>
              <div>
            <div>
                <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/logo/footer-logo.png' alt='img' />
            </div>
            <p>© 2019. Maxino Designed By LabArtisan</p>
            <div>
                <ul>
                    <li>
                        <AiOutlineTwitter/>
                    </li>
                    <li>
                        <FaVimeoSquare/>
                    </li>
                    <li>
                        <BiRss/>
                    </li>
                    <li>
                        <AiOutlineDribbble/>
                    </li>
                    <li>
                        <FiInstagram />
                    </li>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer