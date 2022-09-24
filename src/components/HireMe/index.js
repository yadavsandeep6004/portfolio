
import './style.css'
import AppTitle from '../AppTitle';
import Typography from '../Typography';
import CantactCard from '../CantactCard';
import AppForm from '../AppForm';


const HireMe =()=>{
    return(
        <div className='hireme'>
            <AppTitle text=' Hire Me'/>
            <Typography type='H2'>I Am Available For Your Next Awesome Project<br/> <span>Then Hire Me!</span></Typography>
             

             <div className='map'>
                <img src='https://developers.google.com/maps/images/landing/hero_maps_static_api.png' alt='map' />
             </div>
    
            <div>
            <CantactCard />
            </div>

            <AppForm />
           
        </div>
    )
}

export default HireMe;




