import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryInfo } from '../../models/ICategory'
import { IUser, UserInfo } from '../../models/IUser'
import { userRegister } from '../../services/RegisterService'

import NavBar from '../baseComponents/NavBar'

function Register() {
  
  const navigate = useNavigate()
  const [register, setRegister] = useState<UserInfo>()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')



  const fncRegister = (evt: React.FormEvent) => {
    evt.preventDefault();
    userRegister(firstName, lastName, email, password, phone).then(res => { 
        const result = res.data.result  
        setRegister(result)    
    })
    
  }
  return(
    <>
      <NavBar />
      <section>   
          <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className='col-12 col-md-9 col-lg-7 col-xl-6'></div>
            </div>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-center mb-5">Kullanıcı Oluştur</h2>
                     
                    <form onSubmit={fncRegister}>
                      <div className="form-outline mb-2">
                        <input onChange={(evt) => setFirstName(evt.target.value)} required type='text' placeholder='İsim' className='form-control' />
                        <label className="form-label" htmlFor="form3Example1cg"></label>
                      </div>
                      <div className="form-outline mb-2">
                        <input  onChange={(evt) => setLastName(evt.target.value)} required type='text' placeholder='Soyisim' className='form-control' />
                        <label className="form-label" htmlFor="form3Example1cg"></label>
                      </div>
                      <div className="form-outline mb-2">
                        <input  onChange={(evt) => setEmail(evt.target.value)} required type='text' placeholder='Email' className='form-control' />
                        <label className="form-label" htmlFor="form3Example1cg"></label>
                      </div>
                      <div className="form-outline mb-2">
                        <input  onChange={(evt) => setPhone(evt.target.value)} type="text" id="text" className="form-control " placeholder='Telefon' />
                        <label className="form-label" htmlFor="form3Example1cg"></label>
                      </div>
                      <div className="form-outline mb-2">
                        <input  onChange={(evt) => setPassword(evt.target.value)} type="text" id="text" className="form-control " placeholder='Şifre' />
                        <label className="form-label" htmlFor="form3Example1cg"></label>
                      </div>
                      
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-warning">Kayıt Oluştur</button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">Kullanıcı hesabınız varmı?  
                      <a onClick={(evt) => navigate("/")} className="fw-bold text-body"><u> Giriş yap</u></a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Register