// Translation system
const translations = {
    es: {
        'app-title': 'Herramientas RDF',
        'format-label': 'Formato:',
        'rdf-code-label': 'Código RDF:',
        'rdf-placeholder-turtle': 'Pega aquí tu código RDF (formato Turtle/N3)...',
        'rdf-placeholder-jsonld': 'Pega aquí tu código RDF (formato JSON-LD)...',
        'verify-button': 'Verificar',
        'verifying': 'Verificando...',
        'results-title': 'Resultados',
        'valid-status': '✓ Válido',
        'triples-title': 'Tripletas RDF',
        'subject-header': 'Sujeto',
        'predicate-header': 'Predicado',
        'object-header': 'Objeto',
        'graph-title': 'Gráfico de Relaciones',
        'show-full-uris': 'Mostrar URIs completas',
        'fullscreen-enter': 'Ver a pantalla completa',
        'fullscreen-exit': 'Salir de pantalla completa',
        'sparql-title': 'Consultas SPARQL',
        'sparql-description': 'Ejecuta consultas SPARQL sobre los datos cargados',
        'sparql-query-label': 'Consulta SPARQL:',
        'sparql-placeholder': 'Escribe tu consulta SPARQL...',
        'execute-query-button': 'Ejecutar Consulta',
        'executing': 'Ejecutando...',
        'query-results-title': 'Resultados de la Consulta',
        'no-results': 'No se encontraron resultados',
        'error-prefix': 'Error: ',
        'error-empty-rdf': 'Por favor, ingresa código RDF para validar.',
        'error-unsupported-format': 'Formato no soportado',
        'error-syntax': 'Error de sintaxis: ',
        'error-no-triples': 'El documento RDF no contiene tripletas válidas.',
        'error-invalid-json': 'JSON inválido: ',
        'error-jsonld-convert': 'Error al convertir JSON-LD: ',
        'error-jsonld-process': 'Error al procesar JSON-LD: ',
        'error-parse-turtle': 'Error al parsear Turtle: ',
        'error-no-rdf-data': 'No hay datos RDF cargados. Por favor, verifica primero un documento RDF.',
        'error-empty-sparql': 'Por favor, escribe una consulta SPARQL.',
        'error-execute-query': 'Error al ejecutar la consulta: ',
        'error-jsonld-no-triples': 'El documento JSON-LD no contiene tripletas válidas.',
        'license-text': 'Este trabajo está licenciado bajo una <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license" style="color: #667eea; text-decoration: none;">Licencia Creative Commons Atribución 4.0 Internacional</a>.',
        'theme-dark': 'Oscuro',
        'theme-light': 'Claro'
    },
    en: {
        'app-title': 'RDF Tools',
        'format-label': 'Format:',
        'rdf-code-label': 'RDF Code:',
        'rdf-placeholder-turtle': 'Paste your RDF code here (Turtle/N3 format)...',
        'rdf-placeholder-jsonld': 'Paste your RDF code here (JSON-LD format)...',
        'verify-button': 'Verify',
        'verifying': 'Verifying...',
        'results-title': 'Results',
        'valid-status': '✓ Valid',
        'triples-title': 'RDF Triples',
        'subject-header': 'Subject',
        'predicate-header': 'Predicate',
        'object-header': 'Object',
        'graph-title': 'Relationship Graph',
        'show-full-uris': 'Show full URIs',
        'fullscreen-enter': 'View fullscreen',
        'fullscreen-exit': 'Exit fullscreen',
        'sparql-title': 'SPARQL Queries',
        'sparql-description': 'Execute SPARQL queries on loaded data',
        'sparql-query-label': 'SPARQL Query:',
        'sparql-placeholder': 'Write your SPARQL query...',
        'execute-query-button': 'Execute Query',
        'executing': 'Executing...',
        'query-results-title': 'Query Results',
        'no-results': 'No results found',
        'error-prefix': 'Error: ',
        'error-empty-rdf': 'Please enter RDF code to validate.',
        'error-unsupported-format': 'Unsupported format',
        'error-syntax': 'Syntax error: ',
        'error-no-triples': 'The RDF document does not contain valid triples.',
        'error-invalid-json': 'Invalid JSON: ',
        'error-jsonld-convert': 'Error converting JSON-LD: ',
        'error-jsonld-process': 'Error processing JSON-LD: ',
        'error-parse-turtle': 'Error parsing Turtle: ',
        'error-no-rdf-data': 'No RDF data loaded. Please verify an RDF document first.',
        'error-empty-sparql': 'Please write a SPARQL query.',
        'error-execute-query': 'Error executing query: ',
        'error-jsonld-no-triples': 'The JSON-LD document does not contain valid triples.',
        'license-text': 'This work is licensed under a <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license" style="color: #667eea; text-decoration: none;">Creative Commons Attribution 4.0 International License</a>.',
        'theme-dark': 'Dark',
        'theme-light': 'Light'
    },
    gl: {
        'app-title': 'Ferramentas RDF',
        'format-label': 'Formato:',
        'rdf-code-label': 'Código RDF:',
        'rdf-placeholder-turtle': 'Pega aquí o teu código RDF (formato Turtle/N3)...',
        'rdf-placeholder-jsonld': 'Pega aquí o teu código RDF (formato JSON-LD)...',
        'verify-button': 'Verificar',
        'verifying': 'Verificando...',
        'results-title': 'Resultados',
        'valid-status': '✓ Válido',
        'triples-title': 'Tripletas RDF',
        'subject-header': 'Suxeito',
        'predicate-header': 'Predicado',
        'object-header': 'Obxecto',
        'graph-title': 'Gráfico de Relacións',
        'show-full-uris': 'Mostrar URIs completas',
        'fullscreen-enter': 'Ver a pantalla completa',
        'fullscreen-exit': 'Saír de pantalla completa',
        'sparql-title': 'Consultas SPARQL',
        'sparql-description': 'Executa consultas SPARQL sobre os datos cargados',
        'sparql-query-label': 'Consulta SPARQL:',
        'sparql-placeholder': 'Escribe a túa consulta SPARQL...',
        'execute-query-button': 'Executar Consulta',
        'executing': 'Executando...',
        'query-results-title': 'Resultados da Consulta',
        'no-results': 'Non se atoparon resultados',
        'error-prefix': 'Erro: ',
        'error-empty-rdf': 'Por favor, introduce código RDF para validar.',
        'error-unsupported-format': 'Formato non soportado',
        'error-syntax': 'Erro de sintaxe: ',
        'error-no-triples': 'O documento RDF non contén tripletas válidas.',
        'error-invalid-json': 'JSON inválido: ',
        'error-jsonld-convert': 'Erro ao converter JSON-LD: ',
        'error-jsonld-process': 'Erro ao procesar JSON-LD: ',
        'error-parse-turtle': 'Erro ao analizar Turtle: ',
        'error-no-rdf-data': 'Non hai datos RDF cargados. Por favor, verifica primeiro un documento RDF.',
        'error-empty-sparql': 'Por favor, escribe unha consulta SPARQL.',
        'error-execute-query': 'Erro ao executar a consulta: ',
        'error-jsonld-no-triples': 'O documento JSON-LD non contén tripletas válidas.',
        'license-text': 'Este traballo está licenciado baixo unha <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license" style="color: #667eea; text-decoration: none;">Licenza Creative Commons Atribución 4.0 Internacional</a>.',
        'theme-dark': 'Escuro',
        'theme-light': 'Claro'
    }
};

// Current language (default: Spanish)
let currentLanguage = 'es';
// Current format (will be set in DOMContentLoaded)
let currentFormat = 'turtle';
// Current theme (default: light)
let currentTheme = 'light';

// Get translation
function t(key) {
    return translations[currentLanguage][key] || translations['es'][key] || key;
}

// Update all translations in the page
function updateTranslations() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' && element.type === 'button') {
            element.value = t(key);
        } else {
            element.textContent = t(key);
        }
    });
    
    // Update elements with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        element.title = t(key);
    });
    
    // Update elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        // Check if we need to use turtle or jsonld placeholder
        if (key === 'rdf-placeholder-turtle' && currentFormat === 'jsonld') {
            element.placeholder = t('rdf-placeholder-jsonld');
        } else if (key === 'rdf-placeholder-turtle' && currentFormat === 'turtle') {
            element.placeholder = t('rdf-placeholder-turtle');
        } else {
            element.placeholder = t(key);
        }
    });
    
    // Update option elements with data-i18n-option attribute
    document.querySelectorAll('[data-i18n-option]').forEach(element => {
        const key = element.getAttribute('data-i18n-option');
        element.textContent = t(key);
    });
    
    // Update HTML content for license text (contains HTML)
    const licenseElement = document.querySelector('[data-i18n="license-text"]');
    if (licenseElement) {
        licenseElement.innerHTML = t('license-text');
    }
    
    // Update page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = t('app-title');
    }
}

