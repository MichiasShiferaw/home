import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact=()=> {
    const form = useRef();

 const formSubmit = (e) => {
    e.preventDefault();

        emailjs.sendForm('service_bd86l0l','template_qjbhylo', form.current,'fLhSfXn3isbwgMILz' )
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        }
        );

         e.target.reset()

    }
  return (
    <section id="Contact" className="mt-5">
    <div className="container rounded-3">
              <div className="mt-5 text-white" >
            <div className="text-center">
                <h1 className='text-start'>Get In Touch</h1>

            </div>
            <h4 className='lead'>Let's talk about everything! <i className="bi bi-chat-square-text"></i></h4>
            <h4 className='lead'>Don't like forms! Send me an<span> <strong> Email</strong></span></h4>

            <div className="row justify-content-center mt-5 mb-5">
                <div className=" col-6-lg">
                    <form onSubmit={formSubmit} ref={form}>
                        <div className="mb-4 input-group col-6-lg">

                            <input type="text" className="form-control pl-4 pr-4 pt-3 pb-3" id="name" placeholder="Name"/>
                        </div>


                        <div className="mb-4 input-group col-6-lg">
                            <input type="email" className="form-control px-4 py-3" id="email" name='email' placeholder="Email Address"/>
                        </div>
                        
                        <div className="input-group mb-4">
                            <span className="input-group-text">
                                <i className="bi bi-chat-right-dots-fill"></i>
                            </span>
                             <input type="text" className="form-control " id="subject" name='subject' placeholder="Subject"/>
                        </div>

                        <div className="col-12-md">
                            <textarea name='message' id="message" className="form-control" placeholder='Add a message here' cols={30} rows={8}></textarea>
                            
                        </div>
                        <div className="text-center mt-3 pt-2 pb-1">
                            <button type="submit" value="Send" className="btn btn-lg btn-outline-grey1">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    </div>
    </section>
  )
}

export default Contact