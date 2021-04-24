class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2) {
    if(!v1 || !v2) return
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2) {
    if(!v1 || !v2) return
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }

  removeVertex(v) {
    while (this.adjacencyList[v].length > 0) {
      const adjacentVertex = this.adjacencyList[v].pop()
      this.removeEdge(v, adjacentVertex)
    }
    delete this.adjacencyList[v]
  }
}


const g = new Graph()

g.addVertex('Dallas')
g.addVertex('Tokyo')
g.addVertex('Aspen')

g.addEdge('Dallas', 'Tokyo')
g.addEdge('Dallas', 'Tokyo')
g.addEdge('Aspen', 'Tokyo')

g.removeVertex("Dallas")
console.log(g)