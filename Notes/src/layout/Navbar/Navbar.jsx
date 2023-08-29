//styles
import { StyledNav, Container } from "./Navbar.styles";
import { ButtonFill , Button ,Login} from "../../styles/styles";

//login
import { useAuth0 } from "@auth0/auth0-react";

//icon
import { FiMenu } from "react-icons/fi";
import { FaPlus  } from "react-icons/fa";

//redux
import { useDispatch } from "react-redux";
import { toggleCreateNoteModal, toggleMenu } from "../../features";

import { useLocation } from "react-router-dom";

import { getStandardName } from "../../utils";

const Navbar = () => {
  const dispatch = useDispatch();
  const { loginWithRedirect ,logout ,isAuthenticated ,user} = useAuth0();
  // const { logout } = useAuth0();

  //getting path
  const location = useLocation();
  const {state } = location;


  return (
    <StyledNav>
      <div className="nav__menu">
        <FiMenu onClick={() => dispatch(toggleMenu(true))} />
      </div>

      <Container>
        <div className="nav__page-title">{state?getStandardName(state):"Notes"}</div>

        {state !== "Trash" && state !== "Archive" && (
          <ButtonFill
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav__btn"
          >
            <FaPlus /> <span>Create</span>
          </ButtonFill>
        )}
       <Login>
       <div>
          {isAuthenticated && (
      <div className="username">
        <p>{user.name}</p>
      </div>
    )}
        {isAuthenticated ? (
              <Button
               onClick={() => logout({ returnTo: window.location.origin })}>
               Log Out
              </Button>
          ) : (
            <Button onClick={() => loginWithRedirect()}><span>Log In</span></Button>
           )}
           </div>
       </Login> 
      </Container>
    </StyledNav>
  );
};

export default Navbar;
