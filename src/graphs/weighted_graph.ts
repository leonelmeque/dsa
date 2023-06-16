export class WeightedGraph {
  adjacencyList: object;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx: string) {
    if (!this.adjacencyList[vtx as string]) this.adjacencyList[vtx] = [];
  }

  addEdge(v1: string, v2: string, weight: number) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
}
