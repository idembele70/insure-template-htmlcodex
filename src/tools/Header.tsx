 import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faArrowUp, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Tablet } from './responsive';

const Top = styled.div`
display: inline-flex;
padding: 8px 48px;
align-items: center;
justify-content: space-between;
  height: 40px;
  width: 100%;
  background-color: #15233C;
  top:0;
  ${Tablet({display:"none"})}
`;
const TopLeft = styled.div`
 height: 100%;
  display: flex;
  gap: 28px;
`;
const TopLeftRow = styled.div`
  display: inline-flex;
  align-items:center;
  color: rgba(255, 255, 255, 0.502);
  gap: 8px;
`;
const TopLeftRowText = styled.small`
  font-size: 0.875em;
  color:rgba(255,255,255,0.5);
`;

const TopRight = styled.div`
 height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;
const TopIcon = styled(FontAwesomeIcon)`
  cursor:pointer;
  & path {
    color: rgba(255, 255, 255, 0.502);

  }
`
interface BottomProps {
  isSticky:boolean
}
const Bottom = styled.div<BottomProps>`
  padding: 8px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 500ms ease;
  position:sticky;
  top:${({ isSticky }) => isSticky ? 0 : -100}px;
box-shadow: ${({ isSticky }) => isSticky ?  "0 0.125rem 0.25rem rgba(0,0,0,0.08)" : "" };;
  z-index:1;
  background: #FFF;
  ${Tablet({
    paddingLeft: "24px",
    paddingRight: "24px",
    flexWrap:"wrap",
  })}
`; 
export const LogoContainer = styled(Link)`
display: inline-flex;
align-items: center;
gap: 16px;
cursor: pointer;
text-decoration: none;
`;
export const Title = styled.h1`
  ${
    Tablet({
      fontSize: "calc(1.375rem + 1.5vw)"
    })
  }
`;
export const Logo = styled.img`
  height: 60px;
  ${Tablet({height:45})}
`;
interface NavProps {
  expanded: boolean
}
const NavContainer = styled.div<NavProps>`
${({ expanded }) =>Tablet({
  flexBasis: "100%",
  flexGrow: 1,
  transition: "max-height 350ms ease",
  maxHeight:  expanded ? 500 : 0 ,
  overflow: "hidden",
})}
  `;
const Nav = styled.nav`
  display: flex;
  gap: 24px;
  background-color: #F6F7FC;
  border-radius: 10px;
  padding: 8px 16px;
  ${Tablet({
    flexDirection: "column",
    gap:0,
    marginTop:24,
    paddingTop:24,
    paddingBottom:24,
  })}
`;
interface NavItemProps {
  color: string
}
const NavItem = styled(NavLink)<NavItemProps>`
  color:#${({ color }) => color };
  transition: 350ms color ease-in;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color:#275FC9;
    & path {
      color:#275FC9;
    }
  }
  font-weight: 600;
  font-size: 16px;
  ${Tablet({padding: "8px 0"})}
`;
const DropDown = styled.div`
  position:relative;
  &:hover {
    & > div{
      visibility: visible;
      opacity:1;
      transform: translateY(-32px);
      // Reset to initial state
  ${Tablet({
      transform: "translateY(0)",
  })} 
    }
  }
  ${Tablet({
    padding: "8px 0",
  })} 
`;
interface DropDownNavItemProps {
  selected:boolean
}
const DropDownNavItem = styled(NavItem)<DropDownNavItemProps>`
  ::after{
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    display:none;
  }
  & svg {
    margin-left:8px;
  }
  color: #${({ selected }) => selected ? "015FC9" :" 696E77" };
  & path {
    color: #${({ selected }) => selected ? "015FC9" :" 696E77" };
  }
`;
interface DropDownListProps {
  expand:boolean
}
const DropDownList = styled.div<DropDownListProps>`
  position:absolute;
  padding: 8px 0px;
  display:flex;
  flex-direction:column;
  background-color: #F4F6FB;
  border-radius: 10px;
  right:0;
  top:64px;
  visibility: hidden;
  opacity:0;
  transform: translateY(0);
  transition: all 500ms ease 0s;
  ${
   ({expand})=> Tablet({
      position:"static",
      visibility:"visible",
      opacity: 1,
      display: expand ? "flex" : "none"
    })
  }
  `;
  interface DropDownItemProps {
    selected:boolean
  }
const DropDownItem = styled(NavLink)<DropDownItemProps>`
width: 160px;
height:32px;
padding:4px 16px;
box-sizing: border-box;
text-decoration: none;
color: #${({ selected }) => selected ? "FFF" : "1C1E21"};
&:hover {
  background-color: #E5E9EC;
}
background-color: ${({ selected }) => selected ? "#015FC9" :"transparent" };
`;
const QuoteButton = styled.a`
  border-radius: 10px;
  color: #DFEBF8;
  background-color: #275FC9;
  padding: 6px 16px;
  line-height: 1.5;
  font-weight: 400;
  border: 1px solid transparent;
  cursor:pointer;
  user-select: none;
  font-size:16px;
  transition: all 0.5s ease;
  &:hover {
    background: #00D1EC;
  }
  ${Tablet({
    display: "none"
  })}
`;

const Bars = styled.button`
 display:none;
