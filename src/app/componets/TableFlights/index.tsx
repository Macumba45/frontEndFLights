import * as React from 'react'
import { FC, memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { PropsToken } from './type'
import { Alert, Button, Modal } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded'

const GreenTableCell = styled(TableCell)`
    color: green;
    font-weight: 800;
`

const RedTableCell = styled(TableCell)`
    color: red;
    font-weight: 800;
`

const CenterContainer = styled.div`
    display: flex;
    align-items: center;
`

const BasicTable: FC<PropsToken> = (props: PropsToken) => {
    const rows = props.tokenData
    const [previousData, setPreviousData] = useState<{
        [key: string]: { volumen24h: number; marketCap: number; price: number }
    }>({})
    const [changeStatus, setChangeStatus] = useState<{
        [key: string]: 'increased' | 'decreased' | ''
    }>({})
    const [changes, setChanges] = useState<{
        [key: string]: { volumen24h: number; marketCap: number; price: number }
    }>({})
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [buttonModal, setButtonModal] = useState(false)

    const handleOpenButton = () => {
        setButtonModal(true)
        setIsModalOpen(false)
    }

    const handleOpenNotification = () => {
        setIsModalOpen(true)
        setButtonModal(false)
    }

    useEffect(() => {
        const newData: {
            [key: string]: {
                volumen24h: number
                marketCap: number
                price: number
            }
        } = {}
        const newChangeStatus: {
            [key: string]: 'increased' | 'decreased' | ''
        } = {}

        rows.forEach(row => {
            const currentVolumen24H = parseFloat(row.volumen24h)
            const previousVolumen24H = previousData[row.name]?.volumen24h || 0
            const currentMarketCap = parseFloat(row.marketCap)
            const previousMarketCap = previousData[row.name]?.marketCap || 0
            const currentPrice = parseFloat(row.price)
            const previousPrice = previousData[row.name]?.price || 0

            if (currentPrice > previousPrice) {
                newChangeStatus[row.name] = 'increased'
            } else if (currentPrice < previousPrice) {
                newChangeStatus[row.name] = 'decreased'
            } else {
                newChangeStatus[row.name] = ''
            }

            if (currentMarketCap > previousMarketCap) {
                newChangeStatus[row.name] = 'increased'
            } else if (currentMarketCap < previousMarketCap) {
                newChangeStatus[row.name] = 'decreased'
            } else {
                newChangeStatus[row.name] = ''
            }

            if (currentVolumen24H > previousVolumen24H) {
                newChangeStatus[row.name] = 'increased'
            } else if (currentVolumen24H < previousVolumen24H) {
                newChangeStatus[row.name] = 'decreased'
            } else {
                newChangeStatus[row.name] = ''
            }

            newData[row.name] = {
                volumen24h: currentVolumen24H,
                marketCap: currentMarketCap,
                price: currentPrice,
            }
        })

        setPreviousData(newData)

        if (newData !== previousData) {
            const updatedChanges: {
                [key: string]: {
                    volumen24h: number
                    marketCap: number
                    price: number
                }
            } = {}
            Object.keys(newData).forEach(coin => {
                const previousCoinData = previousData[coin]
                const currentCoinData = newData[coin]
                if (
                    previousCoinData &&
                    (previousCoinData.volumen24h !==
                        currentCoinData.volumen24h ||
                        previousCoinData.marketCap !==
                            currentCoinData.marketCap ||
                        previousCoinData.price !== currentCoinData.price)
                ) {
                    updatedChanges[coin] = currentCoinData
                }
            })
            setChanges(updatedChanges)
        }

        setChangeStatus(newChangeStatus)
    }, [rows])

    return (
        <>
            {buttonModal && (
                <Button onClick={() => handleOpenNotification()}>
                    <CircleNotificationsRoundedIcon
                        sx={{
                            fontSize: 60,
                            position: 'fixed',
                            bottom: 10,
                            right: 20,
                            backgroundColor: 'white',
                            borderRadius: '50%',
                        }}
                    />
                </Button>
            )}
            {isModalOpen && (
                <Modal
                    style={{
                        marginBottom: '2rem',
                        outline: 'none',
                        width: 400,
                    }}
                    open={Object.keys(changes).length > 0}
                >
                    <Paper
                        sx={{
                            p: 2,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            overflow: 'scroll', // Agrega el scroll al modal
                            outline: 'none',
                            maxHeight: 600,
                        }}
                    >
                        {Object.keys(changes).map(coin => {
                            const coinData: any = changes[coin]
                            return (
                                <Alert
                                    sx={{
                                        outline: 'none',
                                        margin: 2,
                                        width: 200,
                                        display: 'flex',
                                    }}
                                    key={coin}
                                    severity="success"
                                >
                                    {coin} has changed:
                                    <ul style={{ overflow: 'scroll' }}>
                                        {Object.keys(coinData).map(key => (
                                            <li
                                                style={{ fontSize: '0.8rem' }}
                                                key={key}
                                            >
                                                {key}: {coinData[key]}
                                            </li>
                                        ))}
                                    </ul>
                                </Alert>
                            )
                        })}

                        <Button
                            sx={{ outline: 'none' }}
                            variant="contained"
                            onClick={() => handleOpenButton()}
                        >
                            Cerrar
                        </Button>
                    </Paper>
                </Modal>
            )}
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Coin Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Volumen 24H</TableCell>
                            <TableCell>MarketCap</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            const status = changeStatus[row.name]
                            return (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        sx={{ fontWeight: 800 }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.name}
                                    </TableCell>
                                    {status === 'increased' ? (
                                        <GreenTableCell>
                                            <CenterContainer>
                                                <MonetizationOnIcon />{' '}
                                                {row.price} <ArrowDropUpIcon />
                                            </CenterContainer>
                                        </GreenTableCell>
                                    ) : status === 'decreased' ? (
                                        <RedTableCell>
                                            <CenterContainer>
                                                <MonetizationOnIcon />{' '}
                                                {row.price}{' '}
                                                <ArrowDropDownIcon />
                                            </CenterContainer>
                                        </RedTableCell>
                                    ) : (
                                        <TableCell>{row.price}</TableCell>
                                    )}
                                    {status === 'increased' ? (
                                        <GreenTableCell>
                                            <CenterContainer>
                                                <EqualizerIcon />{' '}
                                                {row.volumen24h}{' '}
                                                <ArrowDropUpIcon />
                                            </CenterContainer>
                                        </GreenTableCell>
                                    ) : status === 'decreased' ? (
                                        <RedTableCell>
                                            <CenterContainer>
                                                <EqualizerIcon />{' '}
                                                {row.volumen24h}{' '}
                                                <ArrowDropDownIcon />
                                            </CenterContainer>
                                        </RedTableCell>
                                    ) : (
                                        <TableCell>{row.volumen24h}</TableCell>
                                    )}
                                    {status === 'increased' ? (
                                        <GreenTableCell>
                                            <CenterContainer>
                                                <PriceChangeIcon />{' '}
                                                {row.marketCap}{' '}
                                                <ArrowDropUpIcon />
                                            </CenterContainer>
                                        </GreenTableCell>
                                    ) : status === 'decreased' ? (
                                        <RedTableCell>
                                            <CenterContainer>
                                                <PriceChangeIcon />{' '}
                                                {row.marketCap}{' '}
                                                <ArrowDropDownIcon />
                                            </CenterContainer>
                                        </RedTableCell>
                                    ) : (
                                        <TableCell>{row.marketCap}</TableCell>
                                    )}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default memo(BasicTable)
