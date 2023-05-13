class Solution {
    //Function to find a Mother Vertex in the Graph.
    findMotherVertex(V, adj) {
        for (let i = 0; i < V; i++) {
            let seen = new Set();
            if (this.dfs(adj, i, seen, V)) {
                return i;
            }
        }
        return -1;
    }
    dfs(adj, idx, seen, needs) {
        if (seen.has(idx)) {
            return false;
        }
        seen.add(idx);
        if (seen.size == needs) {
            return true;
        }
        for (let i = 0; i < adj[idx].length; i++) {
            if (this.dfs(adj, adj[idx][i], seen, needs)) {
                return true;
            }
        }
        return false;
    }
}
