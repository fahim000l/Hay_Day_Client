import React from 'react';

const AddService = () => {
    return (
        <section className="p-6 text-green-900 font-bold lg:py-20 py-40">
            <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-white ng-untouched ng-pristine ng-valid border-solid border-5 border-green-900">
                <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1 text-start">Service Name</label>
                    <input id="name" type="text" placeholder="Service name" required="" name='name' className="block w-full p-2 border-solid border-5 border-green-900 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 " />
                </div>
                <div>
                    <label htmlFor="thumbnai" className="block mb-1 ml-1 text-start">Thumbnai Url</label>
                    <input id="thumbnail" name='thumbnail' type="text" placeholder="Thumbnai Url" required="" className="block w-full p-2 border-solid border-5 border-green-900 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400" />
                </div>
                <div>
                    <label htmlFor="rating" className="block mb-1 ml-1 text-start">Rating</label>
                    <input id="rating" name='rating' type="number" placeholder="Rating" required="" className="block w-full p-2 border-solid border-5 border-green-900 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 " />
                </div>
                <div>
                    <label htmlFor="price" className="block mb-1 ml-1 text-start">Price</label>
                    <input id="price" name='price' type="number" placeholder="Price" required="" className="block w-full p-2 border-solid border-5 border-green-900 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 " />
                </div>
                <div>
                    <label htmlFor="details" className="block mb-1 ml-1 text-start">Details</label>
                    <textarea id="details" name='details' type="text" placeholder="Details..." className="block w-full p-2 border-solid border-5 border-green-900 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 "></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900">Send</button>
                </div>
            </form>
        </section>
    );
};

export default AddService;