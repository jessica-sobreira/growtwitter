import { randomUUID } from "crypto";


export class Like {
    likeId: string;
    likes: number = 1;


    constructor(likeId: string) {
        this.likeId = randomUUID();
    }

    getLikeId(): string {
        return this.likeId;
    }
      
}



