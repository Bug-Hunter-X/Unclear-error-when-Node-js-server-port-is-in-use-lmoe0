# Node.js Server Port in Use Error

This repository demonstrates a common but easily missed error in Node.js: the lack of clear error messages when a server attempts to bind to an already-occupied port.

## The Problem

The `bug.js` file contains a simple HTTP server.  If you run this server and then attempt to run it again (without stopping the first instance), the second attempt will likely fail silently or with an unclear error message, making it difficult to diagnose the problem.

## The Solution

The `bugSolution.js` file provides an improved version that uses error handling to detect and report the specific error when the port is unavailable. This more clearly communicates the issue to the developer.

## Running the Code

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Open another terminal window and run `node bug.js` again. Observe the output (or lack thereof).
5. Run `node bugSolution.js` and then attempt to run it again. Compare the error handling.
