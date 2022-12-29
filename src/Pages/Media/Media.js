import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shares/Loading/Loading';
const Media = () => {

    const { data: mediaPosts, isLoading } = useQuery({
        queryKey: ['medialPosts'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/medialPosts', {
                    headers: {
                        authorization: `bearer medialPosts`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center'>
            <div className='grid gap-6 grid-cols-1'>
                {
                    mediaPosts.map(posts =>

                        <div className="card w-96 bg-base-100 shadow-xl">

                            <figure><img className="rounded-box h-[300px] w-[300px]" src={posts?.image} alt="Shoes" /></figure>
                            <div className="card-body">

                                <p>{posts.description}</p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">Like</div>
                                    <div className="badge badge-outline">Commant</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Media;