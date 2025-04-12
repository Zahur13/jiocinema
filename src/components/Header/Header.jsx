import styles from './header.module.css'
import JCLogo from '../../assets/jc_logo_v2.svg'
import SearchIcon from '../../assets/search.svg'
import VoiceIcon from '../../assets/voice-search.svg'
import UserIcon from '../../assets/avatar_user.svg'
function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
        <img className={styles.logo} src={JCLogo} alt="Logo" />

          <ul className={styles.links}> 
            <li>Home</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>More</li>
          </ul>
        </nav>
        <div className={styles.left}>
        <div className={styles.search}>
          <img src={SearchIcon} alt="search" />
          <input type="text" placeholder="Search for movies, sports, TV shows, and more..." />
          <img src={VoiceIcon}alt="voice" />
        </div>
        <img src={UserIcon} alt="user" />
        </div>
      </header>
    </>
  )
}

export default Header

