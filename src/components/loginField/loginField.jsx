import './loginField.css';
import UserContext from '../../context/userContext';
import { useContext } from 'react';
import { useState } from 'react';
import ttflogo from '../images/ttflogo2.png';
import usersData from '../../api/mock/users.json';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';


export const LoginField = () => {

    var {session, setSession } = useContext(UserContext);

    const [email, setEmail] = useState("");

    const [login, setLogin] = useState("");

    let navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    function checkLogin(log, ema){
        var check = false;
        for(var i = 0; i < usersData.length; i++){
            if((usersData[i].nome === log) && (usersData[i].email === ema)){
                check = true;
            }
        }
        if (check === true){
            setSession(session = true);
            navigate("/repos");
            console.log(session)
        }
        if (check === false){
            alert("User name or email are wrong!");
        }
    }

    

    return(
        <div className='loginField'>
            <img src={ttflogo} alt="ttflogo" className='logoLogin' height="50px" />
            <Grid container columns={20}>
                <Grid item xs={3}>
                    <div className='inputFieldLogo'>
                    <i className="fa fa-user" id='fa-user-login'></i>
                    </div>
                </Grid>
                <Grid item xs={17}>
                    <input className='inputField' placeholder="Insert login"  onChange={handleLoginChange} value={login}/>
                </Grid>
            </Grid>
            <Grid container columns={20}>
                <Grid item xs={3}>
                    <div className='inputFieldLogo'>
                        <i className="fa-solid fa-envelope" id='fa-envelope-login'></i>
                    </div>
                </Grid>
                <Grid item xs={17}>
                    <input className='inputField' placeholder="Insert email"  onChange={handleEmailChange} value={email}/>
                </Grid>
            </Grid>
            <button className='buttonLogin' disabled={!login || !email} onClick={() => checkLogin(login, email)}>
                Login
            </button>
        </div>
    );
}
