import { Header } from '../components/header/index'
import styles from './index.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default MainLayout
