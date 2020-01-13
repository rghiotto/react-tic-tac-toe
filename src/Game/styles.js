export default {
  body: {
    fontSize: '14px',
    fontFamily: "Century Gothic, Futura, sans-serif",
    margin: '20px',
  },
  ol: {
    paddingLeft: '30px',
  },
  ul: {
    paddingLeft: '30px',
  },
  boardRow: {
    '&:after': {
      clear: 'both',
      content: '',
      display: 'table',
    }
  },
  status: {
    marginBottom: '10px',
  },
  kbdNavigation:{
    square: {
      '&:focus': {
        background: '#ddd',
      }
    }
  },
  game: {
    display: 'flex',
    flexDirection: 'row',
  },
  gameInfo: {
    marginLeft: '20px',
  },
};
