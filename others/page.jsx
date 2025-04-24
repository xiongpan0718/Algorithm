class Parent extends React.Component{
  constructor(props){
    super(props)
    this.state = { name:'frank' }
  }
  
  componentDidMount () {
    document.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    });
  }
  
  componentDidUnMount () {
    document.removeEventListener('touchmove', handleTouchMove);
  }
  
  handleTouchMove = () => {}

  render(){
    return (
        <Touchable
         name={this.state.name}
         onTouchMove={handleTouchMove}
        >
            hi
        </Touchable>
  }
}
