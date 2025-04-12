import styles from './hrbanner.module.css'
import hbr1 from '../../assets/horizontal-banner/hr-banner1.avif'
import hbr2 from '../../assets/horizontal-banner/hr-banner2.webp'
import hbr3 from '../../assets/horizontal-banner/hr-banner3.webp'
import hbr4 from '../../assets/horizontal-banner/hr-banner4.avif'
import hbr5 from '../../assets/horizontal-banner/hr-banner5.avif'

const HrBanner = () => {
  return (
    <div className={styles.hrbanner}>
        <div className={styles.hrbanner__content}>
            <img src={hbr1} alt="hbr1" />
            <img src={hbr2} alt="hbr2" />
            <img src={hbr3} alt="hbr3" />
            <img src={hbr4} alt="hbr4" />
            <img src={hbr5} alt="hbr5" />
        <div className={styles.shadow}></div>
        </div>
    </div>
  )
}

export default HrBanner
