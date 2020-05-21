# Car customization

* Usage
* Project requirements
* How it's made
  * Front- and backend
  * Layout creation
  * Part compatibility
  * Price calculation
* Autor and license

## Usage

@todo

## Project requirements

* [ ] Project should use React and Redux
* [ ] Data should be provided asynchronously from external source
* [ ] Dynamic layout from given data
* [ ] Fetching car list and car parts
* [ ] Each car can have different compatibility with other parts
* [ ] Each gearbox have different compatibility with gearboxes
* [ ] Calculating price for all selected parts and presenting summary

## How its made

### Front- and backend

Project is divided into two separate elements, that can be even further split into two repositories and developed separatly. First one - backend, is just regular Express server that provides all needed data from our fixed database. Second, frontend that is, fulfill the representation of data. It's made of React+Redux with HMR.

### Layout creation

Page layout is created from provided DB data. I'm using simple component manager to load proper react components where given scheme puts them. There is even possibility to add own attributes to those elements such as style, className and so on.

### Part compatibility

Each parts (and I'm counting car model as parts too) has it's own 'fits' array of elements that can reduce visible parts in the output screen.

### Price calculation

Every part has it's own prop called 'price'. After selecting each element I'm just summing up all selected parts, so user can see final result.

## Author and license

Author: Krzysztof 'Shlizer' Hinc
License: MIT