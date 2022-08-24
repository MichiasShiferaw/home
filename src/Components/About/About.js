import React from 'react'

function About() {
    var message="Hello, my name is Michias. I am a third year software engineering student. ";
  return (

  <section id="about" className="bg-secondary-light-8 mt-5 pt-2 pb-2">
    <div className="container">
      <h2 className="mb-2">About Me!</h2>
      <p>{message}</p>
      {/* <p className="mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nam, corrupti dolorum inventore perspiciatis id illum repellat iste amet sapiente ducimus nihil molestias quasi, totam, ratione minima molestiae blanditiis iure consequatur praesentium debitis. Nulla maiores doloremque tempore nobis dolorum amet!</p> */}
    </div>
  </section>
  )
}

export default About