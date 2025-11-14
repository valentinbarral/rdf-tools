# RDF Validator & Visualizer

Web application to validate and visualize RDF documents. **Works completely in the browser, no server, Node.js or dependency installation required.**

## Features

- RDF code validation in multiple formats:
  - **Turtle/N3**
  - **JSON-LD**
- Triples visualization in table format
- Dynamic graph of relationships between objects
- Option to show/hide full URIs in the graph
- Fullscreen mode for the graph
- **SPARQL queries** on loaded data
- Editor with line numbers
- Descriptive error messages
- Works without server - just open the HTML in your browser

## Usage

Simply open the `index.html` file in your browser:

```bash
# On Linux/Mac
xdg-open index.html
# or simply double-click the file

# On Windows
start index.html
# or simply double-click the file
```

Or drag the `index.html` file to your browser.

**Note:** You need an internet connection the first time to load libraries from CDN. After that, you can use the application offline if you save the libraries locally.

## Supported RDF Formats

### Turtle/N3

```turtle
@prefix ex: <http://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

ex:john a foaf:Person ;
    foaf:name "John Doe" ;
    foaf:knows ex:jane .

ex:jane a foaf:Person ;
    foaf:name "Jane Smith" ;
    foaf:knows ex:john .
```

### JSON-LD

```json
{
  "@context": {
    "ex": "http://example.org/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "name": "foaf:name",
    "knows": "foaf:knows"
  },
  "@graph": [
    {
      "@id": "ex:john",
      "@type": "foaf:Person",
      "name": "John Doe",
      "knows": {"@id": "ex:jane"}
    },
    {
      "@id": "ex:jane",
      "@type": "foaf:Person",
      "name": "Jane Smith",
      "knows": {"@id": "ex:john"}
    }
  ]
}
```

## Files

- `index.html` - Main page (contains everything needed)
- `styles.css` - Application styles
- `app.js` - Application logic

## Functionality

### 1. RDF Validation and Visualization
- Load your RDF document (Turtle/N3 or JSON-LD)
- Click "Verify" or press Ctrl+Enter
- View the triples in a table
- Explore the graph of relationships between entities

### 2. SPARQL Queries
- Once the RDF document is validated, the SPARQL queries section will appear
- Write your SPARQL query in the editor
- Click "Execute Query" or press Ctrl+Enter
- Results will be displayed in a dynamic table

Example SPARQL query:
```sparql
SELECT ?subject ?predicate ?object
WHERE {
  ?subject ?predicate ?object .
}
```

## Technologies

- **N3.js**: To parse RDF in Turtle/N3 format (loaded from CDN)
- **jsonld.js**: To parse RDF in JSON-LD format (loaded from CDN)
- **rdflib.js**: To execute SPARQL queries (loaded from CDN)
- **vis-network**: For graph visualization (loaded from CDN)
- HTML5, CSS3, vanilla JavaScript

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

Copyright (c) Valentín Barral
