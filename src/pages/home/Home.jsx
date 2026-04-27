import React, {useState} from 'react'
import './Home.scss'
import UploadData from '../../components/upload data pop up/UploadData'
import DeleteData from '../../components/delete data pop up/DeleteData'



function Home({goToNextPage, logo}) {
	const [clicks, setClicks] = useState(0)
	const [openUploadPopUp, setOpenUploadPopUp] = useState(false)
	const [openDeletePopUp, setOpenDeletePopUp] = useState(false)

	const secretUploadButton = () => {
		setClicks(prev => prev + 1)
		if(clicks === 1){
			setOpenUploadPopUp(true)
		}
		setTimeout(() => {
			setClicks(0)
		}, 1000)
	}

	const secretDeleteButton = () => {
		setClicks(prev => prev + 1)
		if(clicks === 1){
			setOpenDeletePopUp(true)
		}
		setTimeout(() => {
			setClicks(0)
		}, 1000)
	}

  return (
    <div className='home-page'>
		<div className='hidden-upload-button' onClick={secretUploadButton}></div>
		<div className='hidden-delete-button' onClick={secretDeleteButton}></div>
		{openUploadPopUp && <UploadData closePopUp={() => {setOpenUploadPopUp(false)}}/>}
		{openDeletePopUp && <DeleteData closePopUp={() => {setOpenDeletePopUp(false)}}/>}
        <div className="center">
			<h1>¡Te damos la <br/>bienvenida!</h1>
			<p>Demostrá cuánto conocés <br/>de educación financiera</p>
			<button className="play-button" onClick={goToNextPage} aria-label="Vamos a jugar" />
        </div>
        <div className="footer">
        	<img src={logo} alt="Banco Nación" />
        </div>
    </div>
  )
}

export default Home
