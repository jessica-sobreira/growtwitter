import { randomUUID } from "crypto";
import { Tweet } from "./tweet.model";


export class User {
    private id: string;
    private password: string;
    email: string;
    name: string;
    username: string;
    readonly tweets: Tweet[] = [];
    readonly followers: User[] = []; 
    readonly following: User[] = [];

    constructor(name: string, username: string, email: string, password: string) {
        this.id = randomUUID();
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password; 
    }

    getId(): string {
        return this.id;
    }

    sendTweet(content: string): void {
        const newTweet = new Tweet(this, content);
        this.tweets.push(newTweet);
    }

    follow(user: User): void {
        if (user !== this) {
            if (!this.following.includes(user)) {
                this.following.push(user);
                console.log(`Você começou a seguir ${user.username}.`);
            } else {
                console.log('Você já está seguindo este usuário.');
            }
        } else {
            console.log('Você não pode se seguir.');
        }
    }

    getFollowingList(): User[] {
        return this.following;
    }

    showFeed(): void {
        console.log(`Feed do usuário ${this.username}:`);

        this.following.forEach(followingUser => {
            console.log(`Tweets de ${followingUser.username}:`);
    
            followingUser.tweets.map(tweet => {
                console.log(`@${tweet.getUser().username}: ${tweet.getContent()}`);
            });
        });
    }
    

    showTweets(): void {
        console.log(`Tweets de ${this.username}:`);
    
        this.tweets.forEach(tweet => {
            console.log(`@${tweet.getUser().username}: ${tweet.getContent()}`);
        });
    }
}
