import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewRow from '../ServiceDetails/ReviewSection/ReviewRow/ReviewRow';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [user?.email])

    const handleSingleDelete = (_id) => {
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = reviews.filter(revs => revs._id !== _id);
                    setReviews(remaining);
                }
            })
    };

    const handleAllDelete = () => {
        const confirmation = window.confirm('Are you sure? You want to delete all of your reviews!');
        console.log(confirmation);
        // fetch(`http://localhost:5000/reviews?email=${user?.email}`, {

        // })
    }

    if (reviews.length === 0) {
        return (
            <div className='my-96'>
                <p className='text-9xl font-bold text-green-900 '>You have not added any service review yet</p>
                <p className='text-9xl font-bold text-green-900'>Try our <span onClick={() => navigate('/services')} className='text-blue-900 cursor-pointer'>services</span></p>
            </div>
        )
    }
    else {
        return (
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <button onClick={handleAllDelete} className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Text</th>
                            <th>Rating</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleSingleDelete={handleSingleDelete}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
};

export default MyReviews;
