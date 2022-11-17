import './index.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom';

const RegisterPage = () => {
    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",   
            phone:"",
            password:"",
            confirmedPassword:""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required").min(4, "Tài khoản có ít nhất 4 kí tự"),
            email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"E-mail có vấn đề"),
            phone: Yup.string().required("Required").matches(/^[0-9\-\+]{9,15}$/,"Số điện thoại có vấn đề"),
            password: Yup.string().required("Required").min(6, "Mật khẩu có ít nhất 6 kí tự"),
            confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp")
        }),
        onSubmit: (values) => {
            window.alert("Form submitted");
            console.log(values);
        }
    });
    return ( 
        <>
            <div className="register-page">
                <h1>Sign up</h1>
                <form action="" className="infoform" onSubmit={formik.handleSubmit}>
                    <input type="text" id="username" name="username" placeholder="Tên đăng nhập" value={formik.values.name} onChange={formik.handleChange}/>
                    {formik.errors.username && (
                        <p className="errorMsg"> {formik.errors.username} </p>
                    )}
                    <input type="email" id="email" name="email" placeholder="E-mail" value={formik.values.email} onChange={formik.handleChange}/>
                    {formik.errors.email && (
                        <p className="errorMsg"> {formik.errors.email} </p>
                    )}
                    <input type="phone" id="phone" name="phone" placeholder="Số điện thoại" value={formik.values.phone} onChange={formik.handleChange}/>
                    {formik.errors.email && (
                        <p className="errorMsg"> {formik.errors.phone} </p>
                    )}
                    <input type="password" id="password" name="password" placeholder="Mật khẩu" value={formik.values.password} onChange={formik.handleChange}/>
                    {formik.errors.password && (
                        <p className="errorMsg"> {formik.errors.password} </p>
                    )}
                    <input type="password" id="confirmedPassword" name="confirmedPassword" placeholder="Nhập lại mật khẩu" value={formik.values.confirmedPassword} onChange={formik.handleChange}/>
                    {formik.errors.confirmedPassword && (
                        <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
                    )}
                    <button type="submit">Đăng kí</button>
                    <button type="submit"><Link to="/login">Đã có tài khoản.Đăng nhập ngay</Link></button>
                </form>
            </div>
        </>
     );
}
 
export default RegisterPage;