import React, { FC, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Binance } from '@/app/types'
import { MainContainer } from './styles'
import BasicTable from '../TableFlights'

const TableFilterComponent: FC<{ tokenData: Binance[] }> = ({ tokenData }) => {
    const [searchText, setSearchText] = useState('')
    const [width, setWidth] = useState(0)
    const filteredTokens = tokenData.filter(token =>
        token.name!.toLowerCase().includes(searchText.toLowerCase())
    )

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 600) {
                setWidth(300)
            } else {
                setWidth(600)
            }
        }
    }, [])

    return (
        <>
            <MainContainer>
                <TextField
                    label="Search by Token"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    value={searchText}
                    onChange={handleSearchChange}
                    sx={{ width: '100%' }}
                />
            </MainContainer>
            <div
                style={{ overflow: 'scroll', width: '100%', maxWidth: '700px' }}
            >
                <BasicTable tokenData={filteredTokens} />
            </div>
        </>
    )
}

export default TableFilterComponent
