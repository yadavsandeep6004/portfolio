import AppTitle from "../AppTitle";
import Typography from "../Typography";
import AppButton from '../AppButton';
import { AiFillStar } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useState } from "react";
import './style.css';
const Gallerypage = () => {


    const [handler, setHandler] = useState('all')
    const [handler2, setHandler2] = useState('category')

    const DATA = [
        {
            category: 'all',
            type: 'image',
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/01.jpg',
        },
        {
            category: 'all',
            type: 'image',
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/02.jpg',
        },
        {
            category: 'all',
            type: 'video',
            url: 'https://youtu.be/IiT87cBmKkY',
            poster: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/03.jpg'
        },
        {
            category: 'all',
            type: 'image',
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/04.jpg',
        },
        {
            category: 'all',
            type: 'image',
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/06.jpg',
        },

        {
            category: 'all',
            type: 'video',
            url: 'https://youtu.be/IiT87cBmKkY',
            poster: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/05.jpg'
        },

    ]






    const allHandler = () => {
        setHandler('all')
        setHandler2('category')
        
    }
    const imageHandler = () => {
        setHandler('image')
        setHandler2('type')
    }
    const videoHandler = () => {
        setHandler('video')
        setHandler2('type')
    }





    return (
        <section className=" gallerypage">
            <AppTitle text='My Portfolio' />
            <Typography type='H2'>We Have Done Lot's of <span>My Best  Works</span>  Lets<br/> Check Some of Them</Typography>
            <div className="port-btn">

                <AppButton title='All Gallery' 
                onClick={allHandler}
                className={handler!=='all'?'port-btn-bg':''}
                >
                    <AiFillStar />
                </AppButton>

                <AppButton title='Images Gallery'
                 onClick={imageHandler}
                 className={handler!=='image'?'port-btn-bg':''}
                 >
                    <BsImage />
                </AppButton>

                <AppButton title='Video Gallery'
                 onClick={videoHandler}
                 className={handler!=='video'?'port-btn-bg':''}
                 >
                    <AiFillPlayCircle />
                </AppButton>
            </div>
        <div className="gallery">

            {
                DATA.filter((item) => item[handler2] === handler).map((item) => (
                    item.type === 'video'
                        ?
                        (
                            <div className="portfolio-video">
                                <video width="100%"
                                    poster={item.poster}
                                    controls>
                                    <source src={item.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : (
                            <div className="portfolio-image">  
                                <img src={item.url} alt='image' />
                            </div>

                        )
                ))

            }
          </div>

        </section>
    )
}

export default Gallerypage;