import styles from './Header.module.css';
import postLogo from '../assets/post-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={postLogo} alt='post logo' />
      <strong>Post Feed</strong>
    </header>
  );
}
