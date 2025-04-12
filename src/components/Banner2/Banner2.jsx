import styles from './banner2.module.css'
import Nr1 from '../../assets/banner/nr1.avif'
import Nr2 from '../../assets/banner/nr2.avif'
import Nr3 from '../../assets/banner/nr3.avif'
import Nr4 from '../../assets/banner/nr4.avif'
import Nr5 from '../../assets/banner/nr5.webp'
import Nr6 from '../../assets/banner/nr6.avif'
import Nr7 from '../../assets/banner/nr7.avif'

const Banner2 = () => {
  return (
    <>
    <div className={styles.banner2}>
          <h1>Ultimate Movies On JioHotstar</h1>
          <div className={styles.shows}>
            <img src={Nr1} alt="" />
            <img src={Nr2} alt="" />
            <img src={Nr3} alt="" />
            <img src={Nr4} alt="" />
            <img src={Nr5} alt="" />
            <img src={Nr6} alt="" />
            <img src={Nr7} alt="" />
        </div>
      </div>
      
    </>
  )
}

export default Banner2
