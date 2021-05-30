import styles from './Caption.module.css';

function Caption({ children }: { children: any }) {
  return (
    <p className={styles.Caption}>
      { children }
    </p>
  );
}

export default Caption;
