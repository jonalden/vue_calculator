import axios from "axios";

const url = "api/posts";

class PostService {

    // GET posts
    static getPosts() {
        return new Promise ((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    //CREATE post
    // Edit to 3 arguments for num1, num2, operator
    // Update collecton to save that data
    //
    static insertPost(sum, operator, firstVal, secondVal) {
        return axios.post(url, {
            sum: sum,
            operator: operator,
            firstVal: firstVal,
            secondVal: secondVal
        })
    }

    //DELETE post
    static deletePost(id) {
        return axios.delete(`${url}/${id}`)
    }
}

export default PostService