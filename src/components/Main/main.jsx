import React,{useEffect} from "react";
import './main.css';
import img from '../../assets/img.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css' 
const Data= [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'bora bora',
        location: 'New Zealand',
        grade:'CULTURAL RELAX',
        fees: '$700',
        description: 'New Zealand culture is a rich blend of Māori traditions and European influences, reflected in art, language, and customs. '
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Paris',
        location: 'France',
        grade: 'ROMANTIC ESCAPE',
        fees: '$1200',
        description: 'Paris, the City of Light, is known for its romantic ambiance, iconic landmarks, and exquisite French cuisine.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Maldives',
        location: 'Indian Ocean',
        grade: 'LUXURY PARADISE',
        fees: '$1500',
        description: 'The Maldives offer crystal-clear waters, luxurious resorts, and stunning underwater marine life.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Kyoto',
        location: 'Japan',
        grade: 'HISTORICAL WONDERS',
        fees: '$900',
        description: 'Kyoto is famous for its ancient temples, traditional tea houses, and beautiful cherry blossoms.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Santorini',
        location: 'Greece',
        grade: 'SCENIC BEAUTY',
        fees: '$1100',
        description: 'Santorini is known for its white-washed buildings, blue-domed churches, and breathtaking sunsets.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Banff',
        location: 'Canada',
        grade: 'MOUNTAIN ESCAPE',
        fees: '$800',
        description: 'Banff National Park offers stunning mountain views, turquoise lakes, and incredible outdoor adventures.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Cape Town',
        location: 'South Africa',
        grade: 'ADVENTURE & NATURE',
        fees: '$950',
        description: 'Cape Town boasts Table Mountain, beautiful beaches, and a unique blend of cultures and cuisines.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Dubai',
        location: 'United Arab Emirates',
        grade: 'URBAN LUXURY',
        fees: '$1300',
        description: 'Dubai is famous for its futuristic architecture, luxury shopping, and vibrant nightlife.'
    }
]
function Main(){
     useEffect(()=>{
            Aos.init({duration: 2000})
        },[])
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos='fade-right' className="title">Most Visited destinations</h3>
            </div>
            <div className="secContent grid">
    {
        Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
                <div key={id} className="singleDestination">
                    <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle}></img>
                    </div>
                    <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex">
                            <HiOutlineLocationMarker className='icon' />
                            <span className="name">{location}</span>
                        </span>
                        <div className="fees flex">
                            <div className="grade">
                                <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>
                        </div>
                        <div className="desc">
                            <p>{description}</p>
                        </div>
                        <button className="btn flex">
                            DETAILS <HiOutlineClipboardCheck className='icon' />
                        </button>
                    </div>
                </div>
            );
        })
    }
</div>


        </section>
    )
}
export default Main