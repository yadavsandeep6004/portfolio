import './style.css'
import Typography from '../Typography'


const EducationCard = (props) => {
    return (
        <div className='educationCard'>
            <div>
                <div className='educationCard-image'>
                    <img src={props.src} alt='img' />
                    <Typography>{props.imgTitle}</Typography>
                </div>
                <div className='educationCard-time'>
                    <Typography>{props.time}</Typography>
                </div>
            </div>
            <Typography type='H3'>{props.heading}</Typography>
            <Typography type='H5'>{props.subHeading}</Typography>

        </div>
    )
}

export default EducationCard;