import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Statement from './Statement';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLastName: '',
            email: '',
            subject: '',
            message: '',
            agreement: false,
            sending: false,
            statement: '',

            errors: {
                firstLastName: false,
                email: false,
                subject: false,
                message: false,
                agreement: false,
            }
        }
    }

    messages = {
        firstLastName_incorrect: 'Podaj minimum 5 znaków, bez cyfr',
        email_incorrect: 'Podaj prawidłowy adres email',
        subject_incorrect: 'Podaj minimum 3 znaki',
        message_incorrect: 'Podaj minimum 10 znaków',
        agreement_incorrect: 'Zaakceptuj politykę prywatności, jeśli zgadzasz się na wysłanie tej wiadomości.',
    }

    patterns = {
        email: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
        text: '[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+',
        textarea: '.+',
    }

    handleChange = (e) => {
        const type = e.target.type;
        const name = e.target.name;
        const value = e.target.value;

        if (type === "text" || type === "email" || type === "textarea") {
            this.setState({
                [name]: value,
            })
        } else if (type === "checkbox")
            this.setState(prevState => ({
                agreement: !prevState.agreement,
            }))
    }

    formValidation = () => {
        let firstLastName = false, subject = false, email = false, message = false, agreement = this.state.agreement;
        let correct = false;

        const firstLastNameReg = new RegExp(this.patterns.text, "gi");
        const subjectReg = new RegExp(this.patterns.text, "gi");
        const messageReg = new RegExp(this.patterns.textarea, "gi");
        const emailReg = new RegExp(this.patterns.email, "gi");

        if (this.state.firstLastName.length > 4 && firstLastNameReg.test(this.state.firstLastName))
            firstLastName = true;


        if (this.state.subject.length > 2 && subjectReg.test(this.state.subject))
            subject = true;

        if (this.state.email.length > 0 && emailReg.test(this.state.email))
            email = true;

        if (this.state.message.length >= 10 && messageReg.test(this.state.message))
            message = true;

        if (firstLastName && subject && email && message && agreement)
            correct = true;

        return ({
            correct,
            firstLastName,
            subject,
            email,
            message,
            agreement
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { firstLastName, email, subject, message, agreement } = this.state;
        const validation = this.formValidation();

        if (validation.correct) {
            const url = "https://dev.radioainkarim.pl/api/contact/send.php";

            const data = {
                "person": firstLastName,
                "subject": subject,
                "email": email,
                "content": message,
                "agreement": Number(agreement)
            };

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(response => {
                    this.setState({
                        sending: false,
                        statement: response.message,
                    });

                    setTimeout(() => {
                        this.setState({
                            statement: '',
                        });
                    }, 10000);
                })
                .catch(error => {
                    this.setState({
                        statement: error.message,
                    })
                });

            this.setState({
                firstLastName: '',
                email: '',
                subject: '',
                message: '',
                agreement: false,
                sending: true,
                statement: 'Wysyłanie wiadomości',

                errors: {
                    firstLastName: false,
                    email: false,
                    subject: false,
                    message: false,
                    agreement: false,
                }
            })
        } else {
            this.setState({
                errors: {
                    firstLastName: !validation.firstLastName,
                    subject: !validation.subject,
                    email: !validation.email,
                    message: !validation.message,
                    agreement: !validation.agreement,
                }
            })
        }
    }

    render() {
        const { firstLastName, email, subject, message, agreement } = this.state.errors;
        const { firstLastName_incorrect, subject_incorrect, email_incorrect, message_incorrect, agreement_incorrect } = this.messages;

        return (
            <>
                {this.state.statement.length ? <Statement statement={this.state.statement} sending={this.state.sending} /> :
                    <form className="form" onSubmit={this.handleSubmit} noValidate>
                        <label className="form-item" htmlFor="firstLastName">
                            <input type="text" name="firstLastName" placeholder="Imię i nazwisko" value={this.state.firstLastName} onChange={this.handleChange} />
                            {firstLastName && <div className="form-error-msg">{firstLastName_incorrect}</div>}
                        </label>

                        <label className="form-item" htmlFor="email">
                            <input type="email" name="email" placeholder="Adres email" value={this.state.email} onChange={this.handleChange} />
                            {email && <div className="form-error-msg">{email_incorrect}</div>}
                        </label>

                        <label className="form-item" htmlFor="subject">
                            <input type="text" name="subject" placeholder="Temat wiadomości" value={this.state.subject} onChange={this.handleChange} />
                            {subject && <div className="form-error-msg">{subject_incorrect}</div>}
                        </label>

                        <label className="form-item" htmlFor="message">
                            <textarea name="message" id="text" cols="30" rows="10" value={this.state.message} onChange={this.handleChange} />
                            {message && <div className="form-error-msg">{message_incorrect}</div>}
                        </label>

                        <label className="item-agreement" htmlFor="agreement">
                            <input type="checkbox" name="agreement" checked={this.state.agreement} onChange={this.handleChange} />
                            <p>Zgodnie z <Link to="/polityka-prywatnosci" target="_blank" title="Polityka prywatności">polityką prywatności</Link>. Wyrażam zgodę na przetwarzanie moich danych osobowych</p>

                        </label>
                        {agreement && <div className="form-error-msg">{agreement_incorrect}</div>}


                        <button className="btn-form" onSubmit={this.handleSubmit}>Wyślij wiadomość</button>
                    </form>}
            </>
        );
    }
}

export default ContactForm;