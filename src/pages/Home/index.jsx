import React, { useState, useEffect } from 'react'
import './styles.css'
import { Card } from '../../components/Card'

export function Home() {
  const [cornoName, setCornoName] = useState('')
  const [cornos, setCornos] = useState([])
  const [age, setAge] = useState('')
  const [user, setUser] = useState({name: '', avatar: ''})
  const urlAPI = 'https://api.github.com/users/mad1scool'
  
  function handleAddCorno () {
    const newCorno = {
      name: cornoName,
      age: age,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit'
      })
    }

    setCornos(prevState => [...prevState, newCorno])

    setCornoName('')
    setAge('')
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
        <h1>Lista de cornos</h1>

        <div>
          <span>by&nbsp;</span> <strong>{user.name}</strong>
          <img src={user.avatar} alt="profile picture" />
        </div>
      </header>
      

      <input value={cornoName} onChange={e=>setCornoName(e.target.value)} type="text" placeholder='Insira o nome dos cornos'/>

      <input type="number" value={age} placeholder='Insira idade do corno' onChange={e=>setAge(e.target.value)} />

      <button type='button' onClick={cornoName === '' || age === '' ? {} : handleAddCorno}>Enviar</button>

      {
        cornos.map(corno => 
          <Card
            key={corno.time}
            name={corno.name} 
            time={corno.time}
            age={corno.age} 
          />
        )
        
      }
      

    </div>
      
    
  )
}