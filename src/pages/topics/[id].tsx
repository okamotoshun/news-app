import Props from '@/components/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Article from '../../components/article'
import Nav from '../../components/nav'
import MainLayout from '../../layouts/index'
import styles from '../../styles/index.module.scss'
import { ParsedUrlQuery } from 'node:querystring'
import { GetStaticProps } from 'next'

// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
interface Params extends ParsedUrlQuery {
  id: string
}

function Topic({ title, articles }: Props) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
      <Head>
        <title>Simple News - {title ? title.toUpperCase() : ''}</title>
      </Head>
      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main} style={{ marginRight: '10%' }}>
          <Article title={title} articles={articles} />
        </div>
      </div>
    </MainLayout>
  )
}

// eslint-disable-next-line @next/next/no-typos
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {

  const pageSize = 10 // 取得したい記事の数
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&category=${
      params ? params.id : ''
    }&country=jp&apiKey=2f716e4bfd704b6e9bb2a135c19f0c50`
  )

  const topicJson = await topicRes.json()
  const articles = await topicJson?.articles

  const title = params ? params.id : ''
  console.log(title)
  console.log(articles)


  return {
    props: { articles, title },
    revalidate: 60,
  }
}

export default Topic
