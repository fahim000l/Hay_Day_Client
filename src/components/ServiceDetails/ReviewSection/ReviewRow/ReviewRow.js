import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ReviewRow = ({ review }) => {

    const location = useLocation();

    const { email, image, name, rating, serviceId, text, _id } = review;

    const handleSingleDelete = () => {
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <tr>
            <th className={`${location.pathname === '/myreviews' ? 'block' : 'hidden'}`}>
                <label>
                    <button onClick={handleSingleDelete} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                image ?
                                    <img src={image} alt="Avatar Tailwind CSS Component" />
                                    :
                                    <FaUserAlt></FaUserAlt>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {text}
            </td>
            <td>{rating}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ReviewRow;