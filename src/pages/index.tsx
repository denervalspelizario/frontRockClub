import Head from 'next/head'
import styles from '../../styles/home.module.css'
import Header from '../components/header'
import Menu from '../components/menu'
import Agenda from '../components/agenda'
import Info from '../components/info'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Rock Club
        </title>
      </Head>
      
      <Header />
      <Menu />
      <Agenda />
      <Info />
      <Footer />
    </>
  )
}
