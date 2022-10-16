import axios from 'axios'
const url = '/api/posts/';

class PostServices {
    // GET posts
    static getPosts() {
        return new Promise( async (resolve, reject) => {
            try {
                const res = await axios.get(url)
                const data = res.data
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch(err) {
                reject(err);
            }
        })
    }
    // POST post
    static postPost(title, text) {
        return axios.post(url, {
            title,
            text
        })
    }
    // DELETE post
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostServices;