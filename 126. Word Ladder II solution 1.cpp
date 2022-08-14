class Solution {
public:
	
	// If s1 and s2 string only differ by single character
	bool canBeNext(string s1, string s2){
		int uncmn=0;
		for(int i=0; i<s1.size(); i++)
			uncmn += (s1[i] != s2[i]);

		return uncmn==1;
	}
	
	// BFS to find the shortest paths first (Since BFS traverses nearest nodes first)
	void bfs(vector<vector<int>>& graph, vector<int> parent[], int n, int start, int end){
		vector<int> dist(n, 501); // Distance from parent node set to 501 i.e INF for all the nodes
		
		// Initializing queue for BFS with adding start node
		queue<int> q; 
		q.push(start);

		dist[start] = 0; // 0 for start node (Since start can reach to start my making 0 moves)
		parent[start] = {-1}; // no parent of start therefore marked -1

		while(!q.empty()){
			// Fetching front element of queue
			int curr = q.front();
			q.pop();
			
			// Traversing all the connected elements of curr (Here nearest(convertable) words indexes)
			for( int node: graph[curr]){
				if(dist[node] > dist[curr]+1){ // if marked distance is more than possible distance i.e, found nearest node (here word) 
					dist[node] = dist[curr]+1;
					q.push(node);
					parent[node].clear(); // Removing previously calculated distant than current word
					parent[node].push_back(curr); // adding current word index
				}else if(dist[node] == dist[curr]+1) // if node(next word) is just one move ahead the current 
					parent[node].push_back(curr);
			}
		}

	}
	
	// All the paths in the form of indexes of words from wordList
	void shortestPaths(int node, vector<vector<int>>& Paths, vector<int>& curr_path, vector<int> parent[]){
		if(node == -1){ // Reached parent of all(Baap of all !!)
			Paths.push_back(curr_path);
			return;
		}
		
		// Traversing parents of "node" i.e, words that can be reached from current word given the condition
		for(int p: parent[node]){ 
			curr_path.push_back(p);
			shortestPaths(p, Paths, curr_path, parent);
			curr_path.pop_back();
		}
	}

	vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
		// Indexes of beginWord and endWord respectively in wordList
		int start=-1, end=-1;

		for(int i=0; i<wordList.size(); i++){
			if(wordList[i] == beginWord)
				start = i;
			if(wordList[i] == endWord)
				end = i;
		}

		if(end == -1)
			return {};

		if(start == -1){
			wordList.emplace(wordList.begin(), beginWord); // setting beginWord as 1st element of wordList
			start = 0;
			end++;
		}

		int n = wordList.size();
		vector<vector<int>> graph(n, vector<int>());

		// Creating adjency list for each pair of words that can be next i.e, word with only one uncommon char from current word
		for(int i=0; i<n; i++){
			for(int j=i+1; j<n; j++){
				if(canBeNext(wordList[i], wordList[j])){
					graph[i].push_back(j);
					graph[j].push_back(i);
				}
			}
		}

		// Apply BFS to get a list of parent of word as index 
		vector<int> parent[n];
		bfs(graph, parent, n, start, end);

		// Backtrack to find shortest paths from node to parent(endWord to beginWord) using indexes
		vector<vector<int>> Paths;
		vector<int> curr_path;
		shortestPaths(end, Paths, curr_path, parent);

		// Traverse through all shortest paths calculated and convert it into list of words(required answer)
		vector<vector<string>> ans;

		for(auto path: Paths){
			vector<string> curr;

			for(int i=0; i<path.size()-1; i++)
				curr.push_back(wordList[path[i]]);
			
			// Since we started with endWord to reach beginWord we have to reverse the current order and add endWord
			reverse(curr.begin(), curr.end());  
			curr.push_back(wordList[end]);
			ans.push_back(curr);
		}

		return ans;
	}
};
