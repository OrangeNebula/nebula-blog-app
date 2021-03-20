import { Link } from 'react-router-dom';
import styles from './PageLink.module.css';

interface Props {
  label: string;
  path: string;
}

export default function PageLink({ label, path }: Props) {
  return (
    <span className={styles.Link}>
      <Link to={path}>
        {label}
      </Link>
    </span>
  );
}