${Tablet({display:"initial"})}
  border: 1px solid #E5E5E5;
  background-color: transparent;
  color: #737373;
  cursor:pointer;
  padding: 8px 16px;
  border-radius: 10px;
  transition: all 150ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 4px;
  }
`;
interface ScrollToTopBtnProps {
  visible:boolean
}
const ScrollToTopBtn = styled.button<ScrollToTopBtnProps>`
  height:48px;
  width:48px;
  z-index:1;
  position:fixed;
  bottom:30px;
  right:30px;
  background-color: #015FC9;
  border:1px solid #015FC9;
  border-radius: 10px;
  transition: all 150ms ease-out, opacity 500ms ease-in;
  cursor:pointer;
  opacity:${({ visible }) => visible ? 1 : 0};
  visibility:${({ visible }) => visible ? "visible" : "hidden"};
  &:hover {
    border-color:#0DD3F1;
    background-color: #0DD3F1;
  }
  &:focus {
   box-shadow: 0 0 0 0.25rem rgba(39,119,209,0.5);
  }
`;
const BtnIcon = styled(FontAwesomeIcon)`
  & path {
    color:#FFF;
  }
  
`;
const Header = () => {
  const [activeLink, setActiveLink] = React.useState("home");
   const {pathname} = useLocation()
   const [isDesktop, setIsDesktop] = React.useState(false);
    React.useEffect(() => {
  const handleWindowSizeChange = () => {   
    if(window.innerWidth >= 992) // 992 is the Tablet breakpoint on the CSS
    setIsDesktop(true)
    else
    setIsDesktop(false)
   }
   window.addEventListener("resize",handleWindowSizeChange)
   return ()=>{
     window.removeEventListener("resize",handleWindowSizeChange)
    }
  }, [])

   React.useEffect(() => {
    if(["/feature",
    "/appointment",
    "/team",
    "/testimonial",
    "/404"].includes(pathname))
    setActiveLink("page")
    else
    setActiveLink(pathname)
   }, [pathname])
   const [showNavbar, setShowNavbar] = React.useState(false);
   const [showDropDownList, setShowDropDownList] = React.useState(false);
   
   const [isSticky, setIsSticky] = React.useState(false);
   React.useEffect(()=>{
    const handleScroll = ()=> {
      if(window.scrollY > 300)
      setIsSticky(true)
      else
      setIsSticky(false)
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
   })
   const handleColor = (link:string) => activeLink === link ? "275FC9": "696E77"
   const handleScrollToTop = () => {
   window.scroll({
    top:0,
    behavior:"smooth"
   })}
  return (
    <>
      <Top>
        <TopLeft>
          <TopLeftRow>
            <TopIcon icon={faPhone} size="sm"  />
            <TopLeftRowText>+012 345 6789</TopLeftRowText>
          </TopLeftRow>
          <TopLeftRow>
            <TopIcon icon={faEnvelopeOpen} size="sm" />
            <TopLeftRowText>info@example.com</TopLeftRowText>
          </TopLeftRow>
          <TopLeftRow>
            <TopIcon icon={faClock} size="sm"/>
            <TopLeftRowText>Mon - Fri : 09 AM - 09 PM
            </TopLeftRowText>
          </TopLeftRow>
        </TopLeft>
        <TopRight>
          <TopIcon icon={faFacebookF}/>
          <TopIcon icon={faTwitter}/>
          <TopIcon icon={faLinkedinIn}/>
          <TopIcon icon={faInstagram}/>
        </TopRight>
      </Top>
      <Bottom isSticky={isSticky}>
        <LogoContainer to="/">
      <Logo src={`${process.env.PUBLIC_URL}/assets/icon/icon-02-primary.png`}/>
        <Title>Insure</Title>
        </LogoContainer>
        <Bars onClick={()=>setShowNavbar(!showNavbar)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </Bars>
        <NavContainer expanded={showNavbar}>
        <Nav>
          <NavItem to="/" color={handleColor("/")} >Home</NavItem>
          <NavItem to="/about" color={handleColor("/about")} >About Us</NavItem>
          <NavItem to="/service" color={handleColor("/service")} >Our Services</NavItem>
          <DropDown onClick={()=> !isDesktop && setShowDropDownList(!showDropDownList) }>
          <DropDownNavItem to="" onClick={(e)=>e.preventDefault()} color={handleColor("/page")} selected={activeLink === "page"}>Pages</DropDownNavItem>
          <DropDownList expand={showDropDownList}>
            <DropDownItem selected={pathname === "/feature"} to="/feature">Features</DropDownItem>
            <DropDownItem selected={pathname === "/appointment"} to="/appointment">Appointment</DropDownItem>
            <DropDownItem selected={pathname === "/team"} to="/team">Team Members</DropDownItem>
            <DropDownItem selected={pathname === "/testimonial"} to="/testimonial">Testimonial</DropDownItem>
            <DropDownItem selected={pathname === "/404"} to="/404">404 Page</DropDownItem>
          </DropDownList>
          </DropDown>
          <NavItem to="contact" color={handleColor("/contact")}>Contact Us</NavItem>
        </Nav>
        </NavContainer>
        <QuoteButton>Get A Quote</QuoteButton>
      </Bottom>
      {<ScrollToTopBtn visible={isSticky} onClick={handleScrollToTop}>
        <BtnIcon icon={faArrowUp} size="lg"/>
        </ScrollToTopBtn>}
    </>
  )
}

export default Header