const obj = {
  upvotes: 13,
  downvotes: 0,
};

let getVoteCount = function (obj) {
  let voteCount = obj.upvotes - obj.downvotes;
  return voteCount;
};
console.log(getVoteCount(obj));

// 2.///let getVoteCount = function (...obj) {
//   let voteCount = obj.upvotes - obj.downvotes;
//   return voteCount;
// };

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));
