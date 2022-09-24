
import AppTitle from '../AppTitle';
import CantactCard from '../CantactCard';
import Typography from '../Typography';
import AppButton from '../AppButton';
import SlideImage from '../SlideImage/Index';
import './style.css';

const About = () => {

  return (
    <section className='about-section' id='about'>
      <CantactCard />

      <div className='about'>
        <div className='about-image'>
          <div>
            <Typography type='H3'>Welcome to My Portfolio</Typography>
            <Typography type='H2'>Why <span >3650 People</span>  Love Us<br/> Believe My Awesome Services</Typography>
          </div>
          <div className='about-image-div'>
            <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/about/01.png' alt='about' />
            </div>
        </div>


        <div className='about-text'>
        <AppTitle text='Hello World' />
        <Typography type='H2'>I am <span>Emma Grant</span> UX  From New York City 1200.</Typography>
        <Typography type='H6'>Energisticaly Simplify Toping Line Solutions without Leveraged Resutrs are an Colabrerse Channels Throughe Qrthogonal e-Commerce Energistcaly Growing Practve Anding Platform Niches After Paralel Technolog</Typography>
        <ul>
          <li>Name<b>:&nbsp;&nbsp;&nbsp;  Emma Grant</b></li>
          <li>Date of Birth<b>:&nbsp;&nbsp;&nbsp;  27 Feb 1994</b></li>
          <li>Email<b>:&nbsp;&nbsp;&nbsp;  smith7@gmail.com</b></li>
          <li>Phone<b>:&nbsp;&nbsp;&nbsp;  +258 369 147</b></li>
          <li>Fax<b>:&nbsp;&nbsp;&nbsp;  222 666 888</b></li>
          <li>Nationality<b>:&nbsp;&nbsp;&nbsp;  United States</b></li>
          <li>Adress<b>:&nbsp;&nbsp;&nbsp;  Suite 02 New Elephant Road</b></li>
        </ul>
        <AppButton title='Download Resume' className='aboutBtn'>
          <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/btn-1.png' alt='img' />
        </AppButton>
        </div>
      </div>
     <div className='about-slidler'>
      <SlideImage/>
     </div>

    </section>
  )
}
export default About;