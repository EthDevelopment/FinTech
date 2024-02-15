// components/Navbar/Navbar.tsx

import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faList,
    faCreditCard,
    faChartBar,
    faWallet,
    faCog,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <a href="/dashboard">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/transactions">
                        <FontAwesomeIcon icon={faList} />
                        <span>Transactions</span>
                    </a>
                </li>
                <li>
                    <a href="/accounts">
                        <FontAwesomeIcon icon={faCreditCard} />
                        <span>Accounts</span>
                    </a>
                </li>
                <li>
                    <a href="/reports">
                        <FontAwesomeIcon icon={faChartBar} />
                        <span>Reports</span>
                    </a>
                </li>
                <li>
                    <a href="/budget">
                        <FontAwesomeIcon icon={faWallet} />
                        <span>Budget</span>
                    </a>
                </li>
                <li>
                    <a href="/settings">
                        <FontAwesomeIcon icon={faCog} />
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
