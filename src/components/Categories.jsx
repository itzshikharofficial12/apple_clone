import React from 'react'
import LB from '../assets/LB.png'
import LT from '../assets/LT.png'
import RB from '../assets/RB.png'
import RT from '../assets/RT.png'

function Categories() {
    return (<>
        <section className='flex gap-3 p-3'>
            <div><img src={LT} alt="" /></div>
            <div><img src={RT} alt="" /></div>
        </section>
        <section className='flex gap-3 p-3'>
            <div><img src={LB} alt="" /></div>
            <div><img src={RB} alt="" /></div>
        </section>
    </>
    )
}

export default Categories