
import './style.css';


const CantactCard = () => {
    let Data = [
        {
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/01.png',
            alt: 'call',
            title: '001-888-123-4567',
            subtitle: 'Give us a Call',
        },
        {
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/02.png',
            alt: 'Insta',
            title: 'maxinoadmin@mail.com',
            subtitle: 'Send us a Message',
        },
        {
            url: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/03.png',
            alt: 'location',
            title: '02/07 Suitland Street 120',
            subtitle: 'Visit our Location',
        },
    ]



    return (
        <div  className='cantact-card'>
            {

                Data.map(data => (
                    <a className='cantact-card-box'>
                        <div>
                            <img src={data.url} alt={data.alt} />
                        </div>
                        <div>
                            <p>{data.subtitle}</p>
                            <p>{data.title}</p>
                        </div>
                    </a>
                )

                )

            }

        </div>
    )
}

export default CantactCard;