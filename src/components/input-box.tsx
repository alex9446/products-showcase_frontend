import React from 'react';

interface propsInterface {
    onChange: Function,
    type: string,
    placeholder?: string,
    value: string
}

export default function InputBox(props: propsInterface) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        props.onChange(event.target.value);
    }

    return (
        <input
            onChange={handleChange}
            type={props.type}
            placeholder={props.placeholder || ''}
            value={props.value}
        />
    );
}
