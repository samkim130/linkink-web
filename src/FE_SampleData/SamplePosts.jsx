
import image1 from "../images/Group 2@3x.png";
import image2 from "../images/Group 14@3x.png";
import image3 from "../images/Group 17@3x.png";
import image4 from "../images/Rectangle 10@3x.png";
import image5 from "../images/Rectangle 11@3x.png";
import image6 from "../images/Rectangle 353@3x.png";

/**
 * searching for postID in the post table would result in a sample row of this
 * a get request to backend with search postID of 233532
 */
const postExample1={
    postID: 233532,
    profileID: 433244,
    date: new Date(2020, 1, 30, 23, 22, 31, 23),
    imageLink:[image1],
    likes:23,
    comments: 2,
    editHistory:[],
};
const postExample2={
    postID: 532323,
    profileID:864323,
    date: new Date(2020, 4, 3, 15, 12, 5, 2),
    imageLink: [image2, image1, image5],
    likes:6,
    comments: 0,
    editHistory:[],
};
const postExample3={
    postID: 878346,
    profileID:134554,
    date: new Date(2020, 4, 3, 15, 12, 5, 2),
    imageLink: [image6, image3],
    likes:32,
    comments: 0,
    editHistory:[],
};
const postExample4={
    postID: 434092,
    profileID:342532,
    date: new Date(2020, 4, 3, 15, 12, 5, 2),
    imageLink: [image4, image2, image1],
    likes:16,
    comments: 0,
    editHistory:[],
};
const postExample5={
    postID: 130373,
    profileID:433244,
    date: new Date(2020, 4, 3, 15, 12, 5, 2),
    imageLink: [image5, image2, image3],
    likes:53,
    comments: 0,
    editHistory:[],
};
const postExample6={
    postID: 444533,
    profileID:342532,
    date: new Date(2020, 4, 3, 15, 12, 5, 2),
    imageLink: [image3, image2, image4],
    likes:22,
    comments: 0,
    editHistory:[],
};
const postExample7={
    postID: 444533,
    profileID:864323,
    date: new Date(2020, 4, 3, 15, 12, 5, 2),
    imageLink: [image6],
    likes:22,
    comments: 0,
    editHistory:[],
};

const SamplePosts = [postExample1,postExample2,postExample3,postExample4,postExample5,postExample6,postExample7];
export const sampleProfilePosts=[image1,image4,image5,image3, image2, image4,image6, image2];
export default SamplePosts;

/**
 * searching for postID in the post table would result in a sample row of this
 * a get request to backend with search postID of 233532
 */