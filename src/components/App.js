import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./create/Form";
import NavBar from "./create/NavBar";
import Table from "./table/Table";
import Edit from "./edit/Edit";
import useFetch from "./fetchPost/useFetch"
import { useState } from "react";


function App() {
    const [updateFetch, setUpdateFetch] = useState(false);
    const {data, isLoading, error} = useFetch('http://localhost:8000/applications', updateFetch);
    const [filterProduct, setFilterProduct] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');


    return ( 
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Form/>}/>
                <Route path="/table" element={<Table 
                    setFilterProduct={setFilterProduct} 
                    filterProduct={filterProduct} 
                    setFilterStatus={setFilterStatus} 
                    filterStatus={filterStatus}
                    data={data} 
                    isLoading={isLoading} 
                    error={error}
                    />
                }/>
                <Route path="/edit/:id" element={<Edit setUpdateFetch={setUpdateFetch} updateFetch={updateFetch}/>}/>
            </Routes>
        </Router>
    );
}

export default App;