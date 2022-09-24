

import './style.css';
import Typography from '../Typography'
import AppButton from '../AppButton';



const Poster = () => {
    return (
        <section className='poster'>
            <div className='poster-text'>
                <Typography type='H1'>Hello...</Typography>
                <Typography type='H1'>I'm <span className='name'>Emma</span> Grant<br /> A Professional</Typography>

                <ul className='dynmic-title'>
                    <li><span>Freelancer</span></li>
                    <li><span>UX Designer</span></li>
                    <li><span>Web Designer</span></li>
                    <li><span>Web Developer</span></li>
                </ul>

                <AppButton title='View My Portfolio' className='posterBtn'>
                    <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/btn-1.png' alt='img' />
                </AppButton>
            </div>
            <div className='poster-img'>
                <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/banner/02.png' alt='poster'/>
            </div>
        </section>
    )
}
export default Poster