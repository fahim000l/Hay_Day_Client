import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const ReviewRow = ({ review }) => {


    const { email, image, name, rating, serviceId, text, _id } = review

    return (
        <tr>
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