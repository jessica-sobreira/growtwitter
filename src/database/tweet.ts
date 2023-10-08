import { Tweet } from "../model/tweet.model";
import { user1, user2, user3 } from "./user";

export const tweet1 = new Tweet(user1, 'Adoro a Growdev', 'normal');
export const tweet2 = new Tweet(user2, 'Como é interessante o TypeScript!', 'normal');
export const tweet3 = new Tweet(user3, 'Conclui a avaliação final do módulo!', 'normal');