import styles from './Avatar.module.css';

type prop = {
  src: string;
  hasBorder?: boolean;
};

export function Avatar({ hasBorder = true, src }: prop) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
