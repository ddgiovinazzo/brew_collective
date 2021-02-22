![alt tag](https://github.com/ddgiovinazzo/brew_collective/blob/main/app/assets/images/brew_collective.png)

brew_collective is a social media application that provides users a an experience of connecting to people and events through their love and enjoyment of beer.

https://brew_collective-aa.herokuapp.com/

Postgress database is used to store data. 
Ruby on Rails is used for it's backend models and controllers to send ana receive data. 
React is used on the frontend for visual and logic handeling of the js, as well as html and css rendering.

## Table of Contents

  * [Technologies](#technologies)
  * [Features](#features)
    * [User Auth](#user-auth)
    * [Beer Creation](#beer-creation-and-viewing)
    * [Upcoming Features](#upcoming-features)
    
## Technologies
* Ruby on Rails
* React
* Redux
* PostgresSQL
* Amazon AWS

## Features

### User Auth
User can create and manage their own personal account. A demo user is also provided for ease of access.

### Beer Creation and Viewing
This allows a user to add new beers and see an index of beers created by all users. If the brewery is chosen from the select dropdown, then the matching id is assigned to the beer's brewery_id. If the add beer option is selected on the dropdown, an input is rendered and state is updated via onchange. Then when the form is submitted, the new brewery is created first. The id of the newly created brewery is then assigned to create the new beer.

```javascript
   handleSubmit(e) {
        e.preventDefault()
        if (this.props.errors.length > 0) {
            this.props.clearBreweryErrors()
            this.props.clearBeerErrors()
        }
        const { createBeer, createBrewery, breweries } = this.props
        const { beer } = this.state

        const newBeer = Object.assign({}, beer)
        let breweryExists = false
        for (let i = 0; i < breweries.length; i++) {

            if (breweries[i].name === beer.brewery_id) {
                breweryExists = true
                newBeer.brewery_id = breweries[i].id
                break
            }
        }

        if (breweryExists) {
            createBeer(newBeer)
            this.props.history.push('/beers')

        } else {

            createBrewery({ name: beer.brewery_id }).then(payload => {
                newBeer.brewery_id = payload.brewery.id

                createBeer(newBeer)
                this.props.history.push('/beers')
            })
        }
    }
```

### Brewery Creation 
This allows a user to add new breweries.
