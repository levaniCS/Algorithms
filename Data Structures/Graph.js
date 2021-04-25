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

  depthFirstRecursive(start) {
    const result = []
    const visited = {}
    const adjacencyListClone = this.adjacencyList

    function dfs(vertex) {
      if(!vertex) return null
      visited[vertex] = true;
      result.push(vertex)
      adjacencyListClone[vertex].forEach(neighbour => {
        // If neighbour is not visited
        if(!visited[neighbour]) dfs(neighbour)
      })
    }
    dfs(start)
    return result;
  }

  depthFirstIterative(start) {
    const stack = [start]
    const result = []
    const visited = {}
    let currentVertex;

    visited[start] = true
    while(stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbour => {
        if(!visited[neighbour]) {
          visited[neighbour] = true
          stack.push(neighbour)
        }
      })
    }

    return result
  }

  breadFirst(start) {
    const queue = [start]
    const result = []
    const visited = {}
    let currentVertex

    visited[start] = true
    while(queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbour => {
        if(!visited[neighbour]) {
          visited[neighbour] = true
          queue.push(neighbour)
        }
      })
    }

    return result
  }
}


const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(g.breadFirst("A"))