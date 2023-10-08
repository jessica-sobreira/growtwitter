import { Like } from "../model/like.models";
import { Tweet } from "../model/tweet.model";
import { User } from "../model/user.model";
import { user1, user2, user3 } from "./user";
import { tweet1, tweet2, tweet3 } from "./tweet";

tweet1.like(user2);
tweet1.like(user2);
tweet1.like(user3);

const likeList = tweet1.showLikes();

console.log(likeList);
