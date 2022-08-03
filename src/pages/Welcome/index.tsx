import './styles.scss';

interface Props {
    photoURL?: string | null | undefined;
    displayName?: string | null | undefined;
    email?: string | null | undefined;
}

function Welcome({ photoURL, displayName, email }: Props) {
    return (
        <div className="container">

            <h1 className="title">Welcome</h1>

            <div className="user">
                {photoURL && <img src={photoURL} alt="User profile" />}

                <strong>{displayName}</strong>
                <small>{email}</small>
            </div>

        </div>
    );
}

export default Welcome;