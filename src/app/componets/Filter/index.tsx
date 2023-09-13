import React, { FC, useState } from 'react'
import TextField from '@mui/material/TextField'
import { TokenData } from '@/app/types'
import { MainContainer } from './styles'
import BasicTable from '../TableFlights'
import ButtonComponent from '../Button'
const TableFilterComponent: FC<{ tokenData: TokenData[] }> = ({
    tokenData,
}) => {
    const [searchText, setSearchText] = useState('')
    const filteredTokens = tokenData.filter(
        token =>
            token.uuid!.toLowerCase().includes(searchText.toLowerCase()) ||
            token
                .taker_side!.toLowerCase()
                .includes(searchText.toLowerCase()) ||
            token.symbol_id!.toLowerCase().includes(searchText.toLowerCase())
    )

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    return (
        <>
            <MainContainer>
                <TextField
                    label="Search by UUID OR Buy/Sell"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    value={searchText}
                    onChange={handleSearchChange}
                    sx={{ mb: '3rem' }}
                    disabled={tokenData.length === 0}
                />
            </MainContainer>
            <div>
                <BasicTable tokenData={filteredTokens} />
            </div>
        </>
    )
}

export default TableFilterComponent
