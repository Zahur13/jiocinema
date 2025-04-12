import styles from './banners.module.css'
import Arr from '../../assets/arrow.png'
import Bnr1 from '../../assets/banner/bnr1.avif'
import Bnr2 from '../../assets/banner/bnr2.avif'
import Bnr3 from '../../assets/banner/bnr3.avif'
import Bnr4 from '../../assets/banner/bnr4.avif'
import Bnr5 from '../../assets/banner/bnr5.avif'
import Bnr6 from '../../assets/banner/bnr6.avif'
import Bnr7 from '../../assets/banner/bnr7.avif'


const Banners = () => {
  return (
    <div className={styles.bannerhead}>
        <div className={styles.banner}>
      <h1>Your Fav Shows Now On JioHotstar </h1>
      <img src={Arr} alt="Arrow" />
      </div>
      
      <div className={styles.banner2}>
          <ul className={styles.langs}>
          <li>Hindi</li>
          <li>Kannada</li>
          <li>Bangla</li>
          <li>Marathi</li>
          <li>English</li>
          <li>Gujarati</li>
          <li>Tamil</li>
          </ul>
          <div className={styles.shows}>
            <img src={Bnr1} alt="" />
            <img src={Bnr2} alt="" />
            <img src={Bnr3} alt="" />
            <img src={Bnr4} alt="" />
            <img src={Bnr5} alt="" />
            <img src={Bnr6} alt="" />
            <img src={Bnr7} alt="" />
            <img src='' alt="" />
            <img src='' alt="" />

        </div>

      </div>
    </div>

  )
}

export default Banners
