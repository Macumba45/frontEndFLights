'use client'

import { useEffect } from 'react'
import getRealTimeFlightData from './api'
import BasicTable from './componets/TableFlights'

export default function Home() {
    useEffect(() => {
        getRealTimeFlightData()
    }, [])

    return (
        <div>
            <BasicTable />
        </div>
    )
}
