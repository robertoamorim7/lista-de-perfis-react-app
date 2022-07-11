import React, { useState, useEffect } from 'react'
import './styles.css'
import { Card } from '../../components/Card'

export function Home() {
  const [user, setUser] = useState({name: '', avatar: ''})
  const [gitUsername, setGitUsername] = useState('')
  const [gitProps, setGitProps] = useState([])
  const urlAPI = 'https://api.github.com/users/robertoamorim7'
  
  function handleGitProps() {
    const gitUrl = `https://api.github.com/users/${gitUsername}`

    //fetching url api github
    fetch(gitUrl)
    .then(res => res.json())
    .then(data => {
      const newGitProps = {
        name: data.name,
        location: data.location,
        avatar: data.avatar_url,
        verification: data.message
      }
      
      if (newGitProps.verification === "Not Found") {
        alert("Perfil github inválido")
        setGitUsername('')
        return
      } else {
        setGitProps(prevState => [...prevState, newGitProps])
        setGitUsername('')
      }
      
    })
    
  }

  useEffect(() => {
    fetch(urlAPI)
    .then(res => res.json())
    .then(data => {
      setUser({
        name: data.name, 
        avatar: data.avatar_url})
    })
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de perfis</h1>

        <div>
          <span>by&nbsp;</span> <strong>{user.name}</strong>
          <img src={user.avatar} alt="profile picture" />
        </div>
      </header>
    
      <input value={gitUsername} onChange={e=>setGitUsername(e.target.value)} type="text" placeholder='Insira o link do perfil do github desejado'/>

      <button type='button' onClick={gitUsername === '' ? {} : handleGitProps}>Enviar</button>

      {
        gitProps.map(props =>
          <Card
            key={Math.random()}
            name={props.name}
            location={props.location} 
            avatar={props.avatar}
          />
        )
      }
    </div>
  )
}