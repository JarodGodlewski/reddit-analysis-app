import styled from 'styled-components';
import { Link } from 'react-scroll';
import { BiNetworkChart } from 'react-icons/bi';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #e9ba23;
  font-size: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #e9ba23;
  p {
    transform: translate(-140%, 125%);
    font-weight: bold;
  }
`;

export const Bars = styled(BiNetworkChart)`
  font-size: 3rem;
  transform: translate(-25%, -15%);
`;