import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// import { formService, alertService } from '../_services';

export default function Register() {

    // validation
    const validationSchema = Yup.object().shape({
        prn: Yup.string()
            .required('prn is required'),
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        rollNo: Yup.string(),

        class: Yup.string()
            .required('Class is required'),
        ApplicationNo: Yup.string()
            .required('Application is required'),
        totalFee: Yup.string()
            .required('Total Fee is required'),
    });

    const { register, handleSubmit, reset, errors, formState, onSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div className="form-row">
                <div className="form-group col-5">
                    <label>PRN</label>
                    <input name="prn" type="text" ref={register}  />
                </div>
                <div className="form-group col-5">
                    <label>First Name</label>
                    <input name="firstName" type="text" ref={register}  />

                </div>
                <div className="form-group col-5">
                    <label>Last Name</label>
                    <input name="lastName" type="text" ref={register} />

                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Email</label>
                    <input name="email" type="text" ref={register}  />

                </div>
                <div className="form-group col">
                    <label>Roll Number</label>
                    <input name="rollNo" ref={register}  />

                </div>
                <div className="form-group col">
                    <label>Class</label>
                    <select name="class" ref={register} >
                        <option value=""></option>
                        <option value="F.E.">F.E.</option>
                        <option value="S.E.">S.E.</option>
                        <option value="T.E.">T.E.</option>
                        <option value="B.E.">B.E.</option>
                    </select>

                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Application Number</label>
                    <input name="ApplicationNo" type="number" ref={register}  />

                </div>
                <div className="form-group col-5">
                    <label>Total Fees</label>
                    <input name="fees" type="number" ref={register}  />

                </div>
            </div>
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Submit
                </button>
            </div>
        </form>
    );
}
export { Register };
