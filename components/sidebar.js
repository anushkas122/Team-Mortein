import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { faHome, faUniversity } from "@fortawesome/free-solid-svg-icons";
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
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <FontAwesomeIcon
              // className="fa fa-fw fa-home"
              style={{ fontSize: "1.75em" }}
              icon={faHome}
            />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <FontAwesomeIcon
              // className="fa fa-fw fa-line-chart"
              style={{ fontSize: "1.75em" }}
              icon={faUniversity}
            />
          </NavIcon>
          <NavText>Clubs</NavText>
          {/* <NavItem eventKey="charts/linechart">
            <NavText>Line Chart</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem> */}
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default SideBar;
