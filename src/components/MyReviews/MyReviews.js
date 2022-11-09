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
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
};

export default MyReviews;
