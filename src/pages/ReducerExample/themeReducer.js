
export default (state, name) => {
  switch (name) {
    case 'dark':
      return {
        ...state,
        name: name,
        backgroundColor: `rgba(0, 0, 0, 1)`,
        textColor: `rgba(255, 255, 255, 1)`
      };
    case 'light':
      return {
        ...state,
        name: name,
        backgroundColor: `rgba(255, 255, 255, 1)`,
        textColor: `rgba(0, 0, 0, 1)`
      };
    case 'random':
      const red = (Math.random() * 100).toFixed(0);
      const green = (Math.random() * 100).toFixed(0);
      const blue = (Math.random() * 100).toFixed(0);

      return {
        ...state,
        name: name,
        backgroundColor: `rgba(${red}, ${green}, ${blue}, .3)`,
        textColor: `rgba(${red}, ${green}, ${blue}, 1)`
      };
    default:
      return { ...state };
  }
}