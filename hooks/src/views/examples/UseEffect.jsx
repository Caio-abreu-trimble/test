import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    if(n < 0) return -1
    if(n == 0) return 1
    return calcFatorial(n-1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    const [status, setStatus] = useState("odd")

    useEffect(() => {
        setStatus(number % 2 === 0 ? "Pair" : "Odd")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercise #1"></SectionTitle>
                <div className="center">
                    <div>
                        <span className="text">Fatorial: </span>
                        <span className="text red">{fatorial}</span>
                    </div>
                    <input type="number" className="input" value={number} 
                    onChange={e => setNumber(e.target.value)}/>
                </div>
            <SectionTitle title="Exercise #2"></SectionTitle>
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{status}</span>
            </div>

        </div>
    )
}

export default UseEffect
