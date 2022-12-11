import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const bgimg={
    backgroundImage: "url('https://houseey-blog.s3.ap-southeast-1.amazonaws.com/blog/wp-content/uploads/2020/05/07205420/bangalore1-reuters-traffic-moves-along-a-road-in-the-southern-indian-city-of-bangalore-december-14-2005.jpg')",
    fontSize:'50px',
    height:"100%",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={bgimg}>
      <nav className='navbar navbar-expand-lg bg-dark mt-3'>
        <h1 className='navbar-brand text-white'>Smart City</h1>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li className='nav-link'>
              <Link to="/service" >Service</Link>

            </li>

          </ul>
        </div>
       </nav>
     </div>
      
    
  )
}

export default Home
