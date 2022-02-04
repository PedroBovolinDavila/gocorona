import Logo from '../../images/logo.svg';

import {
  Container,
  Nav,
  LogoImg,
  Menu,
  MenuItem,
  MenuLink
} from './styles';
import { Button } from '../../styles/GlobalStyles';

function Navbar() {
  return (
    <Container>
      <Nav>
        <LogoImg src={Logo} />

        <Menu>
          <MenuItem>
            <MenuLink href='#'>Home</MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href='#'>Features</MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href='#'>Support</MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink href='#'>Contact</MenuLink>
          </MenuItem>
        </Menu>

        <Button type='secondary' href='#'>Download</Button>
      </Nav>
    </Container>
  )
}

export default Navbar