// Esperar a que las librerías se carguen
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');
    
    // Verificar que N3 esté disponible
    if (typeof N3 === 'undefined') {
        console.error('N3.js no está cargado');
        return;
    }
    
    // Verificar que jsonld esté disponible
    if (typeof jsonld === 'undefined') {
        console.error('jsonld.js no está cargado');
        return;
    }
    
    // Verificar que vis-network esté disponible
    if (typeof vis === 'undefined') {
        console.error('vis-network no está cargado');
        return;
    }
    
    // Verificar que rdflib esté disponible
    if (typeof $rdf === 'undefined') {
        console.error('rdflib.js no está cargado');
        return;
    }
    
    console.log('Librerías cargadas correctamente');
    
    // Elementos del DOM
    const rdfInput = document.getElementById('rdf-input');
    const rdfCodePre = document.getElementById('rdf-code-pre');
    const verifyBtn = document.getElementById('verify-btn');
    const errorMessage = document.getElementById('error-message');
    const resultsSection = document.getElementById('results-section');
    const triplesTbody = document.getElementById('triples-tbody');
    const graphContainer = document.getElementById('graph-container');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const graphSection = document.querySelector('.graph-section');
    const triplesFullscreenBtn = document.getElementById('triples-fullscreen-btn');
    const triplesSection = document.querySelector('.triples-section');
    const showPrefixesCheckbox = document.getElementById('show-prefixes');
    const formatSelector = document.getElementById('format-selector');
    const languageSelector = document.getElementById('language-selector');
    const themeSelector = document.getElementById('theme-selector');
    
    // Font size controls
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const fontSizeDisplay = document.getElementById('font-size-display');
    let currentFontSize = 14;
    
    // SPARQL Font size controls
    const increaseSparqlFontBtn = document.getElementById('increase-sparql-font');
    const decreaseSparqlFontBtn = document.getElementById('decrease-sparql-font');
    const sparqlFontSizeDisplay = document.getElementById('sparql-font-size-display');
    let currentSparqlFontSize = 14;
    
    // Elementos del DOM para SPARQL
    const sparqlSection = document.getElementById('sparql-section');
    const sparqlInput = document.getElementById('sparql-input');
    const sparqlCodePre = document.getElementById('sparql-code-pre');
    const executeSparqlBtn = document.getElementById('execute-sparql-btn');
    const sparqlError = document.getElementById('sparql-error');
    const sparqlResults = document.getElementById('sparql-results');
    const sparqlResultsThead = document.getElementById('sparql-results-thead');
    const sparqlResultsTbody = document.getElementById('sparql-results-tbody');
    
    // Variable para el gráfico
    let network = null;
    let isFullscreen = false;
    let isTableFullscreen = false;
    let currentQuads = null; // Guardar los quads actuales para poder recrear el gráfico
    let showFullPrefixes = true; // Por defecto mostrar URIs completas
    currentFormat = 'turtle'; // Formato seleccionado (actualizar variable global)
    
    // Initialize translations
    updateTranslations();
    
    // Set initial language attribute
    document.documentElement.lang = currentLanguage;
    
    // Initialize theme from localStorage (default is dark)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    currentTheme = savedTheme;
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    if (themeSelector) {
        themeSelector.value = currentTheme;
    }
    
    // Language selector event listener
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            updateTranslations();
            // Update document language attribute
            document.documentElement.lang = currentLanguage;
        });
    }
    
    // Theme selector functionality
    function changeTheme(theme) {
        currentTheme = theme;
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', currentTheme);
    }
    
    // Theme selector event listener
    if (themeSelector) {
        themeSelector.addEventListener('change', (e) => {
            changeTheme(e.target.value);
        });
    }
    
    // Variables para SPARQL
    let rdfStore = null; // Store de rdflib para consultas SPARQL
    let datatypeMap = new Map(); // Mapa para almacenar datatypes originales: clave = "sujeto|predicado|valor", valor = datatype
    
    // Save cursor position
    function saveCursorPosition(element) {
        const selection = window.getSelection();
        if (selection.rangeCount === 0) return null;
        
        const range = selection.getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        const caretOffset = preCaretRange.toString().length;
        
        return caretOffset;
    }
    
    // Restore cursor position
    function restoreCursorPosition(element, caretOffset) {
        if (caretOffset === null) return;
        
        const range = document.createRange();
        const selection = window.getSelection();
        
        let charCount = 0;
        let nodeStack = [element];
        let node;
        let foundStart = false;
        
        while (!foundStart && (node = nodeStack.pop())) {
            if (node.nodeType === Node.TEXT_NODE) {
                const nextCharCount = charCount + node.length;
                if (caretOffset <= nextCharCount) {
                    range.setStart(node, caretOffset - charCount);
                    range.setEnd(node, caretOffset - charCount);
                    foundStart = true;
                    break;
                }
                charCount = nextCharCount;
            } else {
                let i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }
        
        if (foundStart) {
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    
    // Highlight code with Prism
    function highlightCode() {
        if (rdfInput && rdfCodePre) {
            // Save cursor position before highlighting
            const cursorPosition = saveCursorPosition(rdfInput);
            
            // Apply Prism highlighting
            Prism.highlightElement(rdfInput);
            
            // Restore cursor position after highlighting
            restoreCursorPosition(rdfInput, cursorPosition);
        }
    }
    
    // Get text content (unescaping HTML entities)
    function getTextContent() {
        if (!rdfInput) return '';
        const text = rdfInput.textContent || rdfInput.innerText || '';
        return text;
    }
    
    // Initial highlight
    setTimeout(highlightCode, 100);
    
    // Update highlighting on input
    rdfInput.addEventListener('input', () => {
        setTimeout(highlightCode, 0);
    });
    
    // --- Font Size Logic ---
    
    function updateFontSize() {
        const sizeStr = `${currentFontSize}px`;
        
        if (rdfCodePre) {
            rdfCodePre.style.fontSize = sizeStr;
        }
        
        if (fontSizeDisplay) {
            fontSizeDisplay.textContent = sizeStr;
        }
    }
    
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', () => {
            if (currentFontSize < 30) {
                currentFontSize += 1;
                updateFontSize();
            }
        });
    }
    
    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', () => {
            if (currentFontSize > 10) {
                currentFontSize -= 1;
                updateFontSize();
            }
        });
    }
    
    // --- SPARQL Font Size Logic ---
    
    function updateSparqlFontSize() {
        const sizeStr = `${currentSparqlFontSize}px`;
        
        if (sparqlCodePre) {
            sparqlCodePre.style.fontSize = sizeStr;
        }
        
        if (sparqlFontSizeDisplay) {
            sparqlFontSizeDisplay.textContent = sizeStr;
        }
    }
    
    if (increaseSparqlFontBtn) {
        increaseSparqlFontBtn.addEventListener('click', () => {
            if (currentSparqlFontSize < 30) {
                currentSparqlFontSize += 1;
                updateSparqlFontSize();
            }
        });
    }
    
    if (decreaseSparqlFontBtn) {
        decreaseSparqlFontBtn.addEventListener('click', () => {
            if (currentSparqlFontSize > 10) {
                currentSparqlFontSize -= 1;
                updateSparqlFontSize();
            }
        });
    }
    
    // --- SPARQL Syntax Highlighting ---
    
    // Highlight SPARQL code with Prism
    function highlightSparqlCode() {
        if (sparqlInput && sparqlCodePre) {
            // Save cursor position before highlighting
            const cursorPosition = saveCursorPosition(sparqlInput);
            
            // Apply Prism highlighting
            Prism.highlightElement(sparqlInput);
            
            // Restore cursor position after highlighting
            restoreCursorPosition(sparqlInput, cursorPosition);
        }
    }
    
    // Get SPARQL text content (unescaping HTML entities)
    function getSparqlTextContent() {
        if (!sparqlInput) return '';
        const text = sparqlInput.textContent || sparqlInput.innerText || '';
        return text;
    }
    
    // Initial highlight for SPARQL
    setTimeout(highlightSparqlCode, 100);
    
    // Update highlighting on input for SPARQL
    if (sparqlInput) {
        sparqlInput.addEventListener('input', () => {
            setTimeout(highlightSparqlCode, 0);
        });
    }
    
    // Función para formatear términos RDF
    function formatTerm(term) {
        if (term.termType === 'NamedNode') {
            return term.value;
        } else if (term.termType === 'Literal') {
            const value = term.value;
            const datatype = term.datatype?.value;
            const language = term.language;
            
            if (language) {
                return `"${value}"@${language}`;
            } else if (datatype && datatype !== 'http://www.w3.org/2001/XMLSchema#string') {
                return `"${value}"^^${datatype}`;
            } else {
                return `"${value}"`;
            }
        } else if (term.termType === 'BlankNode') {
            return term.value;
        }
        return term.toString();
    }
    
    // Función para formatear términos de forma corta (sin prefijos completos)
    function formatTermShort(term) {
        if (term.termType === 'NamedNode') {
            const uri = term.value;
            // Intentar extraer la última parte después de # o /
            const hashIndex = uri.lastIndexOf('#');
            const slashIndex = uri.lastIndexOf('/');
            const splitIndex = Math.max(hashIndex, slashIndex);
            
            if (splitIndex !== -1 && splitIndex < uri.length - 1) {
                return uri.substring(splitIndex + 1);
            }
            return uri;
        } else if (term.termType === 'Literal') {
            const value = term.value;
            const language = term.language;
            
            if (language) {
                return `"${value}"@${language}`;
            } else {
                return `"${value}"`;
            }
        } else if (term.termType === 'BlankNode') {
            return term.value;
        }
        return term.toString();
    }
    
    // Función para formatear términos según la preferencia del usuario
    function formatTermForDisplay(term) {
        return showFullPrefixes ? formatTerm(term) : formatTermShort(term);
    }
    
    // Función para crear la tabla de tripletas
    function createTriplesTable(quads) {
        triplesTbody.innerHTML = '';
        
        quads.forEach(quad => {
            const row = document.createElement('tr');
            
            const subjectCell = document.createElement('td');
            subjectCell.textContent = formatTerm(quad.subject);
            row.appendChild(subjectCell);
            
            const predicateCell = document.createElement('td');
            predicateCell.textContent = formatTerm(quad.predicate);
            row.appendChild(predicateCell);
            
            const objectCell = document.createElement('td');
            objectCell.textContent = formatTerm(quad.object);
            row.appendChild(objectCell);
            
            triplesTbody.appendChild(row);
        });
    }
    
    // Función para crear el gráfico de relaciones
    function createGraph(quads) {
        // Guardar los quads para poder recrear el gráfico si es necesario
        currentQuads = quads;
        
        const nodes = new Map();
        const edges = [];
        
        // Recopilar nodos y aristas
        quads.forEach((quad) => {
            const subject = quad.subject;
            const predicate = quad.predicate;
            const object = quad.object;
            
            // Agregar sujeto como nodo
            const subjectId = subject.termType === 'BlankNode' 
                ? subject.value 
                : subject.value;
            if (!nodes.has(subjectId)) {
                const subjectLabel = formatTermForDisplay(subject);
                nodes.set(subjectId, {
                    id: subjectId,
                    label: subjectLabel.substring(0, 50) + (subjectLabel.length > 50 ? '...' : ''),
                    title: formatTerm(subject), // Tooltip con URI completa
                    color: subject.termType === 'BlankNode' ? '#ff9800' : '#2196F3',
                    shape: 'box'
                });
            }
            
            // Agregar objeto como nodo
            const objectId = object.termType === 'BlankNode' 
                ? object.value 
                : object.value;
            if (!nodes.has(objectId)) {
                const objectLabel = formatTermForDisplay(object);
                nodes.set(objectId, {
                    id: objectId,
                    label: objectLabel.substring(0, 50) + (objectLabel.length > 50 ? '...' : ''),
                    title: formatTerm(object), // Tooltip con URI completa
                    color: object.termType === 'BlankNode' ? '#ff9800' : 
                           object.termType === 'Literal' ? '#4CAF50' : '#2196F3',
                    shape: object.termType === 'Literal' ? 'ellipse' : 'box'
                });
            }
            
            // Agregar arista
            const predicateLabel = formatTermForDisplay(predicate);
            edges.push({
                from: subjectId,
                to: objectId,
                label: predicateLabel.substring(0, 30) + (predicateLabel.length > 30 ? '...' : ''),
                title: formatTerm(predicate), // Tooltip con URI completa
                arrows: 'to',
                color: { color: '#666' }
            });
        });
        
        // Configuración del gráfico
        const data = {
            nodes: Array.from(nodes.values()),
            edges: edges
        };
        
        const options = {
            nodes: {
                font: {
                    size: 12,
                    face: 'Arial'
                },
                borderWidth: 2,
                shadow: true
            },
            edges: {
                font: {
                    size: 10,
                    align: 'middle'
                },
                smooth: {
                    type: 'continuous',
                    roundness: 0.5
                },
                arrows: {
                    to: {
                        enabled: true,
                        scaleFactor: 0.8
                    }
                }
            },
            physics: {
                enabled: true,
                stabilization: {
                    enabled: true,
                    iterations: 200
                },
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.1,
                    springLength: 200,
                    springConstant: 0.04
                }
            },
            interaction: {
                dragNodes: true,
                dragView: true,
                zoomView: true
            }
        };
        
        // Destruir gráfico anterior si existe
        if (network) {
            network.destroy();
        }
        
        // Crear nuevo gráfico
        network = new vis.Network(graphContainer, data, options);
        
        // Redimensionar el gráfico después de crearlo
        setTimeout(() => {
            if (network) {
                network.fit();
            }
        }, 100);
    }
    
    // Función para redimensionar el gráfico
    function resizeGraph() {
        if (network) {
            setTimeout(() => {
                network.fit();
            }, 100);
        }
    }
    
    // Función para entrar/salir de pantalla completa
    function toggleFullscreen() {
        if (!isFullscreen) {
            // Entrar en pantalla completa
            graphSection.classList.add('fullscreen');
            isFullscreen = true;
            fullscreenBtn.innerHTML = '<span class="fullscreen-icon">✕</span>';
            fullscreenBtn.title = t('fullscreen-exit');
            
            // Esperar a que el DOM se actualice y luego redimensionar
            setTimeout(() => {
                if (network && graphContainer) {
                    const width = graphContainer.offsetWidth;
                    const height = graphContainer.offsetHeight;
                    network.setSize(width, height);
                    network.fit();
                }
            }, 200);
        } else {
            // Salir de pantalla completa
            isFullscreen = false;
            fullscreenBtn.innerHTML = '<span class="fullscreen-icon">⛶</span>';
            fullscreenBtn.title = t('fullscreen-enter');
            
            // Remover la clase de pantalla completa
            graphSection.classList.remove('fullscreen');
            
            // Limpiar completamente el contenedor del gráfico
            if (graphContainer) {
                // Destruir el gráfico actual
                if (network) {
                    network.destroy();
                    network = null;
                }
                
                // Limpiar el contenedor completamente
                graphContainer.innerHTML = '';
                graphContainer.removeAttribute('style');
            }
            
            if (graphSection) {
                graphSection.removeAttribute('style');
            }
            
            // Esperar a que el DOM se actualice completamente
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // Forzar reflow para que el CSS se aplique correctamente
                    void graphSection.offsetHeight;
                    void graphContainer.offsetHeight;
                    
                    // Esperar a que el layout se estabilice y recrear el gráfico
                    setTimeout(() => {
                        if (currentQuads && graphContainer) {
                            // Recrear el gráfico desde cero con los datos guardados
                            createGraph(currentQuads);
                        }
                    }, 300);
                });
            });
        }
    }
    
    // Función para entrar/salir de pantalla completa de la tabla
    function toggleTableFullscreen() {
        if (!isTableFullscreen) {
            // Entrar en pantalla completa
            triplesSection.classList.add('fullscreen');
            isTableFullscreen = true;
            triplesFullscreenBtn.innerHTML = '<span class="fullscreen-icon">✕</span>';
            triplesFullscreenBtn.title = t('fullscreen-exit');
        } else {
            // Salir de pantalla completa
            triplesSection.classList.remove('fullscreen');
            isTableFullscreen = false;
            triplesFullscreenBtn.innerHTML = '<span class="fullscreen-icon">⛶</span>';
            triplesFullscreenBtn.title = t('fullscreen-enter');
        }
    }
    
    // Event listener para el botón de pantalla completa del gráfico
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    
    // Event listener para el botón de pantalla completa de la tabla
    if (triplesFullscreenBtn) {
        triplesFullscreenBtn.addEventListener('click', toggleTableFullscreen);
    }
    
    // Permitir salir con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (isFullscreen) {
                toggleFullscreen();
            }
            if (isTableFullscreen) {
                toggleTableFullscreen();
            }
        }
    });
    
    // Event listener para el checkbox de mostrar/ocultar prefijos
    if (showPrefixesCheckbox) {
        showPrefixesCheckbox.addEventListener('change', (e) => {
            showFullPrefixes = e.target.checked;
            
            // Recrear el gráfico si hay datos disponibles
            if (currentQuads) {
                createGraph(currentQuads);
            }
        });
    }
    
    // Función para parsear Turtle/N3
    function parseTurtle(rdfText) {
        return new Promise((resolve, reject) => {
            const quads = [];
            let hasError = false;
            
            try {
                const parser = new N3.Parser();
                
                parser.parse(rdfText, (error, quad, prefixes) => {
                    if (error) {
                        if (!hasError) {
                            hasError = true;
                            reject(new Error(t('error-syntax') + error.message));
                        }
                    } else if (quad) {
                        quads.push(quad);
                    } else {
                        // Fin del parseo (quad es null)
                        if (!hasError) {
                            if (quads.length === 0) {
                                reject(new Error(t('error-no-triples')));
                            } else {
                                resolve(quads);
                            }
                        }
                    }
                });
            } catch (error) {
                reject(new Error(t('error-parse-turtle') + error.message));
            }
        });
    }
    
    // Función para parsear JSON-LD
    async function parseJsonLD(rdfText) {
        try {
            // Parsear el JSON
            let jsonDoc;
            try {
                jsonDoc = JSON.parse(rdfText);
            } catch (error) {
                throw new Error(t('error-invalid-json') + error.message);
            }
            
            // Convertir JSON-LD a quads usando jsonld.js
            const nquads = await jsonld.toRDF(jsonDoc, {format: 'application/n-quads'});
            
            // Parsear los N-Quads resultantes con N3.js
            return new Promise((resolve, reject) => {
                const quads = [];
                const parser = new N3.Parser({format: 'N-Quads'});
                
                parser.parse(nquads, (error, quad, prefixes) => {
                    if (error) {
                        reject(new Error(t('error-jsonld-convert') + error.message));
                    } else if (quad) {
                        quads.push(quad);
                    } else {
                        if (quads.length === 0) {
                            reject(new Error(t('error-jsonld-no-triples')));
                        } else {
                            resolve(quads);
                        }
                    }
                });
            });
        } catch (error) {
            throw new Error(t('error-jsonld-process') + error.message);
        }
    }
    
    // Función para validar y procesar RDF
    async function validateRDF(rdfText) {
        if (!rdfText.trim()) {
            throw new Error(t('error-empty-rdf'));
        }
        
        // Usar el parser correcto según el formato seleccionado
        if (currentFormat === 'turtle') {
            return await parseTurtle(rdfText);
        } else if (currentFormat === 'jsonld') {
            return await parseJsonLD(rdfText);
        } else {
            throw new Error(t('error-unsupported-format'));
        }
    }
    
    // Función principal de verificación
    async function handleVerify() {
        const rdfText = getTextContent().trim();
        
        // Ocultar resultados anteriores
        resultsSection.classList.add('hidden');
        errorMessage.classList.add('hidden');
        sparqlSection.classList.add('hidden');
        
        // Mostrar indicador de carga
        verifyBtn.disabled = true;
        verifyBtn.textContent = t('verifying');
        
        try {
            // Validar RDF
            const quads = await validateRDF(rdfText);
            
            // Mostrar resultados
            createTriplesTable(quads);
            createGraph(quads);
            resultsSection.classList.remove('hidden');
            
            // Cargar datos en el store para SPARQL
            loadQuadsIntoStore(quads);
            
            // Mostrar sección SPARQL
            sparqlSection.classList.remove('hidden');
            
        } catch (error) {
            // Mostrar error
            errorMessage.textContent = t('error-prefix') + error.message;
            errorMessage.classList.remove('hidden');
            console.error('Error al validar RDF:', error);
        } finally {
            // Restaurar botón
            verifyBtn.disabled = false;
            verifyBtn.textContent = t('verify-button');
        }
    }
    
    // Helper to escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Ejemplos para cada formato
    const examples = {
        turtle: `@prefix ex: <http://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

ex:john a foaf:Person ;
    foaf:name "John Doe" ;
    foaf:knows ex:jane .

ex:jane a foaf:Person ;
    foaf:name "Jane Smith" ;
    foaf:knows ex:john .`,
        jsonld: `{
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
}`
    };
    
    // Event listener para cambiar formato
    if (formatSelector) {
        formatSelector.addEventListener('change', (e) => {
            currentFormat = e.target.value;
            
            // Cambiar placeholder y ejemplo
            if (currentFormat === 'turtle') {
                rdfInput.innerHTML = escapeHtml(examples.turtle);
                rdfInput.className = 'language-turtle';
            } else if (currentFormat === 'jsonld') {
                rdfInput.innerHTML = escapeHtml(examples.jsonld);
                rdfInput.className = 'language-json';
            }
            
            // Re-highlight
            setTimeout(highlightCode, 10);
            
            // Ocultar resultados anteriores
            resultsSection.classList.add('hidden');
            errorMessage.classList.add('hidden');
            sparqlSection.classList.add('hidden');
        });
    }
    
    // ========== FUNCIONES SPARQL ==========
    
    // Función para cargar quads en el store de rdflib
    function loadQuadsIntoStore(quads) {
        // Crear un nuevo store
        rdfStore = $rdf.graph();
        // Limpiar el mapa de datatypes
        datatypeMap.clear();
        
        let gYearCount = 0;
        
        // Convertir cada quad de N3 a rdflib
        quads.forEach(quad => {
            try {
                // Convertir sujeto
                let subject;
                if (quad.subject.termType === 'NamedNode') {
                    subject = $rdf.sym(quad.subject.value);
                } else if (quad.subject.termType === 'BlankNode') {
                    subject = $rdf.blankNode(quad.subject.value);
                }
                
                // Convertir predicado
                const predicate = $rdf.sym(quad.predicate.value);
                
                // Convertir objeto
                let object;
                if (quad.object.termType === 'NamedNode') {
                    object = $rdf.sym(quad.object.value);
                } else if (quad.object.termType === 'BlankNode') {
                    object = $rdf.blankNode(quad.object.value);
                } else if (quad.object.termType === 'Literal') {
                    // Guardar el datatype original en el mapa
                    if (quad.object.datatype && quad.object.datatype.value) {
                        const subjectValue = quad.subject.termType === 'NamedNode' ? quad.subject.value : quad.subject.value;
                        const predicateValue = quad.predicate.value;
                        const objectValue = quad.object.value;
                        const mapKey = `${subjectValue}|${predicateValue}|${objectValue}`;
                        datatypeMap.set(mapKey, quad.object.datatype.value);
                        
                        if (quad.object.datatype.value.includes('gYear')) {
                            gYearCount++;
                            console.log('Quad con gYear encontrado:');
                            console.log('  - Sujeto:', quad.subject.value);
                            console.log('  - Predicado:', quad.predicate.value);
                            console.log('  - Valor:', quad.object.value);
                            console.log('  - Datatype:', quad.object.datatype.value);
                            console.log('  - MapKey:', mapKey);
                        }
                    }
                    
                    if (quad.object.language) {
                        object = $rdf.literal(quad.object.value, quad.object.language);
                    } else if (quad.object.datatype && quad.object.datatype.value !== 'http://www.w3.org/2001/XMLSchema#string') {
                        object = $rdf.literal(quad.object.value, undefined, $rdf.sym(quad.object.datatype.value));
                    } else {
                        object = $rdf.literal(quad.object.value);
                    }
                }
                
                // Añadir el triple al store
                rdfStore.add(subject, predicate, object);
            } catch (error) {
                console.error('Error al convertir quad:', error, quad);
            }
        });
        
        console.log('Store cargado con', rdfStore.statements.length, 'triples');
        console.log('Literales con gYear encontrados:', gYearCount);
        console.log('Mapa de datatypes creado con', datatypeMap.size, 'entradas');
        
        // Verificar algunos literales en el store para ver si tienen el datatype correcto
        const sampleStatements = rdfStore.statements.slice(0, 5);
        sampleStatements.forEach((stmt, idx) => {
            if (stmt.object && stmt.object.termType === 'Literal') {
                console.log(`Statement ${idx}:`, {
                    subject: stmt.subject.value,
                    predicate: stmt.predicate.value,
                    object: stmt.object.value,
                    datatype: stmt.object.datatype ? (stmt.object.datatype.value || stmt.object.datatype.uri || stmt.object.datatype) : 'sin datatype'
                });
            }
        });
    }
    
    // Función para aplicar FILTERs manualmente cuando rdflib no los procesa correctamente
    function applyManualFilters(bindings, queryString) {
        // Detectar FILTERs en la consulta (manejando paréntesis anidados con REGEX)
        const filterPattern = /FILTER\s*\(\s*(.+?)\s*\)\s*(?=\}|FILTER|$)/gi;
        const filters = [];
        let match;
        
        // Para manejar paréntesis anidados en REGEX, necesitamos un enfoque diferente
        let tempQuery = queryString;
        const filterMatches = [];
        
        // Buscar todos los FILTER de manera más robusta
        let startIdx = 0;
        while (true) {
            const filterIdx = tempQuery.indexOf('FILTER', startIdx);
            if (filterIdx === -1) break;
            
            // Encontrar el paréntesis de apertura
            const openParenIdx = tempQuery.indexOf('(', filterIdx);
            if (openParenIdx === -1) break;
            
            // Contar paréntesis para encontrar el cierre correcto
            let parenCount = 1;
            let closeParenIdx = openParenIdx + 1;
            
            while (closeParenIdx < tempQuery.length && parenCount > 0) {
                if (tempQuery[closeParenIdx] === '(') parenCount++;
                else if (tempQuery[closeParenIdx] === ')') parenCount--;
                closeParenIdx++;
            }
            
            if (parenCount === 0) {
                const filterContent = tempQuery.substring(openParenIdx + 1, closeParenIdx - 1).trim();
                filters.push(filterContent);
            }
            
            startIdx = closeParenIdx;
        }
        
        if (filters.length === 0) {
            return bindings;
        }
        
        console.log('FILTERs detectados:', filters);
        
        // Aplicar cada FILTER
        let filteredBindings = bindings;
        
        filters.forEach(filterExpr => {
            console.log('Aplicando FILTER:', filterExpr);
            
            // Detectar REGEX: REGEX(?variable, "pattern", "flags")
            const regexPattern = /REGEX\s*\(\s*(\?\w+)\s*,\s*"([^"]+)"\s*(?:,\s*"([^"]*)"\s*)?\)/i;
            const regexMatch = filterExpr.match(regexPattern);
            
            if (regexMatch) {
                const varName = regexMatch[1].substring(1); // Quitar el ?
                const pattern = regexMatch[2];
                const flags = regexMatch[3] || '';
                
                console.log(`FILTER REGEX detectado: REGEX(?${varName}, "${pattern}", "${flags}")`);
                
                try {
                    const regex = new RegExp(pattern, flags);
                    
                    filteredBindings = filteredBindings.filter(binding => {
                        const varValue = binding[varName] || binding['?' + varName];
                        
                        if (!varValue) {
                            return false;
                        }
                        
                        // Obtener el valor como string
                        let stringValue = '';
                        if (varValue.termType === 'Literal' || varValue.termType === 'literal') {
                            stringValue = varValue.value;
                        } else if (varValue.termType === 'NamedNode' || varValue.termType === 'namedNode') {
                            stringValue = varValue.value || varValue.uri;
                        } else if (varValue.value) {
                            stringValue = varValue.value;
                        } else {
                            stringValue = varValue.toString();
                        }
                        
                        const matches = regex.test(stringValue);
                        console.log(`  Testing REGEX "${pattern}" con flags "${flags}" contra "${stringValue}": ${matches}`);
                        return matches;
                    });
                    
                    console.log(`FILTER REGEX aplicado: ${bindings.length} -> ${filteredBindings.length} resultados`);
                    return;
                } catch (error) {
                    console.error('Error al crear expresión regular:', error);
                }
            }
            
            // Detectar funciones de conversión de tipo: xsd:date(?var) > "valor"^^xsd:date
            // Patrón: xsd:tipo(?variable) operador "valor"^^xsd:tipo
            const typeFunctionPattern = /xsd:(\w+)\s*\(\s*(\?\w+)\s*\)\s*([<>=!]+)\s*"([^"]+)"\s*\^\^\s*xsd:(\w+)/i;
            const typeFunctionMatch = filterExpr.match(typeFunctionPattern);
            
            if (typeFunctionMatch) {
                const functionType = typeFunctionMatch[1]; // Ej: "date", "dateTime", "integer"
                const varName = typeFunctionMatch[2].substring(1); // Quitar el ?
                const operator = typeFunctionMatch[3];
                const compareValue = typeFunctionMatch[4];
                const compareType = typeFunctionMatch[5];
                
                console.log(`FILTER con función de tipo detectado: xsd:${functionType}(?${varName}) ${operator} "${compareValue}"^^xsd:${compareType}`);
                
                filteredBindings = filteredBindings.filter(binding => {
                    const varValue = binding[varName] || binding['?' + varName];
                    
                    if (!varValue || (varValue.termType !== 'Literal' && varValue.termType !== 'literal')) {
                        console.log(`  Valor no es literal o no existe: ${varName}`);
                        return false;
                    }
                    
                    const literalValue = varValue.value;
                    
                    console.log(`  Comparando fecha/valor: ${literalValue} ${operator} ${compareValue}`);
                    
                    // Determinar el tipo de comparación según el tipo de función
                    let comparison = 0;
                    
                    if (functionType === 'date' || functionType === 'dateTime' || compareType === 'date' || compareType === 'dateTime') {
                        // Comparación de fechas
                        const dateA = new Date(literalValue);
                        const dateB = new Date(compareValue);
                        
                        if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
                            console.log(`  Fechas inválidas: ${literalValue} o ${compareValue}`);
                            return false;
                        }
                        
                        comparison = dateA.getTime() - dateB.getTime();
                        console.log(`  Comparación de fechas: ${dateA.toISOString()} vs ${dateB.toISOString()} = ${comparison}`);
                    } else {
                        // Comparación numérica
                        const numA = parseFloat(literalValue);
                        const numB = parseFloat(compareValue);
                        
                        if (isNaN(numA) || isNaN(numB)) {
                            console.log(`  Valores no numéricos: ${literalValue} o ${compareValue}`);
                            return false;
                        }
                        
                        comparison = numA - numB;
                        console.log(`  Comparación numérica: ${numA} vs ${numB} = ${comparison}`);
                    }
                    
                    // Aplicar el operador
                    let result = false;
                    switch (operator) {
                        case '<':
                            result = comparison < 0;
                            break;
                        case '<=':
                            result = comparison <= 0;
                            break;
                        case '>':
                            result = comparison > 0;
                            break;
                        case '>=':
                            result = comparison >= 0;
                            break;
                        case '=':
                        case '==':
                            result = comparison === 0;
                            break;
                        case '!=':
                        case '<>':
                            result = comparison !== 0;
                            break;
                        default:
                            result = true;
                    }
                    
                    console.log(`  Resultado de comparación con operador ${operator}: ${result}`);
                    return result;
                });
                
                console.log(`FILTER con función de tipo aplicado: ${bindings.length} -> ${filteredBindings.length} resultados`);
                return;
            }
            
            // Detectar comparaciones con tipos específicos, ej: ?anio < "1600"^^xsd:gYear
            // El patrón debe capturar: variable, operador, valor, tipo
            const typedComparisonPattern = /(\?\w+)\s*([<>=!]+)\s*"([^"]+)"\s*\^\^\s*xsd:(\w+)/i;
            const typedMatch = filterExpr.match(typedComparisonPattern);
            
            if (typedMatch) {
                const varName = typedMatch[1].substring(1); // Quitar el ?
                const operator = typedMatch[2];
                const compareValue = typedMatch[3];
                const compareType = typedMatch[4];
                
                console.log(`FILTER tipado detectado: ${varName} ${operator} "${compareValue}"^^xsd:${compareType}`);
                
                // Buscar el datatype correcto para la variable en el mapa
                filteredBindings = filteredBindings.filter(binding => {
                    const varValue = binding[varName] || binding['?' + varName];
                    
                    if (!varValue || varValue.termType !== 'Literal') {
                        return false;
                    }
                    
                    const literalValue = varValue.value;
                    const literalDatatype = getDatatypeFromLiteral(varValue);
                    
                    console.log(`  Comparando: ${literalValue} (${literalDatatype}) ${operator} ${compareValue} (xsd:${compareType})`);
                    
                    // Verificar si el datatype coincide (puede ser la URI completa o solo el nombre)
                    const datatypeMatches = literalDatatype && (
                        literalDatatype.includes(compareType) || 
                        literalDatatype.endsWith(compareType) ||
                        literalDatatype === `http://www.w3.org/2001/XMLSchema#${compareType}`
                    );
                    
                    if (datatypeMatches) {
                        // Comparar valores numéricos o de fecha
                        const numValue = parseInt(literalValue);
                        const numCompare = parseInt(compareValue);
                        
                        if (!isNaN(numValue) && !isNaN(numCompare)) {
                            let comparisonResult = false;
                            switch (operator) {
                                case '<':
                                    comparisonResult = numValue < numCompare;
                                    break;
                                case '<=':
                                    comparisonResult = numValue <= numCompare;
                                    break;
                                case '>':
                                    comparisonResult = numValue > numCompare;
                                    break;
                                case '>=':
                                    comparisonResult = numValue >= numCompare;
                                    break;
                                case '=':
                                case '==':
                                    comparisonResult = numValue === numCompare;
                                    break;
                                case '!=':
                                case '<>':
                                    comparisonResult = numValue !== numCompare;
                                    break;
                                default:
                                    comparisonResult = true;
                            }
                            console.log(`  Resultado de comparación: ${comparisonResult}`);
                            return comparisonResult;
                        } else {
                            console.log(`  No se pueden comparar como números: ${literalValue} vs ${compareValue}`);
                        }
                    } else {
                        console.log(`  Datatype no coincide: ${literalDatatype} vs xsd:${compareType}`);
                    }
                    
                    return false; // Si no podemos comparar o no coincide el tipo, excluir el resultado
                });
            }
        });
        
        console.log(`FILTERs aplicados: ${bindings.length} -> ${filteredBindings.length} resultados`);
        return filteredBindings;
    }
    
    // Función para extraer información sobre agregaciones y GROUP BY
    function extractAggregationInfo(queryString) {
        const info = {
            hasAggregation: false,
            aggregations: [],
            groupByVars: [],
            selectVars: []
        };
        
        // Detectar funciones de agregación: COUNT, SUM, AVG, MIN, MAX
        const aggPattern = /(COUNT|SUM|AVG|MIN|MAX)\s*\(\s*(\?\w+)\s*\)\s+AS\s+(\?\w+)/gi;
        let match;
        while ((match = aggPattern.exec(queryString)) !== null) {
            info.hasAggregation = true;
            info.aggregations.push({
                function: match[1].toUpperCase(),
                variable: match[2],
                alias: match[3]
            });
        }
        
        // Extraer variables del GROUP BY
        const groupByMatch = queryString.match(/GROUP\s+BY\s+([\s\S]+?)(?:\s+ORDER\s+BY|\s*$)/i);
        if (groupByMatch) {
            const groupByClause = groupByMatch[1].trim();
            const groupVars = groupByClause.split(/\s+/).filter(v => v.startsWith('?'));
            info.groupByVars = groupVars;
        }
        
        // Extraer variables simples del SELECT (no agregaciones)
        const selectMatch = queryString.match(/SELECT\s+(?:DISTINCT\s+)?([\s\S]+?)\s+WHERE/i);
        if (selectMatch) {
            const selectClause = selectMatch[1].trim();
            const parts = selectClause.split(',').map(p => p.trim());
            
            parts.forEach(part => {
                // Si no es una agregación, es una variable simple
                if (!/(COUNT|SUM|AVG|MIN|MAX)\s*\(/i.test(part)) {
                    const varMatch = part.match(/(\?\w+)/);
                    if (varMatch) {
                        info.selectVars.push(varMatch[1]);
                    }
                }
            });
        }
        
        console.log('Información de agregación:', info);
        return info;
    }
    
    // Función para calcular agregaciones manualmente
    function applyAggregations(bindings, aggInfo) {
        if (!bindings || bindings.length === 0 || !aggInfo.hasAggregation) {
            return bindings;
        }
        
        // Agrupar por las variables del GROUP BY
        const groups = new Map();
        
        bindings.forEach(binding => {
            // Crear clave de grupo basada en las variables del GROUP BY
            const groupKey = aggInfo.groupByVars.map(v => {
                const varName = v.startsWith('?') ? v.substring(1) : v;
                const value = binding[varName] || binding['?' + varName];
                if (!value) return 'null';
                // Crear representación única
                if (value.termType === 'Literal' || value.termType === 'literal') {
                    return `L:${value.value}`;
                } else if (value.termType === 'NamedNode' || value.termType === 'namedNode') {
                    return `N:${value.value || value.uri}`;
                } else if (value.termType === 'BlankNode' || value.termType === 'blankNode') {
                    return `B:${value.value}`;
                }
                return String(value);
            }).join('|');
            
            if (!groups.has(groupKey)) {
                groups.set(groupKey, {
                    groupBinding: binding, // Mantener un binding de referencia del grupo
                    values: [] // Valores para calcular agregaciones
                });
            }
            
            // Recopilar valores para cada función de agregación
            aggInfo.aggregations.forEach(agg => {
                const varName = agg.variable.startsWith('?') ? agg.variable.substring(1) : agg.variable;
                const value = binding[varName] || binding['?' + varName];
                if (value) {
                    groups.get(groupKey).values.push({
                        function: agg.function,
                        variable: agg.variable,
                        value: value
                    });
                }
            });
        });
        
        // Calcular agregaciones para cada grupo
        const results = [];
        groups.forEach((group, groupKey) => {
            const resultBinding = {};
            
            // Copiar valores de las variables del GROUP BY
            aggInfo.groupByVars.forEach(v => {
                const varName = v.startsWith('?') ? v.substring(1) : v;
                const value = group.groupBinding[varName] || group.groupBinding['?' + varName];
                if (value) {
                    resultBinding[varName] = value;
                    resultBinding['?' + varName] = value;
                }
            });
            
            // Calcular cada agregación
            aggInfo.aggregations.forEach(agg => {
                const values = group.values.filter(v => v.variable === agg.variable);
                let aggValue = null;
                
                switch (agg.function) {
                    case 'COUNT':
                        aggValue = values.length;
                        break;
                    case 'SUM':
                        aggValue = values.reduce((sum, v) => {
                            const num = parseFloat(v.value.value || v.value);
                            return sum + (isNaN(num) ? 0 : num);
                        }, 0);
                        break;
                    case 'AVG':
                        const sum = values.reduce((s, v) => {
                            const num = parseFloat(v.value.value || v.value);
                            return s + (isNaN(num) ? 0 : num);
                        }, 0);
                        aggValue = values.length > 0 ? sum / values.length : 0;
                        break;
                    case 'MIN':
                        const nums = values.map(v => parseFloat(v.value.value || v.value)).filter(n => !isNaN(n));
                        aggValue = nums.length > 0 ? Math.min(...nums) : null;
                        break;
                    case 'MAX':
                        const nums2 = values.map(v => parseFloat(v.value.value || v.value)).filter(n => !isNaN(n));
                        aggValue = nums2.length > 0 ? Math.max(...nums2) : null;
                        break;
                }
                
                if (aggValue !== null) {
                    // Crear un literal con el valor de la agregación
                    const aliasName = agg.alias.startsWith('?') ? agg.alias.substring(1) : agg.alias;
                    resultBinding[aliasName] = {
                        termType: 'Literal',
                        value: String(aggValue),
                        datatype: { value: 'http://www.w3.org/2001/XMLSchema#integer' }
                    };
                    resultBinding['?' + aliasName] = resultBinding[aliasName];
                }
            });
            
            results.push(resultBinding);
        });
        
        console.log(`Agregaciones calculadas: ${bindings.length} filas -> ${results.length} grupos`);
        return results;
    }
    
    // Función para extraer las variables del SELECT de la consulta SPARQL
    function extractSelectVariables(queryString, aggInfo = null) {
        // Buscar la cláusula SELECT (puede tener DISTINCT y saltos de línea)
        const selectMatch = queryString.match(/SELECT\s+(?:DISTINCT\s+)?([\s\S]+?)\s+WHERE/i);
        if (!selectMatch) {
            return null;
        }
        
        const selectClause = selectMatch[1].trim();
        const variables = [];
        
        // Dividir por comas y procesar cada elemento
        // Manejar también saltos de línea en el SELECT
        const parts = selectClause.split(',').map(p => p.trim().replace(/\s+/g, ' '));
        
        parts.forEach(part => {
            // Detectar si es una expresión con AS, ej: COUNT(?obra) AS ?numObras
            const asMatch = part.match(/(.+?)\s+AS\s+(\?\w+)/i);
            if (asMatch) {
                const alias = asMatch[2].trim();
                variables.push(alias);
            } else {
                // Es una variable simple, ej: ?nombreMuseo o ?anio
                // Buscar todas las variables en la parte (puede haber múltiples si hay espacios)
                const varMatches = part.match(/(\?\w+)/g);
                if (varMatches) {
                    varMatches.forEach(v => {
                        const trimmedVar = v.trim();
                        if (!variables.includes(trimmedVar)) {
                            variables.push(trimmedVar);
                        }
                    });
                }
            }
        });
        
        // Si hay agregaciones, también incluir las variables del GROUP BY
        if (aggInfo && aggInfo.hasAggregation && aggInfo.groupByVars) {
            aggInfo.groupByVars.forEach(v => {
                if (!variables.includes(v)) {
                    variables.push(v);
                }
            });
        }
        
        console.log('Variables extraídas del SELECT:', variables);
        return variables;
    }
    
    // Función para aplicar DISTINCT manualmente
    function applyDistinct(bindings, selectVars) {
        if (!bindings || bindings.length === 0) {
            return bindings;
        }
        
        // Crear un Set para almacenar combinaciones únicas de valores
        const seen = new Set();
        const uniqueBindings = [];
        
        bindings.forEach(binding => {
            // Crear una clave única basada en los valores de las variables del SELECT
            const key = selectVars.map(v => {
                const varName = v.startsWith('?') ? v.substring(1) : v;
                const value = binding[varName] || binding['?' + varName];
                if (!value) return 'null';
                // Crear una representación única del valor
                if (value.termType === 'Literal' || value.termType === 'literal') {
                    return `L:${value.value}`;
                } else if (value.termType === 'NamedNode' || value.termType === 'namedNode') {
                    return `N:${value.value || value.uri}`;
                } else if (value.termType === 'BlankNode' || value.termType === 'blankNode') {
                    return `B:${value.value}`;
                }
                return String(value);
            }).join('|');
            
            if (!seen.has(key)) {
                seen.add(key);
                uniqueBindings.push(binding);
            }
        });
        
        console.log(`DISTINCT aplicado: ${bindings.length} -> ${uniqueBindings.length} resultados`);
        return uniqueBindings;
    }
    
    // Función para extraer la cláusula ORDER BY de la consulta
    function extractOrderBy(queryString) {
        const orderByMatch = queryString.match(/ORDER\s+BY\s+((?:ASC|DESC)?\s*\(?\s*\?\w+\s*\)?(?:\s*,\s*(?:ASC|DESC)?\s*\(?\s*\?\w+\s*\)?)*)/i);
        if (!orderByMatch) {
            return null;
        }
        
        const orderByClause = orderByMatch[1].trim();
        const orderSpecs = [];
        
        // Dividir por comas para múltiples ordenamientos
        const parts = orderByClause.split(',').map(p => p.trim());
        
        parts.forEach(part => {
            // Detectar ASC o DESC
            let direction = 'ASC'; // Por defecto ascendente
            let variable = '';
            
            const descMatch = part.match(/DESC\s*\(?\s*(\?\w+)\s*\)?/i);
            const ascMatch = part.match(/ASC\s*\(?\s*(\?\w+)\s*\)?/i);
            const simpleMatch = part.match(/(\?\w+)/);
            
            if (descMatch) {
                direction = 'DESC';
                variable = descMatch[1];
            } else if (ascMatch) {
                direction = 'ASC';
                variable = ascMatch[1];
            } else if (simpleMatch) {
                direction = 'ASC';
                variable = simpleMatch[1];
            }
            
            if (variable) {
                orderSpecs.push({ variable, direction });
            }
        });
        
        console.log('ORDER BY extraído:', orderSpecs);
        return orderSpecs.length > 0 ? orderSpecs : null;
    }
    
    // Función para aplicar ORDER BY manualmente
    function applyOrderBy(bindings, orderSpecs) {
        if (!bindings || bindings.length === 0 || !orderSpecs) {
            return bindings;
        }
        
        const sortedBindings = [...bindings];
        
        sortedBindings.sort((a, b) => {
            for (const spec of orderSpecs) {
                const varName = spec.variable.startsWith('?') ? spec.variable.substring(1) : spec.variable;
                const valueA = a[varName] || a['?' + varName];
                const valueB = b[varName] || b['?' + varName];
                
                // Manejar valores nulos
                if (!valueA && !valueB) continue;
                if (!valueA) return 1;
                if (!valueB) return -1;
                
                // Obtener valores comparables
                let compareA, compareB;
                
                if (valueA.termType === 'Literal' || valueA.termType === 'literal') {
                    const datatypeA = getDatatypeFromLiteral(valueA);
                    
                    // Si es un tipo de fecha, comparar como fechas
                    if (datatypeA && (datatypeA.includes('date') || datatypeA.includes('Date') || datatypeA.includes('gYear'))) {
                        // Intentar parsear como fecha
                        compareA = new Date(valueA.value);
                        if (isNaN(compareA.getTime())) {
                            // Si no es una fecha válida, intentar como número
                            compareA = parseFloat(valueA.value);
                            if (isNaN(compareA)) {
                                // Si no es número, usar como string
                                compareA = valueA.value;
                            }
                        }
                    } else {
                        // Intentar como número primero
                        compareA = parseFloat(valueA.value);
                        if (isNaN(compareA)) {
                            compareA = valueA.value; // String
                        }
                    }
                } else {
                    compareA = valueA.value || valueA.uri || valueA.toString();
                }
                
                if (valueB.termType === 'Literal' || valueB.termType === 'literal') {
                    const datatypeB = getDatatypeFromLiteral(valueB);
                    
                    if (datatypeB && (datatypeB.includes('date') || datatypeB.includes('Date') || datatypeB.includes('gYear'))) {
                        compareB = new Date(valueB.value);
                        if (isNaN(compareB.getTime())) {
                            compareB = parseFloat(valueB.value);
                            if (isNaN(compareB)) {
                                compareB = valueB.value;
                            }
                        }
                    } else {
                        compareB = parseFloat(valueB.value);
                        if (isNaN(compareB)) {
                            compareB = valueB.value;
                        }
                    }
                } else {
                    compareB = valueB.value || valueB.uri || valueB.toString();
                }
                
                // Comparar
                let comparison = 0;
                
                if (compareA instanceof Date && compareB instanceof Date) {
                    comparison = compareA.getTime() - compareB.getTime();
                } else if (typeof compareA === 'number' && typeof compareB === 'number') {
                    comparison = compareA - compareB;
                } else {
                    // Comparación de strings
                    const strA = String(compareA);
                    const strB = String(compareB);
                    comparison = strA.localeCompare(strB);
                }
                
                if (comparison !== 0) {
                    return spec.direction === 'DESC' ? -comparison : comparison;
                }
            }
            return 0;
        });
        
        console.log(`ORDER BY aplicado: ordenados ${sortedBindings.length} resultados`);
        return sortedBindings;
    }
    
    // Función para extraer el LIMIT de la consulta
    function extractLimit(queryString) {
        const limitMatch = queryString.match(/LIMIT\s+(\d+)/i);
        if (limitMatch) {
            const limit = parseInt(limitMatch[1]);
            console.log('LIMIT extraído:', limit);
            return limit;
        }
        return null;
    }
    
    // Función para aplicar LIMIT manualmente
    function applyLimit(bindings, limit) {
        if (!bindings || bindings.length === 0 || !limit) {
            return bindings;
        }
        
        const limitedBindings = bindings.slice(0, limit);
        console.log(`LIMIT aplicado: ${bindings.length} -> ${limitedBindings.length} resultados`);
        return limitedBindings;
    }
    
    // Función para ejecutar consulta SPARQL
    function executeSparqlQuery(queryString) {
        if (!rdfStore) {
            throw new Error(t('error-no-rdf-data'));
        }
        
        try {
            // Extraer información sobre agregaciones
            const aggInfo = extractAggregationInfo(queryString);
            
            // Extraer las variables del SELECT (pasar aggInfo para incluir GROUP BY vars si hay agregaciones)
            const selectVars = extractSelectVariables(queryString, aggInfo);
            
            // Detectar si hay SELECT DISTINCT
            const hasDistinct = /SELECT\s+DISTINCT/i.test(queryString);
            
            // Detectar si hay FILTERs con tipos específicos que rdflib puede no procesar correctamente
            const hasTypedFilter = /FILTER\s*\(\s*\?\w+\s*[<>=!]+\s*"[^"]+"\^\^xsd:\w+/i.test(queryString);
            
            // Detectar si hay FILTERs con REGEX
            const hasRegexFilter = /FILTER\s*\(\s*REGEX\s*\(/i.test(queryString);
            
            // Detectar si hay FILTERs con funciones de conversión de tipo (xsd:date(?var), etc.)
            const hasTypeFunctionFilter = /FILTER\s*\(\s*xsd:\w+\s*\(\s*\?\w+\s*\)\s*[<>=!]+/i.test(queryString);
            
            // Si hay algún tipo de FILTER especial, necesitamos procesamiento manual
            const hasManualFilter = hasTypedFilter || hasRegexFilter || hasTypeFunctionFilter;
            
            // Extraer ORDER BY y LIMIT antes de modificar la consulta
            const orderSpecs = extractOrderBy(queryString);
            const limitValue = extractLimit(queryString);
            
            let queryToExecute = queryString;
            let query;
            
            // Si hay agregaciones, simplificar la consulta para obtener los datos base
            if (aggInfo.hasAggregation) {
                console.log('Agregaciones detectadas, simplificando consulta...');
                // Crear una consulta simplificada sin funciones de agregación ni GROUP BY
                // SELECT solo las variables necesarias (GROUP BY + variables de agregación)
                const selectVarsForQuery = [...aggInfo.groupByVars, ...aggInfo.selectVars];
                aggInfo.aggregations.forEach(agg => {
                    if (!selectVarsForQuery.includes(agg.variable)) {
                        selectVarsForQuery.push(agg.variable);
                    }
                });
                
                const selectClause = 'SELECT ' + selectVarsForQuery.join(' ');
                queryToExecute = queryString.replace(/SELECT\s+(?:DISTINCT\s+)?[\s\S]+?\s+WHERE/i, selectClause + ' WHERE');
                // Remover GROUP BY, ORDER BY y LIMIT
                queryToExecute = queryToExecute.replace(/\s+GROUP\s+BY\s+[\s\S]+?(?=\s+ORDER\s+BY|\s+LIMIT|\s*$)/i, '');
                queryToExecute = queryToExecute.replace(/\s+ORDER\s+BY\s+[\s\S]+?(?=\s+LIMIT|\s*$)/i, '');
                queryToExecute = queryToExecute.replace(/\s+LIMIT\s+\d+/i, '');
            } else {
                // Remover ORDER BY y LIMIT de la consulta ya que rdflib no los procesa correctamente
                queryToExecute = queryToExecute.replace(/\s+ORDER\s+BY\s+[\s\S]+?(?=\s+LIMIT|\s*$)/i, '');
                queryToExecute = queryToExecute.replace(/\s+LIMIT\s+\d+/i, '');
            }
            
            if (hasManualFilter) {
                console.log('FILTER especial detectado (tipado o REGEX), ejecutando consulta sin FILTER primero...');
                // Remover los FILTERs de la consulta temporalmente (manejo de paréntesis anidados)
                let tempQuery = queryToExecute;
                let result = '';
                let idx = 0;
                
                while (idx < tempQuery.length) {
                    const filterIdx = tempQuery.indexOf('FILTER', idx);
                    if (filterIdx === -1) {
                        result += tempQuery.substring(idx);
                        break;
                    }
                    
                    // Agregar el texto antes del FILTER
                    result += tempQuery.substring(idx, filterIdx);
                    
                    // Encontrar el paréntesis de apertura
                    const openParenIdx = tempQuery.indexOf('(', filterIdx);
                    if (openParenIdx === -1) {
                        result += tempQuery.substring(filterIdx);
                        break;
                    }
                    
                    // Contar paréntesis para encontrar el cierre correcto
                    let parenCount = 1;
                    let closeParenIdx = openParenIdx + 1;
                    
                    while (closeParenIdx < tempQuery.length && parenCount > 0) {
                        if (tempQuery[closeParenIdx] === '(') parenCount++;
                        else if (tempQuery[closeParenIdx] === ')') parenCount--;
                        closeParenIdx++;
                    }
                    
                    // Saltar todo el FILTER
                    idx = closeParenIdx;
                }
                
                queryToExecute = result.trim();
                // Limpiar líneas vacías y espacios extra
                queryToExecute = queryToExecute.replace(/\n\s*\n/g, '\n');
            }
            
            // Preparar la consulta
            query = $rdf.SPARQLToQuery(queryToExecute, false, rdfStore);
            
            // Ejecutar la consulta
            let results = rdfStore.querySync(query);
            
            // Log de depuración
            console.log('SPARQL Query:', query);
            console.log('Query vars:', query.vars);
            console.log('Results antes de procesamiento manual:', results);
            
            // Aplicar FILTERs manualmente si es necesario
            if (hasManualFilter && results && results.length > 0) {
                results = applyManualFilters(results, queryString);
            }
            
            // Aplicar agregaciones manualmente si es necesario
            if (aggInfo.hasAggregation && results && results.length > 0) {
                results = applyAggregations(results, aggInfo);
            }
            
            // Aplicar DISTINCT manualmente si es necesario
            if (hasDistinct && results && results.length > 0 && selectVars) {
                results = applyDistinct(results, selectVars);
            }
            
            // Aplicar ORDER BY manualmente si es necesario
            if (orderSpecs && results && results.length > 0) {
                results = applyOrderBy(results, orderSpecs);
            }
            
            // Aplicar LIMIT manualmente si es necesario
            if (limitValue && results && results.length > 0) {
                results = applyLimit(results, limitValue);
            }
            
            console.log('Results después de procesamiento manual:', results);
            if (results && results.length > 0) {
                console.log('First binding:', results[0]);
                console.log('Binding keys:', Object.keys(results[0]));
            }
            
            // Usar las variables del SELECT si están disponibles, sino usar las de query.vars
            const variablesToUse = selectVars || query.vars || [];
            
            console.log('Variables a usar en la tabla:', variablesToUse);
            console.log('selectVars:', selectVars);
            console.log('query.vars:', query.vars);
            
            // Retornar tanto los resultados como las variables seleccionadas
            return {
                bindings: results,
                variables: variablesToUse
            };
        } catch (error) {
            throw new Error(t('error-execute-query') + error.message);
        }
    }
    
    // Función para extraer el datatype de un literal de rdflib
    // Busca primero en el objeto literal, y si no encuentra, busca en el mapa de datatypes originales
    function getDatatypeFromLiteral(literal) {
        if (!literal) return null;
        
        // Si es un literal, intentar obtener el datatype
        if (literal.termType === 'Literal' || literal.termType === 'literal') {
            // Primero intentar obtener del objeto literal directamente
            if (literal.datatype) {
                let datatypeValue = null;
                if (literal.datatype.value) {
                    datatypeValue = literal.datatype.value;
                } else if (literal.datatype.uri) {
                    datatypeValue = literal.datatype.uri;
                } else if (typeof literal.datatype === 'string') {
                    datatypeValue = literal.datatype;
                } else if (literal.datatype.toString) {
                    datatypeValue = literal.datatype.toString();
                }
                
                if (datatypeValue && datatypeValue !== 'http://www.w3.org/2001/XMLSchema#string') {
                    return datatypeValue;
                }
            }
            
            // Si no se encontró o es xsd:string, buscar en el mapa usando el valor del literal
            const literalValue = literal.value;
            
            // Buscar en el mapa por el valor del literal
            // En la mayoría de casos, cada valor único tiene un único datatype
            for (const [key, datatype] of datatypeMap.entries()) {
                const [subject, predicate, object] = key.split('|');
                if (object === literalValue) {
                    console.log(`Encontrado datatype en mapa: ${datatype} para valor ${literalValue}`);
                    return datatype;
                }
            }
            
            // Si no tiene datatype explícito, por defecto es xsd:string
            return 'http://www.w3.org/2001/XMLSchema#string';
        }
        
        return null;
    }
    
    // Función para mostrar resultados SPARQL
    function displaySparqlResults(bindings, variables) {
        // Limpiar resultados anteriores
        sparqlResultsThead.innerHTML = '';
        sparqlResultsTbody.innerHTML = '';
        
        if (!bindings || bindings.length === 0) {
            sparqlResultsTbody.innerHTML = `<tr><td colspan="100%" style="text-align: center; color: #999;">${t('no-results')}</td></tr>`;
            return;
        }
        
        // Si no se proporcionan variables, usar las del primer binding
        if (!variables || variables.length === 0) {
            variables = Object.keys(bindings[0]);
        }
        
        // Normalizar variables a strings
        const varNames = variables.map(v => {
            if (typeof v === 'string') {
                return v;
            } else if (v && v.value) {
                // Si es un objeto con propiedad value, usar esa
                return v.value;
            } else if (v && v.toString) {
                // Convertir a string
                return v.toString();
            }
            return String(v);
        });
        
        // Detectar si hay variables que deberían ser resultado de DATATYPE()
        // Buscar en el query original si hay "DATATYPE(...) AS ?variable"
        const queryString = getSparqlTextContent().trim();
        const datatypePattern = /DATATYPE\s*\(\s*\?(\w+)\s*\)\s+AS\s+\?(\w+)/gi;
        const datatypeMappings = {};
        let match;
        while ((match = datatypePattern.exec(queryString)) !== null) {
            const sourceVar = match[1];
            const targetVar = match[2];
            datatypeMappings[targetVar] = sourceVar;
            console.log(`Detectado DATATYPE(?${sourceVar}) AS ?${targetVar}`);
        }
        
        // Crear encabezado con las variables seleccionadas
        const headerRow = document.createElement('tr');
        varNames.forEach(variable => {
            const th = document.createElement('th');
            // Agregar ? al inicio si no lo tiene
            th.textContent = variable.startsWith('?') ? variable : '?' + variable;
            headerRow.appendChild(th);
        });
        sparqlResultsThead.appendChild(headerRow);
        
        // Crear filas de datos
        bindings.forEach((binding, rowIndex) => {
            const row = document.createElement('tr');
            varNames.forEach(variable => {
                const td = document.createElement('td');
                // Buscar la variable con o sin el prefijo ?
                const varName = variable.startsWith('?') ? variable.substring(1) : variable;
                let value = binding[varName] || binding['?' + varName];
                
                // Si esta variable es el resultado de DATATYPE(), calcular el datatype manualmente
                if (!value && datatypeMappings[varName]) {
                    const sourceVarName = datatypeMappings[varName];
                    const sourceValue = binding[sourceVarName] || binding['?' + sourceVarName];
                    if (sourceValue) {
                        const datatype = getDatatypeFromLiteral(sourceValue);
                        if (datatype) {
                            // Crear un objeto que simule un NamedNode con el datatype
                            value = {
                                termType: 'NamedNode',
                                value: datatype,
                                uri: datatype
                            };
                        }
                    }
                }
                
                // Log de depuración
                if (rowIndex === 0) {
                    console.log(`Variable: ${variable}, Value:`, value);
                    if (value) {
                        console.log(`  - termType: ${value.termType}`);
                        console.log(`  - value: ${value.value}`);
                        console.log(`  - constructor: ${value.constructor.name}`);
                        if (value.datatype) {
                            console.log(`  - datatype:`, value.datatype);
                            console.log(`  - datatype.value:`, value.datatype.value);
                            console.log(`  - datatype.uri:`, value.datatype.uri);
                        }
                        if (value.uri) {
                            console.log(`  - uri:`, value.uri);
                        }
                    }
                }
                
                if (value) {
                    // Formatear el valor según su tipo
                    if (value.termType === 'NamedNode' || value.termType === 'namedNode') {
                        // Mostrar la URI, pero acortarla si es posible
                        let displayValue = value.value || value.uri;
                        // Acortar URIs comunes
                        displayValue = displayValue.replace('http://www.w3.org/2001/XMLSchema#', 'xsd:');
                        td.textContent = displayValue;
                        td.title = value.value || value.uri || displayValue;
                    } else if (value.termType === 'Literal' || value.termType === 'literal') {
                        let displayValue = value.value;
                        if (value.language) {
                            displayValue += ` @${value.language}`;
                        } else if (value.datatype && value.datatype.value !== 'http://www.w3.org/2001/XMLSchema#string') {
                            // Para tipos numéricos, solo mostrar el valor sin el datatype
                            const datatype = value.datatype.value || value.datatype.uri || value.datatype;
                            const numericTypes = [
                                'http://www.w3.org/2001/XMLSchema#integer',
                                'http://www.w3.org/2001/XMLSchema#decimal',
                                'http://www.w3.org/2001/XMLSchema#float',
                                'http://www.w3.org/2001/XMLSchema#double',
                                'http://www.w3.org/2001/XMLSchema#long',
                                'http://www.w3.org/2001/XMLSchema#int',
                                'http://www.w3.org/2001/XMLSchema#short',
                                'http://www.w3.org/2001/XMLSchema#byte',
                                'http://www.w3.org/2001/XMLSchema#nonNegativeInteger',
                                'http://www.w3.org/2001/XMLSchema#positiveInteger',
                                'http://www.w3.org/2001/XMLSchema#nonPositiveInteger',
                                'http://www.w3.org/2001/XMLSchema#negativeInteger',
                                'http://www.w3.org/2001/XMLSchema#unsignedLong',
                                'http://www.w3.org/2001/XMLSchema#unsignedInt',
                                'http://www.w3.org/2001/XMLSchema#unsignedShort',
                                'http://www.w3.org/2001/XMLSchema#unsignedByte'
                            ];
                            
                            if (!numericTypes.includes(datatype)) {
                                // Solo agregar el datatype si no es numérico
                                displayValue += ` ^^${datatype}`;
                            }
                        }
                        td.textContent = displayValue;
                        td.title = displayValue;
                    } else if (value.termType === 'BlankNode' || value.termType === 'blankNode') {
                        td.textContent = value.value;
                        td.title = value.value;
                    } else if (value.uri) {
                        // rdflib.js a veces devuelve objetos con propiedad uri
                        let displayValue = value.uri;
                        displayValue = displayValue.replace('http://www.w3.org/2001/XMLSchema#', 'xsd:');
                        td.textContent = displayValue;
                        td.title = value.uri;
                    } else if (value.value) {
                        // Último recurso: mostrar el value si existe
                        let displayValue = value.value;
                        displayValue = displayValue.replace('http://www.w3.org/2001/XMLSchema#', 'xsd:');
                        td.textContent = displayValue;
                        td.title = value.value || '';
                    } else {
                        // Si nada funciona, convertir a string
                        const strValue = value.toString();
                        td.textContent = strValue;
                        td.title = strValue;
                    }
                } else {
                    td.textContent = '';
                    td.style.color = '#999';
                }
                
                row.appendChild(td);
            });
            sparqlResultsTbody.appendChild(row);
        });
    }
    
    // Función principal para ejecutar SPARQL
    async function handleExecuteSparql() {
        const queryString = getSparqlTextContent().trim();
        
        // Ocultar resultados anteriores
        sparqlResults.classList.add('hidden');
        sparqlError.classList.add('hidden');
        
        if (!queryString) {
            sparqlError.textContent = t('error-empty-sparql');
            sparqlError.classList.remove('hidden');
            return;
        }
        
        // Mostrar indicador de carga
        executeSparqlBtn.disabled = true;
        executeSparqlBtn.textContent = t('executing');
        
        try {
            // Ejecutar consulta
            const results = executeSparqlQuery(queryString);
            
            // Mostrar resultados
            displaySparqlResults(results.bindings, results.variables);
            sparqlResults.classList.remove('hidden');
            
        } catch (error) {
            // Mostrar error
            sparqlError.textContent = error.message;
            sparqlError.classList.remove('hidden');
            console.error('Error al ejecutar SPARQL:', error);
        } finally {
            // Restaurar botón
            executeSparqlBtn.disabled = false;
            executeSparqlBtn.textContent = t('execute-query-button');
        }
    }
    
    // Event listeners
    verifyBtn.addEventListener('click', handleVerify);
    
    // Permitir verificar con Ctrl+Enter
    rdfInput.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            handleVerify();
        }
    });
    
    // Event listeners para SPARQL
    if (executeSparqlBtn) {
        executeSparqlBtn.addEventListener('click', handleExecuteSparql);
    }
    
    // Permitir ejecutar SPARQL con Ctrl+Enter
    if (sparqlInput) {
        sparqlInput.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                handleExecuteSparql();
            }
        });
    }
    
    console.log('Aplicación inicializada correctamente');
});
