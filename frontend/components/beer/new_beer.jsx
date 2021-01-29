import React from "react";

class NewBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breweryFlag: false,
            textLimit: 750,
            beer: {
                name: null,
                brewery_id: null,
                serving_style: null,
                abv: null,
                ibu: null,
                flavor_profile: null,
            },
            brewery: {

            }
        }

        this.handleText = this.handleText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllBreweries()
        if (this.props.errors.length > 0) {
            this.props.clearBreweryErrors()
            this.props.clearBeerErrors()
        } 
    }

    handleText(e) {
        const newBeer = Object.assign({}, this.state.beer)
        newBeer['flavor_profile'] = e.currentTarget.value
        this.setState({
            textLimit: 750 - e.currentTarget.value.length,
            beer: newBeer
        })
    }

    renderErrors() {
        return (
            <div className='errors-container-create-beer'>

                <ul className='errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.props.errors.length > 0) {
            this.props.clearBreweryErrors()
            this.props.clearBeerErrors()
        }
        const { createBeer, createBrewery } = this.props
        const { beer } = this.state
        const { breweries } = this.props
        const newBeer = Object.assign({}, beer)
        let breweryExists = false
        let that = this
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

    handleInput(type) {
        const newBeer = Object.assign({}, this.state.beer)

        return (e) => {

            newBeer[type] = e.currentTarget.value

            return this.setState({
                beer: newBeer
            })
        }

    }

    handleBrewery(e){
        if(e.currentTarget.value === 'add-brewery'){
            this.setState({
                breweryFlag: !this.state.breweryFlag
            })
        }else{
            const newBeer = Object.assign({}, this.state.beer)
            newBeer['brewery_id'] = e.currentTarget.value

            return this.setState({
                beer: newBeer
            })
        }
    }

    render() {
        const beers = [
            'Belgian',
            'Brown Ale',
            'Cider',
            'Gluten Free',
            'Ipa',
            'Lager',
            'Mead',
            'Pale Ale',
            'Red Ale',
            'Sour',
            'Stout'
        ]
        const beerOptions = beers.map((beer, i) => <option key={i} value={beer}>{beer}</option>)

        const breweries = this.props.breweries.map(brewery => <option value={brewery.id}>{brewery.name}</option> )

        const breweryCreate = (
            <label className='form-label' htmlFor="">Brewery

            <div className='create-beer-input-lg'>
                        <input onChange={this.handleInput('brewery_id')} type="" />
                    </div>
                        <p id='brewery-creation-cancel'onClick={()=>this.setState({breweryFlag: !this.state.breweryFlag})}>Cancel Brewery Creation</p>
                </label>
        )
        const brewerySelect = (
            <label className='form-label' htmlFor="">Brewery
                       
            
            <div className='create-beer-input-lg'>
                        <select onChange={this.handleBrewery.bind(this)} className='create-beer-input-lg'>
                            <option value={null}>Brewery Name</option>
                            {breweries}
                            <option value='add-brewery'>Click Here to Add a Brewery.</option>
                        </select>
                    </div>
                </label>
        )

        return (
            <div id='create-beer-container'>
                    <form onSubmit={this.handleSubmit} id={!this.props.errors.length ? 'create-beer-form' : 'create-beer-errors-form'} action="">
                        <div id='create-beer-content'>
                            <h1>Add a New Beer</h1>
                            <br />
                            <h2>Can't find the beer you're looking for?</h2>
                            <h2>Use this form to add it to our list!</h2>
                            <br />
                            <h3>Guidelines</h3>
                            <br />
                            <ul id='create-beer-list'>
                                <li>Brewery cannot be included in beer name</li>
                                <li>If the year is part of the label artwork, only add the vintage year</li>
                                <li>Make sure your beer name is properly is properly cased</li>
                                <li>No beers that are a blend of two or more other beers will be accepted</li>
                                <li>Give your homebrew an original name</li>
                                <li>Homebrew clones are not allowed.</li>
                                <li>We will not accept unsupported drinks(wine, water, etc)</li>
                                <li>Not following these guidelines may result in revocation of beer creation privliges</li>
                            </ul>
                        {this.props.errors.length > 0 ? this.renderErrors() : null}
                        </div>
                        <label className='form-label' htmlFor="">Beer

                    <div className='create-beer-input-lg'>
                                <input onChange={this.handleInput('name')} type="" />
                            </div>
                        </label>

                        {this.state.breweryFlag ? breweryCreate : brewerySelect}

                        <div className='create-beer-custom-input-container'>

                            <label className='form-label' htmlFor="">ABV
                            <div className='create-beer-input-sm'>
                                    <input onChange={this.handleInput('abv')} type="" />
                                </div>
                            </label>

                            <label className='form-label' htmlFor="">IBU
                        <div className='create-beer-input-sm'>
                                    <input onChange={this.handleInput('ibu')} type="" />

                                </div>
                            </label>

                            <label className='form-label' htmlFor="">Style

                        <div className='create-beer-select'>
                                    <select onChange={this.handleInput('serving_style')}>
                                        <option>Select A Style</option>
                                        {beerOptions}
                                    </select>
                                </div>
                            </label>

                        </div>
                        <label className='form-label' htmlFor="">Description
                    <div className='create-beer-description'>

                                <span id='counter'>{this.state.textLimit.toString()}</span>
                                <textarea onChange={this.handleText} maxLength="750" />
                            </div>
                        </label>
                        <button className='form-submit create-beer-submit'>Add Beer</button>
                    </form>
                </div>
        )
    }
}
export default NewBeer