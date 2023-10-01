
import { Link} from 'react-router-dom';

function Menu() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                
                </ul>
            </nav>
        </div>
        
  
    );
  }
  
  export default Menu;