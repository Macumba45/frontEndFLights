import React, { FC, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Binance } from '@/app/types'
import { MainContainer } from './styles'
import BasicTable from '../TableFlights'

const TableFilterComponent: FC<{ tokenData: Binance[] }> = ({ tokenData }) => {
    const [searchText, setSearchText] = useState('')
    const filteredTokens = tokenData.filter(token =>
        token.name!.toLowerCase().includes(searchText.toLowerCase())
    )

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

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
            <div>
                <BasicTable tokenData={filteredTokens} />
            </div>
        </>
    )
}

export default TableFilterComponent
