export default function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_ITEM_LIST': {
      console.log('voy a actualizar la lista de paises')
      return { ...state, itemList: action.payload }
    }

    case 'SET_ITEM_BY_NAME': {
      let list = state.itemList
      
      const itemListByName = list.filter(item => item.details.name.toLowerCase().includes(action.payload.toLowerCase()))
      return { ...state, itemListByName }
    }

    default: {
      return state
    }
  }
}