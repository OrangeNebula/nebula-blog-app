import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/img/home-nebula-1.png`}
          alt="home"
          className={styles.BackGroundImage}
        />
      </div>
    </div>
  );
}
