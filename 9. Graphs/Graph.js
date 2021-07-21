class Graph {
  constructor() {
    this.vertices = {};
    this.vertexCount = 0;
    this.visited = {};
  }

  addVertex(v) {
    if (this.vertices.hasOwnProperty(v)) {
      throw "Duplicate vertices not allowed";
    }

    this.vertices[v] = {};
    this.vertexCount++;
  }

  addEdges(v, edges) {
    if (!this.vertices.hasOwnProperty(v)) {
      throw "Vertex doesn't exist";
    }

    const edgesObj = this.vertices[v];

    for (let i = 0; i < edges.length; i++) {
      let edge = edges[i];
      edgesObj[edge] = true;
    }
  }

  getVertices() {
    let vertices = [];
    for (let v in this.vertices) {
      vertices.push(v);
    }
    return vertices;
  }

  getEdges(v) {
    if (!this.vertices.hasOwnProperty(v)) {
      throw "Vertex doesn't exist'";
    }

    let edges = [];
    const edgesObj = this.vertices[v];

    for (let e in edgesObj) {
      edges.push(e);
    }

    return edges;
  }

  DFS() {
    let vertices = this.getVertices();
    if (vertices.length === 0) {
      return;
    }

    for (let i = 0; i < vertices.length; i++) {
      this.visited[vertices[i]] = false;
    }

    for (let k = 0; k < vertices.length; k++) {
      var vertex = vertices[k];
      if (!this.visited[vertex]) {
        this.DFSImpl(vertex);
      }
    }
    this.visited = {};
  }

  DFSImpl(v) {
    this.visited[v] = true;
    console.log("Visiting Vertex: " + v);

    let edges = this.getEdges(v);

    for (let j = 0; j < edges.length; j++) {
      let edge = edges[j];

      if (!this.visited[edge]) {
        this.DFSImpl(edge);
      }
    }
  }

  BFS() {
    let vertices = this.getVertices();
    if (vertices.length === 0) {
      return;
    }

    for (let i = 0; i < vertices.length; i++) {
      this.visited[vertices[i]] = false;
    }

    let queue = [];
    let startV = vertices[0];
    queue.push(startV);
    this.visited[startV] = true;

    while (queue.length > 0) {
      let v = queue.shift();
      console.log("Visited: " + v);
      var edges = this.getEdges(v);

      for (let i = 0; i < edges.length; i++) {
        let e = edges[i];
        if (!this.visited[e]) {
          queue.push(e);
          this.visited[e] = true;
        }
      }
    }
  }
}

const graph = new Graph();
// Adding Vertices
graph.addVertex("Anna");
graph.addVertex("Bob");
graph.addVertex("Frank");
graph.addVertex("Jane");

// Adding Edges to existing Vertices
graph.addEdges("Anna", ["Bob", "Frank"]);
graph.addEdges("Bob", ["Anna", "Frank"]);
graph.addEdges("Frank", ["Anna", "Bob", "Jane"]);
graph.addEdges("Jane", ["Frank"]);

graph.getVertices(); // Returns [ 'Anna', 'Bob', 'Frank', 'Jane' ]
graph.getEdges("Anna"); // Returns [ 'Anna', 'Bob', 'Jane' ]

graph.DFS();
// Returns:
// Visiting Vertex: Anna
// Visiting Vertex: Bob
// Visiting Vertex: Frank
// Visiting Vertex: Jane

graph.BFS();
// Returns:
// Visited: Anna
// Visited: Bob
// Visited: Frank
// Visited: Jane
