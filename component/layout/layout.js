import Footer from "../footer/footer";
import Header from "../header/header";

export default function Layout(props) {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

