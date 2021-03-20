import styles from './About.module.css';
import { MathUtil } from '../../Core/util/MathUtil';

export default function About() {
  const images = [
    `${process.env.PUBLIC_URL}/profile/munan.jpg`,
    `${process.env.PUBLIC_URL}/profile/back.jpg`,
    `${process.env.PUBLIC_URL}/profile/birthday.gif`,
  ];
  const randomUrl = images[MathUtil.getRandomNumber(0, images.length)];
  return (
    <div>
      <div className={styles.ImgWrap}>
        <img src={randomUrl} alt="birthday" />
      </div>
      <div className={styles.Profile}>
        <ul>
          <li> 강지현 </li>
          <li> rednebula01018@gmail.com </li>
          <li>
            <br />
          </li>
          <li> 맘편한세상, Cofounder 개발파트장, (2016 -) </li>
          <li> LG CNS, Software Engineer Intern, (2016) </li>
          <li>
            Defense Communication Command Force,
            Software Developer, (2012 - 2014)
          </li>
          <li>
            Korea University,
            Computer Science and Engineering, Brain and Cognitive Science, (2010 - 2016)
          </li>
        </ul>
      </div>
    </div>
  );
}
