import { useState, createContext, useContext } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();
// returns two components
// Provider - wrap return in Parent Component
// Consumer - replaced by useContext() hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'praveen' });
  const logout = () => setUser(null);

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
