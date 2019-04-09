import React from 'react'
import RecipeCard from './RecipeCard'

const recipes = [
  {
    name: "Pizza",
    ingredients: "dough, cheese, sauce"
  },
  {
    name: "Ham and Cheese",
    ingredients: "hame, cheese, bread"
  },
  {
    name: "Salad",
    ingredients: "lettuce, cheese, dressing"
  },
  {
    name: "Artichoke Salad",
    ingredients: "Artichokes and stuff"
  },
  {
    name: "Chile",
    ingredients: "Meat and beans and spices"
  }
]

class RecipeContainerComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      sorted: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.setState({
      recipes: recipes
    })
  }

  handleClick(event){
    event.preventDefault()
    const newSortedState = this.state.sorted ? false : true
    this.setState({
      sorted: newSortedState
    })
  }

  sortedRecipes = () => [...this.state.recipes].sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {return -1}
    if (a.name.toUpperCase() > b.name.toUpperCase()) {return 1}
    return 0
  })

  render() {
    const recipes = this.state.sorted ? this.sortedRecipes() : this.state.recipes
    const recipeCards = recipes.map(recipe => <RecipeCard key={recipe.name} recipe={ recipe }/>)

    return (
      <div>
        <h1>Recipes:</h1>
        <button
          onClick={ this.handleClick }
          >
          Toggle Sort
        </button>
        { recipeCards }
      </div>
    )
  }
}

export default RecipeContainerComponent
