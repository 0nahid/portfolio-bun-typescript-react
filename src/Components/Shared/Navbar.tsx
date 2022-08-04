import {Link} from 'react-router-dom';
type Props = {}

export default function Navbar({}: Props) {
  const Navmenu = (
    <li className='navItems'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </li>
)
  return (
    <>
      {Navmenu}
    </>
  )
}