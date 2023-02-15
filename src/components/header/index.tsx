import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon}>
          <Image
            src="/img/headerIcon/menu.png"
            alt="menu icon"
            loading="eager"
            width={35}
            height={35}
            priority
          />
        </div>
        <h1 style={{ fontSize: '42px', marginLeft: '10px',marginTop: '8px' , letterSpacing: '1px', textAlign: 'left' }}>
          <Link href="/">
            <span style={{ fontWeight: 250 }}>Simple</span>
            <span style={{ fontWeight: 100 }}>News</span>
          </Link>
        </h1>
      </header>
    </section>
  )
}
