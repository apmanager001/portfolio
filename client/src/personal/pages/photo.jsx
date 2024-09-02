import React from 'react'
import {Link} from 'react-router-dom'



const Photo = () => {

  return (
    <>
      <div className='pt-12'>
        <h1><Link to="https://www.instagram.com/foleyautamatic/" target="_blank">My Photography</Link></h1>
          <div className='h-full w-full p-14 flex justify-center flex-wrap gap-2'>
                    <img src='/insta/1.jpg' alt="1" className='h-48 w-48'/>
                
                    <img src='/insta/2.jpg' alt="2" className='h-48 w-48' />
                
                    <img src='/insta/3.jpg' alt="3" className='h-48 w-48' />
              
                    <img src='/insta/4.jpg' alt="4" className='h-48 w-48' />
              
                    <img src='/insta/5.jpg' alt="5" className='h-48 w-48' />
              
                    <img src='/insta/6.jpg' alt="6" className='h-48 w-48' />
              
                    <img src='/insta/7.jpg' alt="7" className='h-48 w-48'  />
                
                    <img src='/insta/8.jpg' alt="8" className='h-48 w-48' />
                
                    <img src='/insta/9.jpg' alt="9" className='h-48 w-48' />
                
                    <img src='/insta/10.jpg' alt="10" className='h-48 w-48' />
                
                    <img src='/insta/11.jpg' alt="11" className='h-48 w-48' />
              
                    <img src='/insta/12.jpg' alt="12" className='h-48 w-48' />
                
                    <img src='/insta/13.jpg' alt="13" className='h-48 w-48' />
              
                    <img src='/insta/14.jpg' alt="14" className='h-48 w-48' />
              
                    <img src='/insta/15.jpg' alt="15" className='h-48 w-48' />
                
                    <img src='/insta/16.jpg' alt="16" className='h-48 w-48' />
              
                    <img src='/insta/17.jpg' alt="17" className='h-48 w-48' />
                
                    <img src='/insta/18.jpg' alt="18" className='h-48 w-48' />

        </div> 
      </div>
    </>
  )
}

export default Photo