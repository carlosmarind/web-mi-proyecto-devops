import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Login() {
    const router = useRouter()
    const [showError, setShowError] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);

        if (formData.username === 'standard_user' && formData.password === 'standard_user') {
            router.push("/")
            return;
        }
        setShowError(true);
    }

    return (
        <div className="login_container">
            <div className="login_logo">Mi Login</div>
            <div className="login_wrapper" data-test="login-container">
                <div className="login_wrapper-inner">
                    <div id="login_button_container" className="form_column">
                        <div className="login-box">
                            <form>
                                <div className="form_group">
                                    <input className="input_error form_input" placeholder="Username" type="text" data-test="username" id="user-name" name="username" value={formData.username} onChange={handleFormChange} />
                                </div>
                                <div className="form_group">
                                    <input className="input_error form_input" placeholder="Password" type="password" data-test="password" id="password" name="password" value={formData.password} onChange={handleFormChange} />
                                </div>
                                {showError && <div className="error-message-container">
                                    <div className="error-message-container error" >
                                        <h3 data-test="error">
                                            <button className="error-button" data-test="error-button" onClick={() => { setShowError(false) }}>X</button>
                                            Epic sadface: Username and password do not match any user in this service
                                        </h3>
                                    </div>
                                </div>}
                                <input type="submit" onClick={submitForm} className="submit-button btn_action" data-test="login-button" id="login-button" name="login-button" value="Login" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};
