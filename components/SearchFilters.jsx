import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from '../utils/filterData'

export default function SearchFilters() {
  const [filters, setFilters] = useState(filterData)
  const router = useRouter();//router.query gives browser url params

  const searchProperties = (filterValues) => {
    //console.log(filterValues) //filterValues only has property of changed element 
    //here we append or change that into url- as parameter
    const path = router.pathname;
    const { query } = router;//current url params
    const values = getFilterValues(filterValues)
    values.forEach(item => {
      query[item.name] = item.value;
    })
    router.push({ pathname: path, query })
  }
  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select name={filter.placeholder}
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
            placeholder={filter.placeholder} w='fit-content' p='2' >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}