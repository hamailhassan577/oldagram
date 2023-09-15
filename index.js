const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Elements Fetched from HTML

const nameEl = document.querySelector(".author")
const avatarEl = document.querySelector(".author-avatar-icon")
const locationEl = document.querySelector(".location")
const postEl = document.querySelector(".post-img")
const commentEl = document.querySelector(".comment")
const likesEl = document.querySelector(".likes")
const heartEl = document.querySelector(".heart-icon")




function render() {



    for( let i = 0; i < posts.length; i++) {

    nameEl.textContent = posts[i].name
    locationEl.textContent = posts[i].location
    avatarEl.src = posts[i].avatar
    postEl.src = posts[i].post
    commentEl.innerHTML = `${posts[i].username} <span> ${posts[i].comment} </span>`
    likesEl.innerHTML = `${posts[i].likes} likes`

    }


}

render()



