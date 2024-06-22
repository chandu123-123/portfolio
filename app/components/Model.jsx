"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Model = ({id,titl,des,phot,lin}) => {
    useEffect(()=>{

    },[titl])
  return (
    <div>
      {/* The button to open modal */}
<label htmlFor={id} className="btn">Read More</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id={id} className="modal-toggle" />
<div className="modal text-black" role="dialog">
  <div className="modal-box flex flex-col justify-center items-center gap-10">
    <h3 className="font-bold text-lg">{titl}</h3>
    <Image src={phot} width={300} height={300} loading="lazy"></Image>
    <p className="py-4">{des}</p>
    <Link href={lin} target='_blank'>Visit</Link>
    <div className="modal-action">
      <label htmlFor={id} className="btn">Close!</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default Model
