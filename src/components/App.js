import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./create/Form";
import NavBar from "./create/NavBar";
import Table from "./table/Table";
import Edit from "./edit/Edit";


function App() {

    return ( 
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Form/>}/>
                <Route path="/table" element={<Table/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
            </Routes>
        </Router>
    );
}

export default App;