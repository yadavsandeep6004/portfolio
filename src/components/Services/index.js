
import './style.css'
import AppTitle from '../AppTitle';
import Typography from '../Typography';
import ServicesCard from '../ServicesCard';
const Servics = () => {

    const DATA = [
        {
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/01.png',
            heading: 'PSD Template Design',
            bg: 'linear-gradient(to top, #00a9ce, #8af5d1)',
        
            url1: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/02.png',
            heading1: 'SEO Optimization',
            bg1: 'linear-gradient(to top, #cc00ff, #8484fb)'
        },
        {
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/04.png',
            heading: 'Web Development',
            bg: 'linear-gradient(to top, #81dcfd, #f4d63d)',
    
            url1: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/02.png',
            heading1: 'Mobile Apps Design',
            bg1: 'linear-gradient(to top, #645cff, #ff5b8a)'
        },
    ];
 



    return (
        <section className='servics'>
            <AppTitle text='My Services' />
            <Typography type='H2'>
                We Have Done Lot's of <span>My Best Services</span> <br/> Lets Check Some of Them
            </Typography>
            <div className='servics-card-containar'>

               
               
                 {
                  DATA.map((item,i)=>(
                    
                        
                         <div   key={i}>
                         <ServicesCard
                         url={item.url}
                         heading={item.heading}
                         bg={item.bg}
                       
                          />
                         <ServicesCard
                         url={item.url1}
                         heading={item.heading1}
                         bg={item.bg1}
                          />
                        </div>
                         

                  ))

                } 
              
            </div>
        </section>
    )
}
export default Servics;