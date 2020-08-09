import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import {
  faHome,
  faUsers,
  faTags,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Be sure to include styles at some point, probably during your bootstraping

function SideBar() {
  return (
    <SideNav
      style={{ backgroundColor: "#102576", position: "fixed" }}
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav>
        <NavItem eventKey="home">
          <NavIcon>
            <FontAwesomeIcon style={{ fontSize: "1.75em" }} icon={faHome} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="clubs">
          <NavIcon>
            <FontAwesomeIcon style={{ fontSize: "1.75em" }} icon={faUsers} />
          </NavIcon>
          <NavText>Clubs</NavText>
        </NavItem>
        <NavItem eventKey="events">
          <NavIcon>
            <FontAwesomeIcon style={{ fontSize: "1.75em" }} icon={faTags} />
          </NavIcon>
          <NavText>Events</NavText>
        </NavItem>
        <NavItem eventKey="calendar">
          <NavIcon>
            <FontAwesomeIcon style={{ fontSize: "1.75em" }} icon={faCalendar} />
          </NavIcon>
          <NavText>Calendar</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default SideBar;
