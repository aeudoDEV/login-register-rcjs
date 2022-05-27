import './App.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import Axios from 'axios';

function App() {

  const handleClickLogin = (values) => console.log(values);
  const handleClickRegister = (values) => {
    Axios.post('http://localhost:3000/login', {email: values.email, password:values.password,}).then((response)=>{console.log(response)});
  }
  const validationLogin = yup.object().shape
  (
    {
      email: yup
        .string()
        .email("Email invalido")
        .required("Necessario Preencher"),
      password: yup
        .string()
        .min(8,"Deve possuir 8C")
        .required("Necessario Preencher")
    }
  )
  const validationRegister = yup.object().shape
  (
    {
      email: yup
        .string()
        .email("Email Utilizado")
        .required("Necessario Preencher"),
      password: yup
        .string()
        .min(8,"Deve possuir 8C")
        .required("Necessario Preencher"),
      Confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Senhas n iguais")
    }
  )

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field
              name="email"
              className="form-field"
              placeholder="Email"
              />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <Field
              name="password"
              className="form-field"
              placeholder="Senha"
              />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
            
            <button className="button" type="submit">
              Sign-in
            </button>
        </Form>
      </Formik>


      <h1>Register</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field
              name="email"
              className="form-field"
              placeholder="Email"
              />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <Field
              name="password"
              className="form-field"
              placeholder="Senha"
              />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <div className="login-form-group">
            <Field
              name="Confirmpassword"
              className="form-field"
              placeholder="Confirmar Senha"
              />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
            
            <button className="button" type="submit">
              Sign-in
            </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
