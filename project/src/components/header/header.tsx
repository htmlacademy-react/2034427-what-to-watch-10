import {PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {RouteName} from '../../constants/route-name';

type HeaderProps = PropsWithChildren<{
  className?: string;
}>

function Header({className, children}: HeaderProps): JSX.Element {
  return (
    <header className={classNames('page-header', className)}>
      <div className="logo">
        <Link to={RouteName.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {children}

      <ul className="user-block">
        <li className="user-block__item">
          <Link
            to={RouteName.MyList}
            className="user-block__avatar"
          >
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </Link>
        </li>
        <li className="user-block__item">
          <a href="/" className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
