const posts = [];

const generateDefaultTweet = () => {
    const tweets = [];
    const post = {
        displayName: 'display',
        username: 'MarkZ',
        verified: true,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi aliquid nulla, labore similique incidunt aliquam perspiciatis distinctio animi officiis tempore, numquam nisi quae adipisci accusamus alias tenetur, minima aspernatur?',
        image: 'some image',
        avatar: 'https://www.pngfind.com/pngs/m/14-141135_download-mark-zuckerberg-png-image-mark-zuckerberg-transparent.png',
    };
    for (let times = 0; times < 3; times++) {
        const tweet = {
            displayName: 'Mark Mark' + times,
            username: 'Markkkk' + times,
            verified: true,
            text: 'tweetMessage' + times,
            image: 'tweetImage' + times,
            avatar: '',
        };

        tweets.push(tweet);
    }
    post['t'] = tweets;
    posts.push(post);
};

export const getPosts = async () => {
    if (posts.length === 0) {
        await generateDefaultTweet();
    }
    return posts;
};

export const addTweet = tweet => {
    alert(posts);
    posts[0].push(tweet);
};

const addPost = id => {
    posts[id] = [];
};

export default addPost;
