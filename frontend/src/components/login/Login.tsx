import { Modal } from 'react-bootstrap';
import Google from '../../img/google.png'
// import Facebook from '../../img/facebook.png'
import Github from '../../img/github.png'
interface ShowProps {
    show: boolean;
    handleClose: () => void
}

const Login: React.FC<ShowProps> = ({ show, handleClose }) => {

    const google = () => {
        window.open("https://shopping-cart-production-4ea1.up.railway.app/auth/google", "_self");
    };

    // const facebook = () => {
    // window.open("https://shopping-cart-production-4ea1.up.railway.app/auth/facebook", "_self");
    // }

    const github = () => {
        window.open("https://shopping-cart-production-4ea1.up.railway.app/auth/github", "_self");
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <div className="login">
                    <div className="wrapper">
                        <div className="left">
                            <div className="loginButton google" onClick={google}>
                                <img src={Google} alt="" className="icon" />
                                Google
                            </div>
                            {/* <div className="loginButton facebook" onClick={google}>
                                <img src={Facebook} alt="" className="icon" />
                                Facebook
                            </div> */}
                            <div className="loginButton github" onClick={github}>
                                <img src={Github} alt="" className="icon" />
                                Github
                            </div>
                        </div>
                        <div className="center">
                            <div className="line" />
                            <div className="or">OR</div>
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Password" />
                            <button className="submit">Login</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Login;
