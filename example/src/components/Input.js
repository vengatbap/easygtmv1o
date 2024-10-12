import {TextInput } from "flowbite-react";

const Input = ({ disabled = false, className, ...props }) => (
    <TextInput
        disabled={disabled}
        className={`${className} rounded-none shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
