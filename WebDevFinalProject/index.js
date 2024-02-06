let tweetTextarea = document.querySelector(".tweet-text");
let postButton = document.getElementById("post");
let feed = document.querySelector(".feed");

postButton.addEventListener('click', function(){
    generateTweet(tweetTextarea.value);
    tweetTextarea.value = "";
})

function generateTweet(text){
    let tweetCont = document.createElement('div');
    tweetCont.classList.add("tweet");
    tweetCont.innerHTML = 
    `<div class="tweet-top">
        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="Profile-Image">
        <h3> Joanne Graham </h3>
        <h4>@JoanneGraham123</h4>
        <button class="edit"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit-btn"></button>
        <button class="delete"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/030/original/delete-color-filled.png?1706888714" alt="delete"></button>
    </div>
    <div><p>${text}</p></div>
    <div class="tweet-bottom">
        <button class="like"><i class="fa-regular fa-heart" style="font-size: 2vw;"></i></button>
        <button class="comment"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="Comment"></button>
    </div>`;
    feed.appendChild(tweetCont);
    let like = tweetCont.querySelector(".tweet-bottom .like");
    // let delete = tweetCont.querySelector('.tweep-top .delete');
    like.addEventListener('click',function(){
        let likeIcon = like.querySelector('i.fa-heart');
        if (likeIcon.classList.contains('fa-regular')) {
            likeIcon.classList.remove('fa-regular');
            likeIcon.classList.add('fa-solid');
            // taskArea.setAttribute('contenteditable', 'false');
        }
        else {
            likeIcon.classList.remove('fa-solid');
            likeIcon.classList.add('fa-regular');
            // taskArea.setAttribute('contenteditable', 'true');
        }
    });
    // delete
}