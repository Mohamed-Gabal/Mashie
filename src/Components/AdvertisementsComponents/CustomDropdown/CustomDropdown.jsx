import React from 'react';
import "./CustomDropdown.css";

export default function CustomDropdown({ isOpen, setIsOpen, data, formik, name }) {
    const { setFieldValue } = formik;

    const handleSelect = (option) => {
        setFieldValue(name, option);
        setIsOpen(false);
    }
    
    return (
        <div className="dropdown">
            {/* option */}
            {isOpen && (
                <ul className="dropdown_menu" style={{height: isOpen ? "200px": "0px"}}>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className="dropdown_item"
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};