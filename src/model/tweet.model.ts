import { randomUUID } from "crypto";
import { User } from "./user.model";

export class Tweet {
    private tweetId: string;
    content: string;
    type: "normal" | "reply";
    readonly likes: User[] = [];
    user: User;
    readonly replies: Tweet[] = [];
    

    constructor(user: User, content: string, type: "normal" | "reply" = "normal") {
        this.tweetId = randomUUID();
        this.content = content;
        this.type = type;
        this.user = user;
    }

    getId(): string {
        return this.tweetId;
    }

    getContent(): string {
        return this.content;
      }
    
      getType(): 'normal' | 'reply' {
        return this.type;
      }

      getUser(): User {
        return this.user;
      }
    
    replyContent(user: User, content: string): void {
        if (this.type === "normal") {
            const reply = new Tweet(user, content, "reply");
            this.replies.push(reply);
            console.log('Resposta adicionada:', reply);
        } else {
            console.log('Erro: Não é possível responder a um tweet do tipo "reply".');
        }
    }

    like(user: User): void { 
        if (!this.hasUserLiked(user)) {
            this.likes.push(user);
            console.log(`${user.username} curtiu o tweet.`);
        } else {
            console.log('Você já curtiu este tweet.');
        }
    }

    hasUserLiked(user: User): boolean {
        return this.likes.includes(user);
    }

    show(): void {
        console.log(`@${this.user.username}: ${this.content}`);
        console.log(`${this.likes.length} likes * ${this.replies.length} replies`);

    }

    showReplies(): void {
        if (this.replies.length === 0) {
            console.log('Sem respostas ainda.');
        } else {
            console.log('Replies:');
            this.replies.map(reply => reply.show());
        }
    }

    getLikes(): User[] {
        return this.likes;
    }

    showLikes(): void {
        const numLikes = this.likes.length;

        if (numLikes === 0) {
            console.log('Sem curtidas ainda.');
        } else if (numLikes === 1) {
            console.log(`@${this.likes[0].username} curtiu`);
        } else {
            const otherLikes = numLikes - 1;
            console.log(`@${this.likes[0].username} e mais ${otherLikes} usuários curtiram`);
        }
    }
}

export class Reply extends Tweet {
    private replyId: string;

    constructor(user: User, content: string, originalTweet: Tweet) {
        super(user, content, 'reply');
        this.replyId = randomUUID();
    }
}
