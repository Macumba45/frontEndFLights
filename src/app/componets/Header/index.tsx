import { FC, memo } from 'react'
import { MainContainer, SubTitle, Title } from './styles'

const Header: FC = () => {
    return (
        <MainContainer>
            <Title>Token Tracker</Title>
            <SubTitle>Check the status of the principal Tokens</SubTitle>
        </MainContainer>
    )
}

export default memo(Header)
