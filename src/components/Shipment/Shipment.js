import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumber = event => {
        setPhone(event.target.value);
    }
    const shipping = { name, address, phone };

    const handleAddToShipping = event => {
        event.preventDefault();
        console.log(shipping);

    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleAddToShipping}>
                    <div className="input-group">
                        <label htmlFor="Name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="Name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user.email} type="email" readOnly name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneNumber} type="number" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add To Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;