import {AppProps} from "next/app";

interface FooterProps {
  props?: AppProps
}

function Footer (props: FooterProps){
  return <div className="py-3 text-white w-full bg-gray-700 text-center fixed inset-x-0 bottom-0">&copy; Anderson Koh</div>
}

export default Footer;