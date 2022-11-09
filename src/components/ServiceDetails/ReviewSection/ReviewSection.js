import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow/ReviewRow';

const ReviewSection = ({ service }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/servicereviews/${service._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service._id]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
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
            <form onSubmit={handleSubmit}>
                <div className='flex items-center justify-between mt-5'>
                    <img className='w-[60px] h-[60px] rounded-full' src={service.thumbnail} alt="" />
                    <div className="form-control w-[80%]">
                        <label className="label">
                            <span className="label-text font-bold">Md Fahim Faisal</span>
                        </label>
                        <input name='text' type="text" placeholder="Type here" className="input input-bordered border-green-900 shadow-green-900 shadow-lg" />
                        <label className="label">
                            <span className="label-text-alt font-bold">mdfahimfaisal000@gmail.com</span>
                        </label>
                    </div>
                    <button className='btn btn-primary bg-green-500' type="submit">Add Review</button>
                </div>
                <div className='flex items-center justify-center mb-10'>
                    <p className='text-green-900 text-3xl font-bold'>Rate this service : </p>
                    <div className="rating mx-5">
                        <input type="radio" name="rating-2" className={`mask mask-star-2 bg-orange-400`} />
                        <input type="radio" name="rating-2" className={`mask mask-star-2 bg-orange-400`} />
                        <input type="radio" name="rating-2" className={`mask mask-star-2 bg-orange-400`} />
                        <input type="radio" name="rating-2" className={`mask mask-star-2 bg-orange-400`} />
                        <input type="radio" name="rating-2" className={`mask mask-star-2 bg-orange-400`} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReviewSection;