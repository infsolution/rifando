import  FlexGrid from '../config/Flexgrid'

const theme = {

colors:{
    background: '#f5a591',
    text:'#121212',
    primary:'#0000FF',
    background_lite: '#FFFFFF'
},
  flexboxgrid: {
    gridSize:FlexGrid.gridSize, // columns
    gutterWidth: FlexGrid.gutterWidth / FlexGrid.baseFontSize, // rem
    outerMargin: FlexGrid.outerMargin / FlexGrid.baseFontSize, // rem
    mediaQuery: 'only screen',
    container: {
      sm: FlexGrid.container.sm / FlexGrid.baseFontSize, // rem
      md: FlexGrid.container.md / FlexGrid.baseFontSize, // rem
      lg: FlexGrid.container.lg / FlexGrid.baseFontSize // rem
    },
    breakpoints: {
      xs: FlexGrid.breakpoints.xs / FlexGrid.baseFontSize, // em
      sm: FlexGrid.breakpoints.sm / FlexGrid.baseFontSize, // em
      md: FlexGrid.breakpoints.md / FlexGrid.baseFontSize, // em
      lg: FlexGrid.breakpoints.lg / FlexGrid.baseFontSize // em
    }
  }
}


export default theme