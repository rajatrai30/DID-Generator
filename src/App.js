import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Test1 from "./components/Test1/Test1";
import Test2 from "./components/Test2/Test2";
import DidComponent from "./components/DidComponent/DidComponent";
import Validate from "./components/Validate/Validate";
import DidSucess from "./components/DidSucess/DidSucess";
import Issuer from "./components/Issuer/Issuer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/did" element={<DidComponent />} />
        <Route path="/validate" element={<Validate />} />
        <Route path="/validateDIDsuccess" element={<DidSucess />} />
        <Route path="/IssuerValidate" element={<Issuer />} />
        <Route path="/form" element={<Form />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </>
  );
}

export default App;
