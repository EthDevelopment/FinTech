import "./Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";

export const Dashboard = () => {
    return (
        <header>
            <div className="Dash-UI">
                <div className="logo">
                    <FontAwesomeIcon
                        icon={faMoneyBillTrendUp}
                        style={{ fontSize: "3rem" }}
                    />
                </div>
                <div className="content">
                    <h1>Finance Tracker</h1>
                </div>
            </div>
        </header>
    );
};
