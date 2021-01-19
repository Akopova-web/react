import classes from './Login.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={required} component={Input}></Field>
            </div>
            <div>
                <Field type="password" placeholder={"Password"} name={"password"} validate={required} component={Input}></Field>
            </div>
            <div className={classes.rememberMe}>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}></Field>remember me
            </div>
            {props.error && <div className={classes.formError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }
    return <div>
        {props.isAuth
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