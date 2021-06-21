import React, { Component } from 'react'
import { useForm } from "react-hook-form";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
          prn: "",
          firstName: "",
          lastName: "",
          email: "",
          class: "",
          rollNo: "",
          applicationNo: "",
          totalFee: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    prn = (event) => {
        this.setState({
            prn: event.target.value
        })
    }
    firstName = (event) => {
        this.setState({
          firstName: event.target.value
        })
    }
    lastName = (event) => {
        this.setState({
          lastName: event.target.value
        })
    }
    email = (event) => {
        this.setState({
          email: event.target.value
        })
    }
    class = (event) => {
        this.setState({
            class: event.target.value
        })
    }
    rollNo = (event) => {
        this.setState({
          rollNo: event.target.value
        })
    }
    applicationNo = (event) => {
        this.setState({
          applicationNo: event.target.value
        })
    }

    totalFee = (event) => {
        this.setState({
          totalFee: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.state = ({
          prn: "",
          firstName: "",
          lastName: "",
          email: "",
          class: "",
          rollNo: "",
          applicationNo: "",
          totalFee: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>
                <div className="form-row">
                <div className="form-group col-3">
                    <label>PRN</label>
                    <input type="text" value={this.state.prn} onChange={this.prn} placeholder="PRN" />
                </div>
                <div className="form-group col-3">
                    <label>First Name</label>
                    <input type="text" value={this.state.firstName} onChange={this.firstName} placeholder="first Name" />
                </div>
                <div className="form-group col-3">
                    <label>Last Name</label>
                    <input type="text" value={this.state.lastName} onChange={this.lastName} placeholder="Last Name" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-3">
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.email} placeholder="Email..." />
                </div>
                <div className="form-group col-3">
                    <label>Class</label>
                    <select onChange={this.class} defaultValue="Select Class">
                        <option value=""></option>
                        <option value="F.E.">F.E.</option>
                        <option value="S.E.">S.E.</option>
                        <option value="T.E.">T.E.</option>
                        <option value="B.E.">B.E.</option>
                    </select>
                </div>
                <div className="form-group col-3">
                    <label>Roll Number</label>
                    <input type="number" value={this.state.rollNo} onChange={this.rollNo} placeholder="Roll Number..." />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-6">
                    <label>Application Number</label>
                    <input type="number" value={this.state.applicationNo} onChange={this.applicationNo} placeholder="application Number..." />
                </div>
                <div className="form-group col-3">
                    <label>Total Fees</label>
                    <input type="number" value={this.state.totalFee} onChange={this.totalFee} placeholder="Total Fees..." />
                </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        )}
      }

export default Form