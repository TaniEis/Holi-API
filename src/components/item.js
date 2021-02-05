import React from 'react';
import styled from 'styled-components'
import { useHistory} from 'react-router-dom'
import { Slide } from "./slider";
import Carousel from "./carousel"

const ItemStyled = styled.div`
  cursor: pointer;
  text-align: left;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
  &:hover .details {
    border-radius: 0 0 5px 5px;
    border: 1px solid var(--black);
    border-top: none;
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }
  .details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: .3s border;
    background: var(--white);
  }
  h2 {
    margin: 0 0 1rem;
    font-size: 20px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    font-size: .9em;
    margin-bottom: .5rem;
  }
`

function Item({
  id,
  name,
  size,
  bedrooms,
  guests,
  apartmentType,
  photos,
}) {
  const history = useHistory()
  function handleClick() {
    history.push(`/item/${id}`)
  }

  return (
    <ItemStyled>
      <Carousel>
        {photos.map((photo, index) => <Slide loading="lazy" img={photo} key={index} />)}
      </Carousel>

      <div className="details" onClick={handleClick}>
        <h2>{name}</h2>
        <p><strong>size:</strong> {size}</p>
        <p><strong>bedrooms:</strong> {bedrooms}</p>
        <p><strong>guests:</strong> {guests}</p>
        <p><strong>type:</strong> {apartmentType}</p>
      </div>
    </ItemStyled>
  )
}

export default Item
