import React, { useEffect } from 'react'
import styled from 'styled-components'
import Item from './item'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from './wrapper'

const ItemListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`

function ItemList() {
  const dispatch = useDispatch()

  const itemListByName = useSelector((state) => state.itemListByName)

  const itemList = useSelector((state) => {
    if (itemListByName.length > 0) {
      return itemListByName
    }

    return state.itemList;
  })

  useEffect(() => {
    fetch('https://api.holidu.com/old/rest/v6/search/offers?searchId=46fdd790-e0a7-4b96-98b5-6be594a8e8b1&searchTerm=Mallorca%2C+Spanien&adults=2&domainId=2&locale=de-DE&currency=EUR')
      .then((response) => {
        return response.json()
      })
      .then((list) => {
        dispatch({
          type: 'SET_ITEM_LIST',
          payload: list.offers
        })
      })
      .catch(() => {
        console.log('oops!')
      })
  }, [dispatch])

  return (
    <Wrapper>
      <ItemListStyled>
        {
          itemList.map(({ id, details, photos }) => {
            return (
              <Item
              id            = {id}
              name          = {details.name}
              size          = {details.shortName[0]}
              bedrooms      = {details.bedroomsCount}
              guests        = {details.guestsCount}
              apartmentType = {details.apartmentType}
              photos        = { photos.map(photo => photo.t)}
              />
            )
          })
        }
      </ItemListStyled>
    </Wrapper>
  )
}

export default ItemList
