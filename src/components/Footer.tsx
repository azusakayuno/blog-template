import {AppProps} from "next/app";

interface FooterProps {
  props?: AppProps
}

function Footer (props: FooterProps){
  return <div>Footer Component</div>
}

export default Footer;