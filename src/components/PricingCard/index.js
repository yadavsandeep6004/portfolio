import './style.css'
import Typography from '../Typography'
import AppButton from '../AppButton';
import { FiChevronsRight } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';

const PricingCard = (props)=>{
    return(
        <div className='pricing-card'>
            <div className='pricing-card-top'>
               <Typography type='H3'>{props.heading}</Typography>
               <Typography>Holisticly initiate functionalized information without viral imperatives.</Typography>
            </div>
            <div className='pricing-card-bottom'>
            <Typography type='H5'>Usd</Typography>
            <Typography type='H3'>{props.price}<span>/Onetime</span></Typography>
            <Typography>For Onetime Services only</Typography>
            <ul>
                <li><AiOutlineCheck/>4 Hosting Attendance</li>
                <li><AiOutlineCheck/>9 Email Marketing</li>
                <li><AiOutlineCheck/>3 Data Bases</li>
                <li><AiOutlineCheck/>2 Design Pack</li>
                <li><AiOutlineCheck/>3 Website Layouts</li>
                <li><AiOutlineCheck/>5 Header Style</li>
            </ul>

            <AppButton title='Choose Plan'>
             <FiChevronsRight/>
            </AppButton>
            </div>
        </div>
    )
}

export default PricingCard;