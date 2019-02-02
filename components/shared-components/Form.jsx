import React, { Component } from 'react';

export default class extends Component {
    render() {
        const { children, text, width = "auto", smWidth = "auto" } = this.props
        return (
            <div className={`w-${width} sm:w-${smWidth} mb-6`}>
                <div className="font-cu-body font-medium">{text}</div>
                {children}
            </div>
        );
    }
}

export const Selector = ({ choices = [] }) => {
    const options = choices.map((choice, index) => {
        return (
            <option required key={index} value={choice}>{choice}</option>
        )
    })
    return (
        <React.Fragment>
            <select required className="bg-cb-grey-light rounded-lg mt-2 p-2 w-full h-8" selected="หญิง" style={{ padding: "0px" }}>
                <option value=""></option>
                {options}
            </select>
        </React.Fragment>
    );
}

export const Input = ({ type, notRequired, value, name, onChange, error }) => {

    return notRequired ?
        (
            <React.Fragment>
                <input value={value} name={name} onChange={onChange} className="bg-cb-grey-light rounded-lg mt-2 p-2 w-full h-8" type={type} />
                <span className="font-cu-body font-medium">{error}</span>
            </React.Fragment>

        ) :
        (
            <React.Fragment>
                <input value={value}  name={name} onChange={onChange} className="bg-cb-grey-light rounded-lg mt-2 p-2 w-full h-8" type={type} required />
                <span className="font-cu-body font-medium text-cb-red">{error}</span>
            </React.Fragment >
        )
}

export class FormGroup extends Component {
    render() {
        const titleClassName = "text-center w-full md:w-64 border-cb-grey-border md:border-r font-cu-heading text-2xl";
        const borderOnSmall = "border-cb-grey-border w-full border md:hidden my-2";
        const inputContainer = "w-full flex flex-col items-center md:items-start";
        const maxWidth = { maxWidth: "26.5rem" };
        const { children, text } = this.props
        return (
            <div className="flex flex-col md:flex-row">
                <div className={titleClassName}>{text}</div>
                <hr className={borderOnSmall} />
                <div className={inputContainer}>
                    <div className="w-full flex flex-row justify-between flex-wrap sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}