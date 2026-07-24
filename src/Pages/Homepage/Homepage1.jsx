import React, { useState } from 'react'
const Homepage1 = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl text-center">Hello Users:{counter}</h1>
                <div className="flex justify-center gap-5 pt-5">
                    <button onClick={() => setCounter(counter + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Increase Counter
                    </button>
                    <button onClick={() => setCounter(counter - 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Decrase Counter
                    </button>
                </div>
            </div>
        </>
    )

}
export default Homepage1;