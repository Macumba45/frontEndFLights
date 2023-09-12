import { FC, memo } from 'react'
import { MainContainer } from './styles'
import DatePickerComp from '../DatePicker'
import SearchFilterComponent from '../Filter'
import logic from '@/app/logic'

const Header: FC = () => {
    const { data } = logic()
    console.log(data.data)

    return (
        <MainContainer>
            <DatePickerComp />
            <SearchFilterComponent
                data={data.data}
                pagination={data.pagination}
            />
        </MainContainer>
    )
}

export default memo(Header)
