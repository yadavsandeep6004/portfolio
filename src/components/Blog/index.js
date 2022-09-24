
import './style.css'
import AppTitle from '../AppTitle';
import Typography from '../Typography';
import AppButton from '../AppButton';
import BlogCard from '../BlogCard';
import { FiChevronsRight } from 'react-icons/fi';


const Blog = () => {
    return (
        <section className='blog'>
            <div >

                <AppTitle text='Blog Post' />
                <div className='blog-heading-wapper'>
                    <Typography type='H2'>
                        Recent News Latest Posts<br /> <span>From My Blog</span>
                    </Typography>

                    <AppButton title='View All Blog'>
                        <FiChevronsRight />
                    </AppButton>
                </div>
            </div>
            <div className='blog-card-wapper'>
                <BlogCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/05.jpg' />
                <BlogCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/01.jpg' />
            </div>
        </section>
    )
}

export default Blog;