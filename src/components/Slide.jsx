import React, { useReducer } from 'react'
import { images } from './Image'
import { BsChevronBarLeft, BsChevronBarRight, BsFillRecordFill } from 'react-icons/bs'

const Slide = () => {

    const reducer = (state, action) => {

        switch (action.type) {

            case "next" : 
                return state === images.length-1 ? 0 : state +1

            case "previous":
                return state === 0 ? images.length-1 : state -1

            case "doc":
                return action.payloat

            default : 
                return state

        }
    };

    const [state, dispatch] = useReducer(reducer, 0);
    
  return (
    <>

            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                
                    <div 
                    style={{ backgroundImage: `url(${images[state].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                    </div>

                    <div
                    className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'
                    >
                        <BsChevronBarLeft onClick={() => dispatch({type:"previous"})} size={30} />
                    </div>

                    <div
                    className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'
                    >
                        <BsChevronBarRight onClick={() => dispatch({type:"next"})} size={30} />
                    </div>

                    <div className='flex top-4 justify-center py-2'>
                            {
                                images.map((image, index) => 
                                    <div key={index} className="text-2xl cursor-pointer" 
                                        onClick={() => dispatch({
                                            type:"doc",
                                            payloat:index
                                        })}
                                    >
                                        <BsFillRecordFill style={{ fontSize:state === index ? "30px" : "" }}/>
                                    </div>
                                )
                            }
                    </div>

            </div>
      
    </>
  )
}

export default Slide
