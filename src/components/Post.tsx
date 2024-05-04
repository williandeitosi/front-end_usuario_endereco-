import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/104787632?v=4'
            alt=''
          />
          <div className={styles.authorInfo}>
            <strong>Willian Giovanini</strong>
            <span>Dev FullStack</span>
          </div>
        </div>
        <time>publicado há 1h</time>
      </header>
      <main className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href='#'>jane.design/doctorcare</a>
        </p>

        <p>
          <a href='#'>#novoprojeto </a>
          <a href='#'>#nlw </a>
          <a href='#'>#rocketseat</a>
        </p>
      </main>

      <form className={styles.commentsForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
