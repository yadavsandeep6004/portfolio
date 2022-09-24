import { AiOutlineStar } from "react-icons/ai";
import Typography from "../Typography";
import './style.css';


const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-card-top">

                <div>
                    <img src={props.img} alt='img' />
                    <span>
                    <Typography typp='H5'>{props.name}</Typography>
                    <Typography typp='H6'>Founder</Typography>
                    </span>
                </div>

                <div>
                    <img src={props.logo} alt='logo' />
                </div>
            </div>
            <p>
                Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Bwdh Thoun Covaen Theme Anying Vauery Bwdth Throuing Covaent Theme
            </p>
            <div className='testimonial-card-star'>
                <div>
                    <ul>
                        <li> <AiOutlineStar /></li>
                        <li> <AiOutlineStar /></li>
                        <li> <AiOutlineStar /></li>
                        <li> <AiOutlineStar /></li>
                        <li> <AiOutlineStar /></li>
                    </ul>

                </div>
                <div>
                    <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/testimonial/logo/04.png' alt='img' />
                </div>
            </div>
        </div>
    )
}


export default TestimonialCard