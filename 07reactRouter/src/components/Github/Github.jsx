import React, { useEffect, useState } from 'react'
const Github = () => {
  const [data, setData] = useState(null) // null is better than [] for objects
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://api.github.com/users/Hiren-chauhan')
      .then((res) => res.json())
      .then((userData) => {
        setData(userData)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching GitHub data:", err)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <div className="text-center m-4 text-xl">Loading...</div>
  }
  if (!data) {
    return <div className="text-center m-4 text-xl text-red-500">Failed to load data</div>
  }
  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold">GitHub Profile</h1>
      <img 
        src={data.avatar_url} 
        alt="GitHub Avatar" 
        className="mx-auto my-4 w-32 h-32 rounded-full shadow-md"
      />
      <p className="text-xl">Name: {data.name || "No name available"}</p>
      <p className="text-xl">Followers: {data.followers}</p>
      <p className="text-xl">Following: {data.following}</p>
      <p className="text-xl">Public Repos: {data.public_repos}</p>
      <a 
        href={data.html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline text-blue-200 block mt-4"
      >
        Visit GitHub Profile
      </a>
    </div>
  )
}
export default Github
