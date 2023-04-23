import Header from "./Header";
import Footer from "./Footer";

export default function Layout( {children}: any ) {
  return (
    <>
      <Header />
      <div className={"mt-4 mb-6 mx-14 main-component"}>
        { children }
      </div>
      <Footer />
    </>
  );
}