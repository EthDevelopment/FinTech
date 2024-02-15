import { Navbar } from "../components/Navbar/Navbar";
import { Dashboard } from "../components/Dashboard/Dashboard";
import "./Index.scss";

export const Index = () => {
    return (
        <div className="App">
            <Dashboard />
            <Navbar />
        </div>
    );
};
