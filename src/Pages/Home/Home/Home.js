import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddDoctor = data => {


        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {

                    const doctor = {
                        description: data.textWrite,

                        image: imgData.data.url
                    }


                    fetch('http://localhost:5000/medialPosts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)

                        })
                }


            })






    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl">Add Post</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <textarea {...register("textWrite", {
                        required: "Name is Required"
                    })} className="textarea textarea-bordered" placeholder="Write Your Post"></textarea>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Post" type="submit" />
            </form>
        </div>
    );
};

export default Home;