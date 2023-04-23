import {AppProps} from "next/app";
import {blogConfig} from "@config/BlogConfig";

interface FooterProps {
  props?: AppProps
}

function Footer (props: FooterProps){

  return (
    <div className="py-3 text-white w-full bg-gray-700 text-center fixed inset-x-0 bottom-0">
      {blogConfig.footerText}
    </div>
  )
}

export default Footer;