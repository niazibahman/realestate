import Footer from "../footer/footer";

export default function Layout(props){
    return(<div>
        {props.children}
        <Footer/>
        </div>);
}