
import AppButton from '../AppButton';
import AppTitle from '../AppTitle';
import EducationCard from '../EducationCard';
import Typography from '../Typography';
import './style.css'
const Resume = () => {
    return (
        <section className='resume'>
            <AppTitle text='Education & Experience' />
            <Typography type='H2'>I Have Completed My Master<span>Degree & Experience</span>  With Leading Companies</Typography>
            <div className='card'>
                <div>
                    <EducationCard
                        src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/01.png'
                        imgTitle='Boxsouth University'
                        time='2014 - 2019'
                        heading='Master Degree Visual Art & Design'
                        subHeading='Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information'
                    />
                    <EducationCard
                        src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/02.png'
                        imgTitle='Meddout Ltd'
                        time='2014 - 2019'
                        heading='Senior UI/UX Designer'
                        subHeading='Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information'
                    />
                </div>
                <div>
                    <EducationCard
                        src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/02.png'
                        imgTitle='Plays.tv University'
                        time='2014 - 2019'
                        heading='Master Degree Visual Art & Design'
                        subHeading='Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information'
                    />
                    <EducationCard
                        src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/04.png'
                        imgTitle='Timeuest Ltd'
                        time='2014 - 2019'
                        heading='Senior UI/UX Designer'
                        subHeading='Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information'
                    />
                </div>
                <div>
                    <EducationCard
                        src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/05.png'
                        imgTitle='Playwell University'
                        time='2014 - 2019'
                        heading='Master Degree Visual Art & Design'
                        subHeading='Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information'
                    />
                    <EducationCard
                        src='	http://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/06.png'
                        imgTitle='Trackbox Ltd.'
                        time='2014 - 2019'
                        heading='Junior Graphic Designer'
                        subHeading='Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information'
                    />
                </div>


            </div>

            <AppButton title='Download My CV' className='resume-btn'>
            <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/btn-1.png' alt='img' />
            </AppButton>


        </section>
    )
}

export default Resume;