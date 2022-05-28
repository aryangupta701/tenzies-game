import React from 'react'

const Profile = () => {
    const avatar = "https://imgs.search.brave.com/dMl2JWMh9ehYCYJURhLhjPsdMh1QA_t-5lNlnIMaTfo/rs:fit:499:498:1/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXIyLnBuZw"
    const userName = "aryangupta701"
  return (
    <div>
        <img src={avatar} className="avatar-img" />
        <h1>{userName}</h1>
    </div>
  )
}

export default Profile