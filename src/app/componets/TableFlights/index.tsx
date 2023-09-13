import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { FC, memo } from 'react'
import { PropsToken } from './type'

const BasicTable: FC<PropsToken> = (props: PropsToken) => {
    const rows = props.tokenData

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, mt: '5rem' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>User</TableCell>

                        <TableCell></TableCell>

                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Tokens</TableCell>

                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Price</TableCell>

                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell sx={{ padding: 0 }}>Time Trade</TableCell>

                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Buy/Sell</TableCell>

                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow
                                key={row.user}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    key={row.user}
                                </TableCell>
                                <TableCell>{row.token}</TableCell>
                                <TableCell>{row.timeTrade}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.size}</TableCell>
                                <TableCell>{row.buysell}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default memo(BasicTable)
