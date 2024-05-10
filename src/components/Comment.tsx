import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://avatars.githubusercontent.com/u/104787632?v=4'
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jhon Dev</strong>
              <time>2h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Bom dia</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
