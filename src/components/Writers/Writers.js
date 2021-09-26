import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writer from '../Writer/Writer';
import './Writers.css'

const Writers = () => {
    const [writers, setWriters] = useState([])

    //state for button click
    const [writer, setWriter] = useState([])

    useEffect(() => {
        fetch('./writers.json')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])

    // invite button handler
    const handleInvite = cartWriter => {
        const newWriter = [...writer, cartWriter];
        setWriter(newWriter)
    }

    return (
        <div className="writer-container">
            <div className="writer-info">
                <Cart
                    writer={writer}
                ></Cart>
            </div>

            <div className="writer-cart">
                {
                    writers.map(writer => <Writer
                        key={writer.id}
                        writer={writer}
                        handleInvite={handleInvite}
                    ></Writer>)
                }
            </div>



        </div>
    );
};

export default Writers;