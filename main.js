// 1. add button event handler
document.getElementById('submit-comment').addEventListener('click', function (e) {
    e.preventDefault();

    // 2.get user comment
    const commentBox = document.getElementById('comment-box');

    // 3. create comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;

    // 4. append the comment
    const commentsList = document.getElementById('comments-list');
    commentsList.appendChild(newComment);

    // clear old comment text
    commentBox.value = '';

});