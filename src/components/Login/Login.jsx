import classes from './Login.module.css';
import React from 'react';
import { reduxForm } from 'redux-form';
import { fieldsCreator, Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = ({handleSubmit, error, }) => {
    return (
        <form onSubmit={handleSubmit}>
                {fieldsCreator("text", "Email", "email", [required], Input)}
                {fieldsCreator("password", "Password", "password", [required], Input)}
                {fieldsCreator("checkbox", null, "rememberMe", [], Input, "remember me")}
                {error && <div className={classes.formError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({loginUser, isAuth}) => {
    const onSubmit = (formData) => {
        loginUser(formData.email, formData.password, formData.rememberMe)
    }
    return <div>
        {isAuth
            ? <Redirect to={"/profile"} />
            : <div className={classes.Login}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        }
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { loginUser })(Login);