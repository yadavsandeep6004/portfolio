import './style.css';
import { AiOutlineMail } from 'react-icons/ai';
import React from 'react';
import { Formik } from 'formik';

const AppForm = () => {
    return (
        <div className='AppForm'>
            <Formik
                initialValues={{
                    message: '',
                    email: '',
                    subject: ''
                }}
                validate={values => {
                    const errors = {};


                   if(!values.message){
                    errors.message='Required';
                   }else if(values.message.length<=5){
                    errors.message='minimum message length 5'
                   }

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }


                    if(!values.subject){
                        errors.subject='Required';
                       }else if(values.subject.length<=5){
                        errors.subject='minimum message length 5'
                       }


                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='input-containar'>

                            <div>
                                <input
                                    type="text"
                                    name="message"
                                    placeholder='Your Message'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                                {errors.message && touched.message && errors.message}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Your Email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder='Your Subject'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}
                                />
                                {errors.subject && touched.subject && errors.subject}
                            </div>
                        </div>
                        <div className='btn-containar'>
                            <div>
                                <textarea placeholder='Message' />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit Message
                                <AiOutlineMail />
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AppForm;