
import AppTitle from '../AppTitle'
import PricingCard from '../PricingCard';
import Typography from '../Typography';
import './style.css';


const PricingPlan =()=>{
    return(
        <section className='pricing-plan'>
           <AppTitle text='Pricing Plan'/>
           <Typography type='H2'>No Hidden Charge,Choose Your <br/><span>Best Pricing Plan</span> </Typography>
           <div className='pricing-plan-card'>
            <PricingCard heading='Silver Plan' price='$20'/>
            <PricingCard heading='Gold Plan' price='$40'/>
            <PricingCard heading='Platinum Plan' price='$60'/>
           </div>
        </section>
    )
}

export default PricingPlan;