
import './style.css'
import Typography from '../Typography'

const ServicesCard =(props)=>{
    return(
        <div  style={{backgroundImage:`${props.bg}`}} className='ServicesCard'>
            <div className='servicesCard-text'>
                <Typography type='H3'>{props.heading}</Typography>
                <Typography>Mnique deplo scalable catals forin Monec formu was unique</Typography>
                <div>
                 <ul type='circle'>
                    <li>Motion Graphic Design</li>
                    <li>3D animation Design</li>
                    <li>Info Graphic Design</li>
                    <li>Vector Design</li>
                 </ul>
                </div>
                

            </div>
            <div className='servicesCard-image'>
               <img src={props.url} alt='img' />
            </div>
        </div>
    )
}

export default ServicesCard;