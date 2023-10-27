import './header.css';


function Header() {
    return (
      <div className='header'>
        <nav className='nav'>
            <ul className='menu'>
                <li className='menu_item'>
                    <a href='#' className='menu_link'>
                        Main
                    </a>
                </li>
                <li className='menu_item'>
                    <a href='#' className='menu_link'>
                        About Us
                    </a>
                </li>
                <li className='menu_item'>
                    <a href='#' className='menu_link'>
                        Services
                    </a>
                </li>
                <li className='menu_item'>
                    <a href='#' className='menu_link'>
                        Team
                    </a>
                </li>
                <li className='menu_item'>
                    <a href='#' className='menu_link'>
                        Contacts
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    );
  }

  export default Header