import React, { useEffect } from 'react'
import './FirebaseTest.css'
import {useState} from 'react'
import { app, database } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {collection,addDoc,getDocs,doc,updateDoc,deleteDoc} from 'firebase/firestore';

export const FirebaseTest = () => {
    const auth=getAuth();
    const dbInstance = collection(database,"users");
    const [array,setArray] = useState([]);
    const [data,setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleInputs = (event) => {
        let inputs = {[event.target.name]: event.target.value }

        setData({...data,...inputs})
    }
    const getData = async () => {
        const data = await getDocs(dbInstance);
        setArray(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }))
    }
    const addData = () => {
        addDoc(dbInstance,data)
        .then(() => {
            alert('Data sent')
            getData();
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const updateData = (id) => {
        let dataToUpdate = doc(database,'users',id)
        updateDoc(dataToUpdate,{
            name: 'IndruS',
            email: 'indrumundackal@gmail.com'
        })
        .then(() => {
            alert('Data Updated')
            getData();            
        })
        .catch((err) => {
            alert(err.message)
        })
    }
    const deleteData = (id) => {
        let datatoDelete = doc(database,'users',id)
        deleteDoc(datatoDelete)
        .then(() => {
            alert('Data deleted')
            getData();
        })
        .catch((err) => {
            alert(err.message)
        })
    }
    useEffect(() => {
        getData();
    },[]);
  return (
    <div className='FirebaseTest'>
        <div className='input'>
            <input placeholder='Name' name='name' type='text' className='input-fields' onChange={event => handleInputs(event)}/>
            <input placeholder='Email' name='email' type='email' className='input-fields' onChange={event => handleInputs(event)}/>
            <input placeholder='Password' name='password' type='password' className='input-fields' onChange={event => handleInputs(event)}/>
            <button onClick={addData}>Add data</button>
            
            {array.map((item) => {
                return(
                    <><div>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.password}</p>
                        <button onClick={() => updateData(item.id)}>Update</button>
                        <button onClick={() => deleteData(item.id)}>Delete</button>
                    </div><hr /></>
                )
            })}
            
        </div>
    </div>
  )
}
