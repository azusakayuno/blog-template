import {AppProps} from "next/app";
import {blogConfig} from "@config/BlogConfig";

interface HeaderProps {
  props?: AppProps
}

function Header (props: HeaderProps){

  return (
    blogConfig?.headerText ? <div className="py-3 text-white w-full bg-gray-600 text-center fixed top-0">
        {blogConfig?.headerText}
    </div> : <div className="py-3 text-white w-full bg-gray-600 text-center top-0">&#160;</div>
  )
}

export default Header;