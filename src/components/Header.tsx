import {AppProps} from "next/app";

interface HeaderProps {
  props?: AppProps
}

function Header (props: HeaderProps){
  return <div>Header Component</div>
}

export default Header;