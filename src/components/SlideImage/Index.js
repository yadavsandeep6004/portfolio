
import './style.css'
const SlideImage = () => {
  const IMAGE_DATA = [
    'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/01.png',
    'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/06.png',
    'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/04.png',
    'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/05.png',
    'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/02.png',
    'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/01.png',
  ]

  return (
    // <marquee >
      <div className='slid-image'>

        {
          IMAGE_DATA.map((item, i) => (
            <div key={i}>
              <img src={item} alt='img' />
            </div>

          ))
        }
      </div>
    // </marquee>
  )
}

export default SlideImage;