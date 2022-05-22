import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/styles12.css";
import { Button, Form, TextArea } from "semantic-ui-react";
import axios from "axios";

// reusable component to render input field whenever needed
const InputForm = ({ label, name, type, placeholder, textArea, ...props }) => (
  <Form.Field {...props}>
    <label>{label}</label>
    {textArea ? (
      <TextArea
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
      ></TextArea>
    ) : (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
      ></input>
    )}
  </Form.Field>
);

class SignUpForCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type_of_work: "",
      contact: "",
      email: "",
      cost_of_work: "",
      experience: "",
      location: "",
      address: "",
      password: "",
      confirm_password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    let change = { [e.target.name]: e.target.value };
    this.setState(change);
  }

  onSubmit = () => {
    if (this.state.password !== this.state.confirm_password) {
      alert("Password does not match !!! \n Try Again");
    } else {
      let data = {};
      let keys = Object.keys(this.state);
      keys.forEach((element) => {
        if (this.state[element].length > 0) {
          data[element] = this.state[element];
        }
      });
      console.log(data);
      axios
        .post("/api/signup_customer", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="form-div">
        <h1 className="form-header">Название 2</h1>
        <div className="form-component">
          <Form>
            <InputForm
              name="name"
              value={this.state.name}
              type="text"
              onChange={this.handleChange}
              placeholder="ФИО"
              label="ФИО"
              required
            />

            <InputForm
              name="Место обучение"
              value={this.state.placofstudy}
              type="text"
              placeholder="Место обучение"
              onChange={this.handleChange}
              label=" Место обучение"
              required
              textArea="TextArea"
            />

            <InputForm
              name="contact"
              value={this.state.contact}
              type="number"
              onChange={this.handleChange}
              placeholder="89923335555"
              label="Номер"
              width="8"
              min="0"
            />

            <InputForm
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              placeholder="Email"
              label="Email"
            />

            <InputForm
              name="Data"
              value={this.state.Data}
              type="number"
              onChange={this.handleChange}
              placeholder="01.01.1970"
              label="Дата Рождение"
              width="8"
              min="0"
            />

            <InputForm
              name="hobby"
              value={this.state.hobby}
              onChange={this.handleChange}
              type="text"
              placeholder="Ваши увлечение"
              label="Ваши увлечение"
              textArea="TextArea"
            />

            <div>
              <Button negative>Далее</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUpForCustomer;
