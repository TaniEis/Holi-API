import React, { useState } from 'react'
import styled from 'styled-components'
import Wrapper from './wrapper'
import { useSelector } from 'react-redux'
import Carousel from "./carousel"

const ItemPageStyled = styled.div`
  .back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    padding: .7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`
const ItemSelectedStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  img {
    width: 100%;
    margin-bottom: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .border-item {
    padding: .5em 2em;
    border-radius: 5px;
    margin-right: 15px;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
  }
  .languages {
    span {
      margin-right: 5px;
      &:after {
        content: ',';
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3.5em;
    }
  }
  .slider {
    width: 80%;
    height: 700px;
    padding: 0 0 50px 0;
    margin: auto;
  }
`
const Slide = styled.div`
  text-align: center;
  height: 700px;
  width: 100%;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

function ItemPage({ match, history }) {
  let selected = useSelector(state => state.itemList.find(item => item.id === match.params.id));
  const [store, nul] = useState(selected)

  function handleClick() {
    history.goBack()
  }
  return (
    <ItemPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
        <ItemSelectedStyled>
          <div className="slider">
          <Carousel>
            {store.photos.map((post, index) => <Slide loading="lazy" img={post.l} key={index}/>)}
          </Carousel>
          </div>
          <div>
            <h2>{store.details.name}</h2>
            <div className="grid">
              <div>
                <p><strong>Size:</strong> {store.details.shortName[0]}</p>
                <p><strong>Bedrooms:</strong> {store.details.shortName}</p>
                <p><strong>Guests:</strong> {store.details.bedroomsCount}</p>
                <p><strong>Type:</strong> {store.details.apartmentType}</p>
              </div>
            </div>
          </div>
    </ItemSelectedStyled>
      </Wrapper>
    </ItemPageStyled>
  )
}

export default ItemPage
