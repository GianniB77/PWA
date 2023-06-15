import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { IPost } from '../interfaces/IPost';
import CardComponent from '../components/CardComponent';

function Post() {

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
      getPost();
    }, [])
    

    const [Post, setPost] = useState<IPost>({
        id: parseInt(id as string),
        body: "null",
        title: "0"
    });

    async function getPost(): Promise<void> {
        try {
            const cacheName = 'my-api-cache';
            const cache = await caches.open(cacheName);
            const cacheResponse = await cache.match(`https://jsonplaceholder.typicode.com/posts/${id}`); 
        
            if (cacheResponse) {
              const cachedData = await cacheResponse.json() as IPost;
              setPost(cachedData)
            } else {
              const networkResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
              const data = networkResponse.data as IPost;        
              cache.put(`https://jsonplaceholder.typicode.com/posts/${id}`, new Response(JSON.stringify(data)));
              getPost()
            }
          } catch (error) {
            alert("l'article n'est pas en cache");
            navigate(-1);
          }
    }

    return (
        <div className='container place-content-center mx-auto flex flex-wrap p-10'>
            <CardComponent id={Post.id} title={Post.title} body={Post.body} />
        </div>
    )
}

export default Post