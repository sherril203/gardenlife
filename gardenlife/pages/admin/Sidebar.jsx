import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div>
        <div>
            <p><Link>Admin</Link></p>
            <nav>
                <ul>
                    <li><Link>Admin</Link></li>
                    <li><Link>Products</Link></li>
                    <li><Link>Feedback</Link></li>
                    <li><Link>Profile</Link></li>
                </ul>
            </nav>
        </div>
      
    </div>
  )
}

export default Sidebar
