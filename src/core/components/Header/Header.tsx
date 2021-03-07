import {
  Link,
} from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import Colors from '../../theme/Colors';
import PageLink from '../PageLink/PageLink';

interface Props {
  items: { label: string; path: string }[];
}

export default function Header({ items = [] }: Props) {
  return (
    <div>
      <Logo />
      <nav>
        <ul className={styles.List}>
          {
            items.map((item) => (
              <li
                className={styles.Item}
                style={{
                  color: Colors.NebulaGray,
                }}
              >
                <PageLink label={item.label} path={item.path} />
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}
