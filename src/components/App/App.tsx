import RootRouter from "../../routes/RootRouter";
import Footer from "../Footer/Footer";
import Header from "../Header";


const App = () => {

    console.log('hello');

    return (
        <div>
            <Header />
            <RootRouter />
            <Footer />
        </div>
    )
}

export default App
