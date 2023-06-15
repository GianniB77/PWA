import React, { useEffect, useState } from 'react'
import { IPost } from '../interfaces/IPost';
import axios from 'axios';
import CardComponent from '../components/CardComponent';
import { Link } from 'react-router-dom';

function Home() {
    const [Posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts();
    }, [])


    async function getPosts(): Promise<void> {
        try {
            const cacheName = 'my-api-cache';
            const cache = await caches.open(cacheName);
            const cacheResponse = await cache.match('https://jsonplaceholder.typicode.com/posts'); 
        
            if (cacheResponse) {
              const cachedData = await cacheResponse.json() as IPost[];
              setPosts(cachedData)
            } else {
              const networkResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
              const data = networkResponse.data as IPost[];        
              cache.put('https://jsonplaceholder.typicode.com/posts', new Response(JSON.stringify(data)));
              getPosts()
            }
          } catch (error) {
            alert(error)
          }
    }

    return (
        <div className='container place-content-center mx-auto flex flex-wrap p-10'>
            {Posts.map(p => (
                <Link to={`/article/${p.id}`}>
                    <CardComponent id={p.id} title={p.title} body={''} />
                </Link>
            ))}
        </div>
    )
}

export default Home