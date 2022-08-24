import React from 'react';
import logo from '../../Portrait2.png';
// import logo1 from '../../'

function About() {
    var message="Hello, my name is Michias. I am a third year software engineering student. ";
  return (

  <section id="about" className="mt-5 pt-2 pb-2">
    <div className="container bg-secondary-light-8">
      
    <div className='row'>
      <div className='col-3-md'>
        <img src={logo}  className="logo2" alt="Michias" />

      </div>
      <div className='col-9-md'>
        <div className='p-3'>
          <h2 className="mb-2">About Me!</h2>
          <p>
            I am Michias Shiferaw, web developer from Ottawa, Canada. I am Ethiopian.
            I love 
            I do mybest to improvemy skills

          </p>
        </div>
      </div>
    </div>
    {/* <div className="container bg-secondary-light-8"> */}
      {/* <h2 className="mb-2">About Me!</h2>
      <p>{message}</p> */}
      {/* <p className="mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nam, corrupti dolorum inventore perspiciatis id illum repellat iste amet sapiente ducimus nihil molestias quasi, totam, ratione minima molestiae blanditiis iure consequatur praesentium debitis. Nulla maiores doloremque tempore nobis dolorum amet!</p> */}
    </div>
  </section>
  )
}

export default About