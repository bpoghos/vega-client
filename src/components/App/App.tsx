import RootRouter from "../../routes/RootRouter";
import Header from "../Header";


const App = () => {

    console.log('hello');

    return (
        <div>
            <Header />
            <RootRouter />
        </div>
    )
}

export default App
