import styles from './index.module.scss'
import moment from 'moment'
import Props from '../types'
import Link from 'next/link'

const PickupArticle: React.FC<Props> = ({ pickupArticles }) => {
  return (
    <section className={styles.pickup}>
      <h1 className={styles.article__heading}>PickUp</h1>
      {pickupArticles && pickupArticles.map((article, index) => {
        const time =
          moment(article.publishedAt || moment.now())
            .fromNow()
            .slice(0, 1) == 'a'
            ? 1
            : moment(article.publishedAt || moment.now())
                .fromNow()
                .slice(0, 1)
        return (
          <Link href={article.url} key={index} target="_blank" rel="noopener">
            <article className={styles.article__main}>
              <div className={styles.article__title}>
                <p>{article.title}</p>
                <p className={styles.article__time}>{time}時間前</p>
              </div>
              {article.urlToImage && (
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                <img
                  key={index}
                  src={article.urlToImage}
                  className={styles.article__img}
                />
              )}
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default PickupArticle
