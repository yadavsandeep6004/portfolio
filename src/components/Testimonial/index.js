import AppTitle from '../AppTitle';
import TestimonialCard from '../TestimonialCard';
import Typography from '../Typography';
import './style.css'

const Testimonial =()=>{
    return(
        <div className='testimonial'>
            <AppTitle text='Testimonial'/>
            <Typography type='H2'>Clientâ€™s Feedback Latest 
            <br/>Reviews<span> From My Clients</span></Typography>
        
         <div className='testimonial-card-wrapper'>
            <TestimonialCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/02.png'
            name='Emma Grant'
            logo='	http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/logo/02.png'
            />
            <TestimonialCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/03.png'
            name='Eddie Do'
            logo='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/logo/03.png'
            />
            <TestimonialCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/01.png'
            name='Robot Doe'
            logo='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/logo/01.png'
            />
             <TestimonialCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/02.png'
            name='Emma Grant'
            logo='	http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/logo/02.png'
            />
             <TestimonialCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/03.png'
            name='Eddie Do'
            logo='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/logo/03.png'
            />
         </div>
        </div>
    )
}

export default Testimonial;