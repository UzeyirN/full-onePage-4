import React from 'react'
import './RegisterSec.css'


const RegisterSec = () => {
    return (
        <>
            <div className='resgister-sec__wrapper'>
                <div className="row">
                    <div className="col-6 register-left">
                        <div className='register-left__content'>
                            <h1 className='mb-5' style={{ fontSize: "36px", color: "white" }}>Register now and get a discount <span style={{ color: "black" }}>50%</span> discount until 1 January</h1>
                            <p style={{ color: "white" }}>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>

                            <button style={{ backgroundColor: "black", color: "white", padding: "5px 10px" }}>REGISTER NOW</button>
                        </div>
                    </div>
                    <div className="col-6 register-right">
                        <div className='register-right__content'>
                            <h1 style={{ fontSize: "36px" }}>Search for your course</h1>
                            <form className='register-form' action="">

                                <input className='register-input' type="text" placeholder='Course Name' />
                                <input className='register-input' type="text" placeholder='Category' />
                                <input className='register-input' type="number" placeholder='Degree' />
                                <button style={{border:"none", backgroundColor: "RGB(255, 182, 6)", color: "white", padding: "5px 10px" }}>SEARCH COURSE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default RegisterSec