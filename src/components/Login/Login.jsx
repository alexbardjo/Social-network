import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../Common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../Common/FormsControl/FormControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {CreateField ('Email', 'email', [required], Input)}
                {CreateField ('Password', 'password', [required], Input, {type: 'password'})}
                {CreateField (null, 'remember me', [], Input, {type: 'checkbox'}, 'remember me')}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {login})(Login);