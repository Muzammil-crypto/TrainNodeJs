const posts = [
    {
        id:1, title: 'Post One',
    },
    {
        id:1, title: 'Post Two',
    },
    {
        id:1, title: 'Post three',

    }
];

export const getPostsLength = ()=> posts.length;
// export const getPosts =()=> posts;
const getPosts =()=> posts;

// export {getPosts};
export default getPosts;