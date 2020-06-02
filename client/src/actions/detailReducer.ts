const detailReducer = (state: any, action: any) => {
  switch(action.type) {
    case "changeText":
      return { ...state, ...action.payload }
  }
}

export { detailReducer }