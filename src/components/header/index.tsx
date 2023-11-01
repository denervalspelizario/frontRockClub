import Image from 'next/image'; // importando Image que trata imagens no next
import Logo from '../../../public/rockclub.png'
import styles from './styles.module.css'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMedia}>
        <Image src={Logo} alt='Programador Logo' className={styles.headerLogo} />
        <nav className={styles.headerNavMedia}>
          <Link href="https://www.facebook.com"  target="_blank">
            <BsFacebook className={styles.socialMedia}/>
          </Link>
          <Link href="https://www.facebook.com"  target="_blank">
            <BsTwitter  className={styles.socialMedia}/>
          </Link>
          <Link href="https://www.facebook.com"  target="_blank">
            <BsYoutube  className={styles.socialMedia}/>
          </Link>
          <Link href="https://www.facebook.com"  target="_blank">
            <BsInstagram  className={styles.socialMedia}/>
          </Link>
        </nav>
      </div>
    </header>
  )
}
