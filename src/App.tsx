import "./App.css";
import CoursesSection from "./components/courses/section";
import FinancialInfo from "./components/financial-info";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <CoursesSection />
      <FinancialInfo/>
    </div>
  );
}

export default App;
