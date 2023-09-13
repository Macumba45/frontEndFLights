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
    const [intervalTime, setIntervalTime] = useState(3000)
    const [selectedButton, setSelectedButton] = useState(0)

    useEffect(() => {
        getRealTimeFlightData()
        setSelectedButton(0)
    }, [])

    useInterval(() => {
        getRealTimeFlightData()
    }, intervalTime)

    const handleIntervalChange = (newInterval: number, index: number) => {
        setSelectedButton(index)
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
                            backgroundColor: selectedButton === 0 ? '#2091eb' : '#f1c933',
                            color: selectedButton === 0 ? '#f1c933' : '#2091eb',
                        }}
                        variant="contained"
                        onClick={() => handleIntervalChange(3000, 0)}
                    >
                        Intervalo 3 segundos
                    </Button>
                    <Button
                        tabIndex={1}
                        sx={{
                            margin: 1,
                            backgroundColor: selectedButton === 1 ? '#2091eb' : '#f1c933',
                            color: selectedButton === 1 ? '#f1c933' : '#2091eb',

                        }}
                        variant="contained"
                        onClick={() => handleIntervalChange(6000, 1)}
                    >
                        Intervalo 6 segundos
                    </Button>
                    <Button
                        tabIndex={2}
                        sx={{
                            margin: 1,
                            backgroundColor: selectedButton === 2 ? '#2091eb' : '#f1c933',
                            color: selectedButton === 2 ? '#f1c933' : '#2091eb',
                        }}
                        variant="contained"
                        onClick={() => handleIntervalChange(10000, 2)}
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
