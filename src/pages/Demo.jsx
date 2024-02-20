import styles from './Demo.module.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
function Demo() {
    const pictures = [
        "https://images.pexels.com/photos/714256/pexels-photo-714256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/20180791/pexels-photo-20180791/free-photo-of-adulto-cavalaria-chapeu-de-cauboi-chapeu-de-cowboy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/20187061/pexels-photo-20187061/free-photo-of-agricultura-asia-oriente-terra-cultivada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/19982818/pexels-photo-19982818/free-photo-of-arquitetura-arte-bicicleta-bike.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/20200109/pexels-photo-20200109/free-photo-of-baia-doca-vaga-praia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    return (
        <div className={styles.container}>
            <Swiper
                className={styles.box}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                effect="fade"
            >
                {pictures.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link to="#" target='_blank'><img src={item} alt="" /></Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.profiles}>
                <div className={styles.destaque}>
                    <div className={styles.cards}>
                        <img src="https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-conifera-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <div className={styles.destaque}>
                    <div className={styles.cards}>
                        <img src="https://images.pexels.com/photos/20147088/pexels-photo-20147088/free-photo-of-praia-litoral-california-penhasco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <div className={styles.destaque}>
                    <div className={styles.cards}>
                        <img src="https://images.pexels.com/photos/19376929/pexels-photo-19376929/free-photo-of-frio-com-frio-luz-do-dia-outono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo