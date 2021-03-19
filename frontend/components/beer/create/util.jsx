import React from "react";

export const guideLines = (
    <div id='create-beer-content'>
        <h1>Add New Beer</h1>
        <br />
        <h2>Didn't find what you were looking for? Use this form to add a new beer.</h2>
        <br />
        <h2>Beer Creation Guidelines</h2>
        <br />
        <ul id='create-beer-list'>
            <li>Don't include the brewery in the beer name.</li>
            <li>Only add the vintage year if the year is part of the label artwork. "Bottled On" and "Best Before" dates are not valid for </li>
            <li>Please make your beer name proper case.</li>
            <li>Do not create a beer that are blends of 2 or more beers. This goes for any beers that are blended at a Bar/Brewery after kegging.</li>
            <li>Give your homebrew an original name, don't use another name for beer that is commerical to avoid confusion.</li>
            <li>For homebrews, please create your own brewery name, do not use another Homebrewery that has already been created that isn't your brewery.</li>
            <li>Homebrew clones are not allowed. Always give your beer a unique name - do not use the name of the kit or the recipe.</li>
            <li>Please do not add non-supported drinks (Wine, Water, etc)</li>
            <li>Please note that by not following these guidelines may results in revoking of your Beer Creation privileges.</li>
        </ul>
    </div>
)

export const renderErrors = (errors, className) => {
    return (
        <div className={className}>
            <ul className='errors'>
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>

        </div>
    );
}