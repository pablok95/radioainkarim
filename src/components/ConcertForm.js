import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Statement from './Statement';


class ConcertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            odKogo: '',
            dlaKogo: '',
            email: '',
            zyczenia: '',
            agreement: false,
            sending: false,
            statement: '',

            errors: {
                odKogo: false,
                dlaKogo: false,
                email: false,
                zyczenia: false,
                agreement: false,
            }
        }
    }

    messages = {
        odKogo_incorrect: 'Podaj minimum 3 znaki, bez cyfr',
        dlaKogo_incorrect: 'Podaj minimum 3 znaki, bez cyfr',
        email_incorrect: 'Podaj prawidłowy adres email',
        zyczenia_incorrect: 'Podaj mininum 10 znaków',
        agreement_incorrect: 'Zaakceptuj politykę prywatności, jeśli zgadzasz się na wysłanie tej wiadomości.',
    }

    patterns = {
        email: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
        text: '[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+',
        textarea: '.+',
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;

        if (type === 'email' || type === 'text' || type === 'textarea') {
            this.setState({
                [name]: value,
            })
        } else if (type === 'checkbox') {
            this.setState(prevState => ({
                [name]: !prevState.agreement,
            }))
        }
    }

    formValidation = () => {
        let odKogo = false, dlaKogo = false, email = false, zyczenia = false, agreement = this.state.agreement;
        let correct = false;

        const odKogoReg = new RegExp(this.patterns.text, "gi");
        const dlaKogoReg = new RegExp(this.patterns.text, "gi");
        const zyczeniaReg = new RegExp(this.patterns.textarea, "gi");
        const emailReg = new RegExp(this.patterns.email, "gi");

        if (this.state.odKogo.length > 2 && odKogoReg.test(this.state.odKogo))
            odKogo = true;

        if (this.state.dlaKogo.length > 2 && dlaKogoReg.test(this.state.dlaKogo))
            dlaKogo = true;

        if (this.state.email.length > 0 && emailReg.test(this.state.email))
            email = true;

        if (this.state.zyczenia.length >= 10 && zyczeniaReg.test(this.state.zyczenia))
            zyczenia = true;

        if (odKogo && dlaKogo && email && zyczenia && agreement)
            correct = true;

        return ({
            correct,
            odKogo,
            dlaKogo,
            email,
            zyczenia,
            agreement
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { odKogo, dlaKogo, email, zyczenia, agreement } = this.state;

        const validation = this.formValidation();

        if (validation.correct) {
            const url = "https://dev.radioainkarim.pl/api/concert/send.php";

            const data = {
                "odKogo": odKogo,
                "dlaKogo": dlaKogo,
                "email": email,
                "zyczenia": zyczenia,
                "agreement": Number(agreement)
            };

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(response => {
                    console.log(response)
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
                odKogo: '',
                dlaKogo: '',
                email: '',
                zyczenia: '',
                agreement: false,
                sending: true,
                statement: 'Wysyłanie życzeń',

                errors: {
                    odKogo: false,
                    dlaKogo: false,
                    email: false,
                    zyczenia: false,
                    agreement: false,
                }
            });
        } else {
            this.setState({
                errors: {
                    odKogo: !validation.odKogo,
                    dlaKogo: !validation.dlaKogo,
                    email: !validation.email,
                    zyczenia: !validation.zyczenia,
                    agreement: !validation.agreement,
                }
            })
        }
    }


    render() {
        const { odKogo, dlaKogo, zyczenia, email, agreement } = this.state.errors;
        const { odKogo_incorrect, dlaKogo_incorrect, zyczenia_incorrect, email_incorrect, agreement_incorrect } = this.messages;

        return (
            <>
                {this.state.statement.length ? <Statement statement={this.state.statement} sending={this.state.sending} /> :
                    <form className="form" onSubmit={this.handleSubmit} noValidate>
                        <label className="form-item" htmlFor="odKogo">
                            <input name="odKogo" type="text" placeholder="Od kogo" value={this.state.odKogo} onChange={this.handleChange} />
                            {odKogo && <div className="form-error-msg">{odKogo_incorrect}</div>}
                        </label>

                        <label className="form-item" htmlFor="dlaKogo">
                            <input name="dlaKogo" type="text" placeholder="Dla kogo" value={this.state.dlaKogo} onChange={this.handleChange} />
                            {dlaKogo && <div className="form-error-msg">{dlaKogo_incorrect}</div>}
                        </label>

                        <label className="form-item" htmlFor="email">
                            <input name="email" type="email" placeholder="Adres e-mail" value={this.state.email} onChange={this.handleChange} />
                            {email && <div className="form-error-msg">{email_incorrect}</div>}
                        </label>


                        <label className="form-item" htmlFor="zyczenia">
                            <textarea name="zyczenia" id="zyczenia" cols="30" rows="10" placeholder="Treść życzeń" value={this.state.zyczenia} onChange={this.handleChange} />
                            {zyczenia && <div className="form-error-msg">{zyczenia_incorrect}</div>}
                        </label>

                        <label className="item-agreement" htmlFor="agreement">
                            <input type="checkbox" id="agreement" name="agreement" checked={this.state.agreement} onChange={this.handleChange} />
                            <p>Zgodnie z <Link to="/polityka-prywatnosci" target="_blank" title="Polityka prywatności">polityką prywatności</Link>. Wyrażam zgodę na przetwarzanie moich danych osobowych</p>

                        </label>
                        {agreement && <div className="form-error-msg">{agreement_incorrect}</div>}

                        <button className="btn-form">Wyślij życzenia</button>
                    </form>}
            </>
        );
    }
}

export default ConcertForm;