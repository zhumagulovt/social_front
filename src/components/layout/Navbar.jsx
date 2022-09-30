import { FaInstagram } from 'react-icons/fa'
import { TbNetwork } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto max-w-4xl'>
        <div className="navbar-start">
        {/* <div className='flex-none px-2 mx-2'> */}
          <TbNetwork className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            Social Network
          </Link>
        {/* </div> */}
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
        </div>
        <div className="navbar-end flex justify-end">
          {/* <div className='flex-1 px-2 mx-2'> */}
            {/* <div className='flex justify-end'> */}
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                Home
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </nav>
  )
}
export default Navbar