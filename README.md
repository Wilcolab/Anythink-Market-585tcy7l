# GitHub Copilot Workshop

## Enhance a Node Calculator app using GitHub Copilot

<img width="400" alt="Node Calculator image" src="./assets/Node%20calculator%20image.png">

The project contains a simple node.js application that exposes REST APIs to perform arithmetic on integers, and provides a test suite with mocha and chai.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Power operation: exponentiation using base^exponent
- Web interface with calculator buttons
- REST API endpoint at `/arithmetic` for calculations
- Test suite with Mocha and Chai covering all operations

## Instructions 

In order to run the app use `npm start`

## What I Have Learned

During this session, I explored the codebase of a Node.js calculator application. The app consists of:

- **Backend**: Express server serving static files and providing a REST API for arithmetic operations.
- **Frontend**: HTML interface with JavaScript for client-side logic.
- **API**: Supports GET requests to `/arithmetic` with query parameters for operation and operands.
- **Operations**: Supports add, subtract, multiply, divide, and now power (exponentiation).

Key learnings:
- The application uses a state machine in the client for handling calculator input.
- Error handling is implemented for invalid operations and operands.
- The code has TODO comments indicating areas for expansion, such as adding new operators.
- Implementing a new operation requires updates to the backend operations object, client-side switch statement, and adding corresponding tests.

The power functionality is now fully implemented and tested.

## Acknowledgements

A special thanks to the following awesome Hubbers who have contributed in many different ways to this repository. 
[pierluigi](https://github.com/pierluigi), [parroty](https://github.com/yuichielectric), [yuichielectric](https://github.com/yuichielectric), [dchomh](https://github.com/dchomh), [nolecram](https://github.com/nolecram), [rsymo](https://github.com/rsymo), [damovisa](https://github.com/damovisa) and anyone else I've inadvertently missed.

_v1.0 Released June, 2023_
