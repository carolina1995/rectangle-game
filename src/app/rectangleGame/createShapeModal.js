
"use client"; // This is a client component 👈🏽
import React from 'react'
import { useWindowSize } from './hooks/windowResizeHook';

const Modal = ({ setShapes, setOpenModal }) => {
    const [form, setForm] = React.useState({ Xvalue: 0, Yvalue: 0, width: 0, height: 0 });
    const { width, height } = useWindowSize();
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleShapeAddition = (e) => {
        e.preventDefault();
        setShapes((shapes) => [...shapes, form]);
        setOpenModal(false);
    };

    return (
        <div className="modal-container">
            <div className="modal">
                <div>
                    <div onClick={() => setOpenModal(false)} className='modal-close'> </div>
                    <h1 className='modal-title divider'> Create Shape</h1>
                </div>
                <form onSubmit={handleShapeAddition}>
                    <div className='modal-item'>
                        <label>Name of Shape</label>
                        <input required name="name" onChange={handleInputChange} placeholder="Enter Shape Name" />
                    </div>
                    <div className='modal-item-container'>
                        <div className='modal-item'>
                            <label>Height</label>
                            <input required min="1" max={height} type="number" name="height" onChange={handleInputChange} placeholder="Enter Height" />
                        </div>
                        <div className='modal-item'>
                            <label>Width</label>

                            <input required min="1" max={width} type="number" name="width" onChange={handleInputChange} placeholder="Enter Width" />
                        </div>
                    </div>
                    <div className='modal-item-container'>
                        <div className='modal-item'>
                            <label>X position</label>
                            <input required min="0" max={width - form.width} type="number" name="Xvalue" onChange={handleInputChange} placeholder="Enter X value" />
                        </div>
                        <div className='modal-item'>
                            <label>Y position</label>
                            <input required min="0" max={height - form.height} type="number" name="Yvalue" onChange={handleInputChange} placeholder="Enter Y value" />
                        </div>
                    </div>
                    <button type="submit">Add Shape</button>
                </form>
            </div>
        </div>
    )
}

export default Modal