import './Header.css';
import {Links} from "./Links/Links"

export const Header = () => {
    return(
        <div className="formHeader">
            <ul className="ulHeader">
                <li className="liHeader1">
                    <div className="Logo">
                        Logo
                    </div>
                </li>
                <li className="liHeader2">
                    <Links/>
                </li>
            </ul>
        </div>
    );
}