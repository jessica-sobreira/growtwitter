import { user1, user2, user3} from "./database/user";
import { tweet1, tweet2, tweet3 } from "./database/tweet";


//Mostrar usuários
console.log(user1);
console.log(user2);
console.log(user3);

// Exibição dos tweets
console.log('-----------------------');
tweet1.show();
console.log('-----------------------');
tweet2.show();
console.log('-----------------------');
tweet3.show();

// Exibição de respostas
console.log('-----------------------');
tweet1.showReplies();
console.log('-----------------------');
tweet2.showReplies();
console.log('-----------------------');
tweet3.showReplies();

// Exibição de curtidas
console.log('-----------------------');
tweet1.showLikes();
console.log('-----------------------');
tweet2.showLikes();
console.log('-----------------------');
tweet3.showLikes();

// Seguir um usuário
console.log('-----------------------');
user1.follow(user2);
user1.follow(user3);
console.log('-----------------------');
user2.follow(user1);
user2.follow(user3);
console.log('-----------------------');
user3.follow(user1);
user3.follow(user2);

// Exibir feed de um usuário
console.log('-----------------------');
user1.showFeed();
console.log('-----------------------');
user2.showFeed();
console.log('-----------------------');
user3.showFeed();

// Curtir um tweet
console.log('-----------------------');
tweet1.like(user2);
tweet1.like(user3);
console.log('-----------------------');
tweet2.like(user1);
tweet2.like(user3);
console.log('-----------------------');
tweet3.like(user1);
tweet3.like(user2);

// Exibir curtidas
console.log('-----------------------');
tweet1.showLikes();
console.log('-----------------------');
tweet2.showLikes();
console.log('-----------------------');
tweet3.showLikes();

// Repostar um tweet
console.log('-----------------------');
tweet1.replyContent(user3, 'Eu também!');
console.log('-----------------------');
tweet2.replyContent(user1, 'Sim!');
console.log('-----------------------');
tweet3.replyContent(user2, 'Parabéns!');

// Exibir respostas
console.log('-----------------------');
tweet1.showReplies();
console.log('-----------------------');
tweet2.showReplies();
console.log('-----------------------');
tweet3.showReplies();

//mostrar tweets
console.log('-----------------------');
tweet1.show();
console.log('-----------------------');
tweet2.show();
console.log('-----------------------');
tweet3.show();











