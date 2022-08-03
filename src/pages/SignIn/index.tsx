import { useState } from 'react';
import Welcome from '../Welcome';

import Divider from '../../components/Divider';
import { GoogleLogo } from 'phosphor-react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';

import './styles.scss';

function SignIn() {

    const [showWelcome, setShowWelcome] = useState(false);

    const [user, setUser] = useState<User>({} as User);

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setShowWelcome(true);

            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            {!showWelcome &&
                <>
                    <div className="textTop">
                        <h1>Here you can login</h1>
                        <p>Let's join us :)</p>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="">Password</label>
                        <input type="text" />
                    </div>

                    <button className="button">LOGIN</button>

                    <div className="divOr">
                        <Divider />
                        <p>OR</p>
                        <Divider />
                    </div>

                    <button className="buttonAuth" onClick={signInWithGoogle}>
                        <GoogleLogo />
                        LOGIN WITH GOOGLE
                    </button>
                </>
            }

            {showWelcome &&
                <Welcome photoURL={user.photoURL} displayName={user.displayName} email={user.email} />
            }

        </div>
    );
}

export default SignIn;