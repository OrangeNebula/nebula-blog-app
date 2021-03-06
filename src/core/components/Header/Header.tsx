import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <div>
      <Logo />
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Articles
          </li>
        </ul>
      </nav>
    </div>
  );
}
