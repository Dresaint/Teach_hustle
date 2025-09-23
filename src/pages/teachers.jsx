import React from 'react'
import Header from '../components/header';
import '../Mycss/teachers.css';
import Meet from '../assets/teachers.jpg';
import FOOTER from '../components/footer';

const teachers = () => {
  return (
    
    <>
     <Header />
       
        <section>
            <div className='meet'>
                <h1>Meet the awesome TEACHERS and connect with them!!!</h1>

            </div>
            <div className='teachers'>
               <div className='teach'>
                    <img src={Meet} alt="teachers" />
                    <h2>JAVASCRIPTS</h2>
                    <button><a href="">Connect Now</a></button>
                </div>

                <div>
                    <img src={Meet} alt="teachers" />
                    <h2>SOCIA MEDIA MANAGEMENT</h2>
                    <button><a href="">Connect Now</a></button>
                </div>

                <div>
                    <img src={Meet} alt="teachers" />
                    <h2>FOREX TRADING</h2>
                    <button><a href="">Connect Now</a></button>
                </div>

                <div>
                    <img src={Meet} alt="teachers" />
                    <h2>DATA ANALYTICS</h2>
                    <button><a href="">Connect Now</a></button>
                </div>

                <div>
                    <img src={Meet} alt="teachers" />
                    <h2>BACKEND DEVELOPER</h2>
                    <button><a href="">Connect Now</a></button>
                </div>

                <div>
                    <img src={Meet} alt="teachers" />
                    <h2>FRONTEND DEVELOPER</h2>
                    <button><a href="">Connect Now</a></button>
                </div>

                <div>
                    <img src={Meet} alt="teachers" />
                    <h2>REACT JS</h2>
                    <button><a href="">Connect Now</a></button>
                </div>

                <div>
                    <img src={Meet} alt="teachers" />
                    <h2>CYRPTO TRADING</h2>
                    <button><a href="">Connect Now</a></button>
                </div>

                <div>
                    <img src={Meet} alt="teachers" />
                    <h2>PYTHON</h2>
                    <button><a href="">Connect Now</a></button>
                </div>










            </div>

        </section>

        <FOOTER/>

    </>
  )
}

export default teachers