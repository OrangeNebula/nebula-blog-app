import styles from './About.module.css';

export default function About() {
  return (
    <div>
      <div className={styles.ImgWrap}>
        <img src={`${process.env.PUBLIC_URL}/profile/birthday.gif`} alt="birthday" />
      </div>
      <div className={styles.Profile}>
        <ul>
          <li> 강지현 </li>
          <li> rednebula01018@gmail.com </li>
          <li> Backend Engineer </li>
          <li> 맘편한세상 개발파트장 </li>
        </ul>
      </div>
    </div>
  );
}
