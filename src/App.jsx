import Home from "./assets/Page/Home.jsx";
import Form from "./assets/Page/Form.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListStudent from "./assets/Page/ListStudent.jsx";


function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element = {<Home />}>
                    <Route path='/' element={<Form/>}/>
                    <Route path="/ListStudent" element={<ListStudent />} />
                    {/*<Route path='/' element={<StudentTable />}/>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
