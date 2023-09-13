'use client'

import { FC, memo, useState, useEffect } from 'react'
import logic from './logic'
import { ButtonContainer, MainContainer } from './styles'
import TableFilterComponent from './componets/Filter'
import Header from './componets/Header'
import useInterval from './hooks/setInterval'
import Button from '@mui/material/Button'

const Home: FC = () => {
    const { getRealTimeFlightData, data } = logic()
    const [intervalTime, setIntervalTime] = useState(10000)

    useEffect(() => {
        getRealTimeFlightData()
    }, [])

    useInterval(() => {
        getRealTimeFlightData()
    }, intervalTime)

    const handleIntervalChange = (newInterval: number) => {
        setIntervalTime(newInterval)
    }

    return (
        <>
            <MainContainer>
                <Header />
                <ButtonContainer>
                    <Button
                        sx={{
                            margin: 1,
                            backgroundColor: '#f1c933',
                            color: '#2091eb',
                        }}
                        variant="contained"
                        onClick={() => handleIntervalChange(3000)}
                    >
                        Intervalo 3 segundos
                    </Button>
                    <Button
                        sx={{
                            margin: 1,
                            backgroundColor: '#f1c933',
                            color: '#2091eb',
                        }}
                        variant="contained"
                        onClick={() => handleIntervalChange(6000)}
                    >
                        Intervalo 6 segundos
                    </Button>
                    <Button
                        sx={{
                            margin: 1,
                            backgroundColor: '#f1c933',
                            color: '#2091eb',
                        }}
                        variant="contained"
                        onClick={() => handleIntervalChange(10000)}
                    >
                        Intervalo 10 segundos
                    </Button>
                </ButtonContainer>
                <TableFilterComponent tokenData={data} />
            </MainContainer>
        </>
    )
}

export default memo(Home)
