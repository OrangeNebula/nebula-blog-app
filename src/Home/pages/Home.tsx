import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.Wrap}>
      <div className={styles.BackgroundWrap}>
        <img
          src={`${process.env.PUBLIC_URL}/img/home-nebula-1.png`}
          alt="home"
          className={styles.BackGroundImage}
        />
      </div>
    </div>
  );
}
