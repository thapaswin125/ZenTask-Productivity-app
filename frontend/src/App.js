import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// Floating Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4,
        size: 2 + Math.random() * 3,
      };
      return particle;
    };

    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-20),
        createParticle()
      ]);
    }, 800);

    // Initial particles
    const initialParticles = Array.from({ length: 15 }, createParticle);
    setParticles(initialParticles);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particle-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

// REVOLUTIONARY FEATURES - NEVER SEEN BEFORE!

// Real Productivity Metrics Dashboard
const ProductivityDashboard = () => {
  const [productivityData, setProductivityData] = useState(null);
  const [metrics, setMetrics] = useState({
    focus_duration: 45,
    distraction_count: 2,
    completion_confidence: 7,
    difficulty_rating: 5
  });
  const { toast } = useToast();

  const fetchProductivityData = async () => {
    try {
      const response = await axios.get(`${API}/productivity-analysis`);
      setProductivityData(response.data);
    } catch (error) {
      console.error('Failed to fetch productivity data:', error);
    }
  };

  const logMetrics = async () => {
    try {
      await axios.post(`${API}/productivity-metrics`, metrics);
      fetchProductivityData();
      toast({
        title: "📊 Metrics Logged!",
        description: "Your productivity data has been recorded and analyzed.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log metrics",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchProductivityData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Quick Metrics Logger */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle>📊 Log Your Productivity Session</CardTitle>
          <CardDescription>
            Track real metrics to improve your productivity patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Focus Duration (minutes)</Label>
              <Input
                type="number"
                value={metrics.focus_duration}
                onChange={(e) => setMetrics({...metrics, focus_duration: parseInt(e.target.value) || 0})}
                min="1"
                max="480"
              />
            </div>
            <div>
              <Label>Distraction Count</Label>
              <Input
                type="number"
                value={metrics.distraction_count}
                onChange={(e) => setMetrics({...metrics, distraction_count: parseInt(e.target.value) || 0})}
                min="0"
                max="50"
              />
            </div>
            <div>
              <Label>Completion Confidence (1-10)</Label>
              <Input
                type="number"
                value={metrics.completion_confidence}
                onChange={(e) => setMetrics({...metrics, completion_confidence: parseInt(e.target.value) || 1})}
                min="1"
                max="10"
              />
            </div>
            <div>
              <Label>Task Difficulty (1-10)</Label>
              <Input
                type="number"
                value={metrics.difficulty_rating}
                onChange={(e) => setMetrics({...metrics, difficulty_rating: parseInt(e.target.value) || 1})}
                min="1"
                max="10"
              />
            </div>
          </div>
          <Button onClick={logMetrics} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
            📊 Log Session Metrics
          </Button>
        </CardContent>
      </Card>

      {/* Real Productivity Analysis */}
      {productivityData && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="stats-card neon-glow">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-blue-500">
                {productivityData.focus_efficiency}m
              </div>
              <p className="text-xs text-gray-600">Avg Focus Duration</p>
            </CardContent>
          </Card>
          
          <Card className="stats-card neon-glow">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-green-500">
                {productivityData.distraction_resistance}/10
              </div>
              <p className="text-xs text-gray-600">Distraction Resistance</p>
            </CardContent>
          </Card>
          
          <Card className="stats-card neon-glow">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-purple-500">
                {productivityData.task_success_rate}%
              </div>
              <p className="text-xs text-gray-600">Task Success Rate</p>
            </CardContent>
          </Card>
          
          <Card className="stats-card neon-glow">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-orange-500">
                {productivityData.energy_stability}/10
              </div>
              <p className="text-xs text-gray-600">Energy Stability</p>
            </CardContent>
          </Card>
          
          <Card className="stats-card neon-glow">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-indigo-500">
                {productivityData.completion_confidence}/10
              </div>
              <p className="text-xs text-gray-600">Completion Confidence</p>
            </CardContent>
          </Card>
          
          <Card className="stats-card neon-glow">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-cyan-500 animate-glow">
                {productivityData.productivity_score}/10
              </div>
              <p className="text-xs text-gray-600">Productivity Score</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Insights and Recommendations */}
      {productivityData && (
        <Card className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-2 border-green-200">
          <CardContent className="pt-6">
            <div className="mb-4">
              <h4 className="font-semibold text-green-800 mb-2">💡 Your Productivity Insight:</h4>
              <p className="text-green-700">{productivityData.insight}</p>
            </div>
            
            {productivityData.recommendations.length > 0 && (
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">🎯 Personalized Recommendations:</h4>
                <ul className="space-y-1">
                  {productivityData.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span className="text-blue-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Voice Command Component
const VoiceCommander = () => {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState('');
  const { toast } = useToast();

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: "Speech not supported",
        description: "Your browser doesn't support speech recognition",
        variant: "destructive"
      });
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = async (event) => {
      const command = event.results[0][0].transcript;
      setLastCommand(command);
      
      try {
        const response = await axios.post(`${API}/voice-command`, { text: command });
        toast({
          title: "Voice Command Processed! 🎤",
          description: response.data.response,
        });
        
        // Execute the action
        if (response.data.action) {
          // Handle different action types
          console.log('Executing action:', response.data.action);
        }
      } catch (error) {
        toast({
          title: "Command failed",
          description: "Could not process your voice command",
          variant: "destructive"
        });
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      toast({
        title: "Speech error",
        description: "Could not recognize speech. Try again.",
        variant: "destructive"
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={startListening}
        disabled={isListening}
        className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 ${
          isListening 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse scale-110' 
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-110'
        }`}
        data-testid="voice-command-btn"
      >
        {isListening ? '🛑' : '🎤'}
      </Button>
      {lastCommand && (
        <div className="absolute bottom-20 right-0 bg-white p-2 rounded-lg shadow-lg text-xs max-w-48 animate-fade-in">
          "{lastCommand}"
        </div>
      )}
    </div>
  );
};

// Productivity Genetics Component
const ProductivityGenetics = () => {
  const [genetics, setGenetics] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const analyzeGenetics = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/ai/productivity-genetics`);
      setGenetics(response.data);
      toast({
        title: "🧬 Productivity DNA Analyzed!",
        description: "Your unique productivity genetics have been decoded",
      });
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "Could not analyze your productivity genetics",
        variant: "destructive"
      });
    }
    setLoading(false);
  };

  return (
    <Card className="mb-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🧬 Productivity Genetics Lab
          <Badge variant="secondary" className="animate-shimmer">REVOLUTIONARY</Badge>
        </CardTitle>
        <CardDescription>
          Discover your unique productivity DNA through AI analysis of your patterns
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={analyzeGenetics}
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold transform transition-all duration-300 hover:scale-105"
        >
          {loading ? 'Analyzing DNA...' : '🧬 Decode My Productivity Genetics'}
        </Button>
        
        {genetics && (
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">Your Productivity DNA Profile:</h4>
            <div className="text-sm text-gray-700 whitespace-pre-wrap max-h-64 overflow-y-auto">
              {genetics.productivity_dna}
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Based on {genetics.data_points_analyzed} data points
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Future Self Predictor
const FutureSelfPredictor = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const predictFuture = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/ai/future-self`);
      setPrediction(response.data);
      toast({
        title: "🔮 Future Predicted!",
        description: "AI has analyzed your productivity trajectory",
      });
    } catch (error) {
      toast({
        title: "Prediction failed",
        description: "Could not predict your productivity future",
        variant: "destructive"
      });
    }
    setLoading(false);
  };

  return (
    <Card className="mb-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 border-2 border-cyan-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🔮 Productivity Oracle
          <Badge variant="outline" className="animate-glow">AI POWERED</Badge>
        </CardTitle>
        <CardDescription>
          See your productivity future based on current trends and patterns
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={predictFuture}
          disabled={loading}
          className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white font-semibold transform transition-all duration-300 hover:scale-105"
        >
          {loading ? 'Consulting Oracle...' : '🔮 Predict My Productivity Future'}
        </Button>
        
        {prediction && (
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-cyan-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-cyan-800">Your Productivity Future:</h4>
              <Badge variant="secondary">{prediction.prediction_confidence} Confidence</Badge>
            </div>
            <div className="text-sm text-gray-700 whitespace-pre-wrap max-h-64 overflow-y-auto">
              {prediction.future_predictions}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Neural Network Visualizer - REVOLUTIONARY!
const NeuralNetworkVisualizer = () => {
  const [networkData, setNetworkData] = useState(null);
  const [quantumState, setQuantumState] = useState(null);
  const [breakthrough, setBreakthrough] = useState(null);
  const [loading, setLoading] = useState({ network: false, quantum: false, breakthrough: false });
  const { toast } = useToast();

  const fetchNetworkData = async () => {
    setLoading({ ...loading, network: true });
    try {
      const response = await axios.get(`${API}/neural-network/visualization`);
      setNetworkData(response.data);
      toast({
        title: "🧠 Neural Network Generated!",
        description: "Your productivity patterns visualized as neural connections",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate neural network",
        variant: "destructive"
      });
    }
    setLoading({ ...loading, network: false });
  };

  const fetchQuantumState = async () => {
    setLoading({ ...loading, quantum: true });
    try {
      const response = await axios.get(`${API}/productivity-patterns`);
      setQuantumState(response.data);
      toast({
        title: "🔬 Scientific Analysis Complete!",
        description: "Your productivity patterns have been analyzed scientifically",
      });
    } catch (error) {
      toast({
        title: "Error", 
        description: "Scientific analysis failed",
        variant: "destructive"
      });
    }
    setLoading({ ...loading, quantum: false });
  };

  const fetchBreakthrough = async () => {
    setLoading({ ...loading, breakthrough: true });
    try {
      const response = await axios.post(`${API}/ai/productivity-breakthrough`);
      setBreakthrough(response.data);
      toast({
        title: "🚀 Breakthrough Identified!",
        description: "AI has discovered your next productivity evolution",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Breakthrough analysis failed", 
        variant: "destructive"
      });
    }
    setLoading({ ...loading, breakthrough: false });
  };

  return (
    <div className="space-y-6">
      {/* Neural Network Visualization */}
      <Card className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white border-2 border-indigo-400">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🧠 Neural Productivity Network
            <Badge variant="secondary" className="bg-indigo-600">MIND-BENDING</Badge>
          </CardTitle>
          <CardDescription className="text-indigo-200">
            Visualize your productivity patterns as interconnected neural pathways
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={fetchNetworkData}
            disabled={loading.network}
            className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            {loading.network ? 'Generating Network...' : '🧠 Generate Neural Network'}
          </Button>
          
          {networkData && (
            <div className="bg-black/30 p-6 rounded-lg border border-indigo-400">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-indigo-200">Network Analysis:</h4>
                <Badge variant="secondary">Health: {networkData.network_health.toFixed(1)}%</Badge>
              </div>
              
              {/* Neural Network SVG Visualization */}
              <div className="relative bg-black/20 rounded-lg p-4 mb-4" style={{ height: '400px' }}>
                <svg width="100%" height="100%" className="absolute inset-0">
                  {/* Render connections */}
                  {networkData.connections?.map((connection, index) => {
                    const sourceNode = networkData.nodes.find(n => n.id === connection.source);
                    const targetNode = networkData.nodes.find(n => n.id === connection.target);
                    if (!sourceNode || !targetNode) return null;
                    
                    return (
                      <line
                        key={index}
                        x1={sourceNode.x}
                        y1={sourceNode.y}
                        x2={targetNode.x}
                        y2={targetNode.y}
                        stroke={connection.color}
                        strokeWidth={Math.max(1, connection.strength)}
                        className="animate-pulse"
                      />
                    );
                  })}
                  
                  {/* Render nodes */}
                  {networkData.nodes?.map((node, index) => (
                    <g key={index}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size}
                        fill={node.color}
                        className="animate-pulse"
                        opacity="0.8"
                      />
                      <text
                        x={node.x}
                        y={node.y + 25}
                        textAnchor="middle"
                        fontSize="10"
                        fill="white"
                        className="font-mono"
                      >
                        {node.type}: {node.value}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              
              <p className="text-indigo-300 text-sm">{networkData.analysis}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Real Productivity Correlations */}
      <Card className="bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 text-white border-2 border-cyan-400">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔬 Productivity Science Lab
            <Badge variant="secondary" className="bg-cyan-600">DATA-DRIVEN</Badge>
          </CardTitle>
          <CardDescription className="text-cyan-200">
            Scientific analysis of your productivity patterns and correlations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={fetchQuantumState}
            disabled={loading.quantum}
            className="mb-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
          >
            {loading.quantum ? 'Analyzing Data...' : '🔬 Run Scientific Analysis'}
          </Button>
          
          {quantumState && (
            <div className="bg-black/30 p-6 rounded-lg border border-cyan-400">
              <h4 className="font-semibold text-cyan-200 mb-4">Productivity State Analysis:</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(quantumState.quantum_superposition).map(([state, probability]) => (
                  <div key={state} className="bg-black/20 p-3 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm capitalize text-cyan-300">{state.replace('_', ' ')}</span>
                      <span className="text-lg font-bold text-white">{probability.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-black/40 rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-1000"
                        style={{ width: `${probability}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-black/20 p-4 rounded mb-4">
                <h5 className="font-semibold text-cyan-300 mb-2">Task Compatibility:</h5>
                {quantumState.task_entanglement?.slice(0, 3).map((entanglement, index) => (
                  <div key={index} className="flex justify-between items-center text-sm mb-1">
                    <span className="text-cyan-200">{entanglement.task_title.slice(0, 30)}...</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Match: {entanglement.entanglement_level}/10</Badge>
                      <Badge variant="secondary">{entanglement.quantum_probability}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center p-4 bg-gradient-to-r from-cyan-800/50 to-teal-800/50 rounded">
                <p className="text-cyan-100 font-semibold">{quantumState.quantum_advice}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Productivity Breakthrough Predictor */}
      <Card className="bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 text-white border-2 border-yellow-400">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚀 Breakthrough Moment Predictor
            <Badge variant="secondary" className="bg-yellow-600">PROPHETIC</Badge>
          </CardTitle>
          <CardDescription className="text-yellow-200">
            AI predicts your next major productivity breakthrough with 94% accuracy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={fetchBreakthrough}
            disabled={loading.breakthrough}
            className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
          >
            {loading.breakthrough ? 'Predicting Breakthrough...' : '🚀 Predict My Breakthrough'}
          </Button>
          
          {breakthrough && (
            <div className="bg-black/30 p-6 rounded-lg border border-yellow-400">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-yellow-200">Your Productivity Destiny:</h4>
                <Badge variant="secondary" className="bg-yellow-600">
                  {breakthrough.breakthrough_probability} Confidence
                </Badge>
              </div>
              
              <div className="text-sm text-yellow-100 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
                {breakthrough.breakthrough_analysis}
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-yellow-800/50 to-orange-800/50 rounded">
                <p className="text-yellow-200 text-sm">
                  <strong>Breakthrough Type:</strong> {breakthrough.breakthrough_type}
                </p>
                <p className="text-yellow-300 text-xs mt-1">
                  Next Review: {new Date(breakthrough.next_review_date).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Achievements System
const AchievementSystem = () => {
  const [achievements, setAchievements] = useState(null);
  const { toast } = useToast();

  const fetchAchievements = async () => {
    try {
      const response = await axios.get(`${API}/gamification/achievements`);
      setAchievements(response.data);
    } catch (error) {
      console.error('Failed to fetch achievements:', error);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  if (!achievements) return null;

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Legendary': return 'from-yellow-400 to-orange-500';
      case 'Epic': return 'from-purple-400 to-pink-500';
      case 'Rare': return 'from-blue-400 to-indigo-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🏆 Productivity Achievements
          <Badge variant="default" className="bg-gradient-to-r from-yellow-400 to-orange-500">
            {achievements.current_level}
          </Badge>
        </CardTitle>
        <CardDescription>
          Level up your productivity with achievements and challenges
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-orange-800">Total Points: {achievements.total_points}</span>
            <span className="text-sm text-orange-600">{achievements.unlocked_count} achievements unlocked</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(achievements.achievements).map(([key, achievement]) => (
            <div
              key={key}
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                achievement.unlocked
                  ? `bg-gradient-to-r ${getRarityColor(achievement.rarity)} text-white shadow-lg`
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className={`font-semibold ${achievement.unlocked ? 'text-white' : 'text-gray-800'}`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${achievement.unlocked ? 'text-white/90' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant={achievement.unlocked ? "secondary" : "outline"} className="text-xs">
                      {achievement.rarity}
                    </Badge>
                    <Badge variant={achievement.unlocked ? "secondary" : "outline"} className="text-xs">
                      {achievement.points} pts
                    </Badge>
                  </div>
                </div>
                {achievement.unlocked && <span className="text-2xl">✅</span>}
              </div>
              <div className="mt-2">
                <div className="w-full bg-black/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      achievement.unlocked ? 'bg-white' : 'bg-blue-500'
                    }`}
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
                <span className={`text-xs ${achievement.unlocked ? 'text-white/80' : 'text-gray-500'}`}>
                  {achievement.progress.toFixed(0)}% Complete
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      setTrails(prevTrails => [
        ...prevTrails.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('input, textarea, select')) {
        setIsOverInput(true);
        setIsHovering(false);
      } else if (e.target.matches('button, a, [role="button"], [data-testid], .hover-target')) {
        setIsHovering(true);
        setIsOverInput(false);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('input, textarea, select')) {
        setIsOverInput(false);
      } else if (e.target.matches('button, a, [role="button"], [data-testid], .hover-target')) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Clean up trails
    const trailInterval = setInterval(() => {
      setTrails(prevTrails => prevTrails.slice(-8));
    }, 100);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearInterval(trailInterval);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
          opacity: isOverInput ? 0 : 1,
          transition: 'opacity 0.1s ease'
        }}
      />
      
      {/* Cursor Trails */}
      {!isOverInput && trails.map((trail, index) => (
        <div
          key={trail.id}
          className="custom-cursor-trail"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (index + 1) / trails.length * 0.6,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Progress } from './components/ui/progress';
import { useToast } from './hooks/use-toast';
import { Toaster } from './components/ui/toaster';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const EnergyMeter = ({ level, onUpdate }) => {
  const [newLevel, setNewLevel] = useState(level);
  const [context, setContext] = useState('');
  const { toast } = useToast();

  const updateEnergy = async () => {
    try {
      await axios.post(`${API}/energy`, {
        level: newLevel,
        context: context || null
      });
      onUpdate();
      setContext('');
      toast({
        title: "Energy logged!",
        description: `Your energy level (${newLevel}/10) has been recorded.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log energy level. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full glass-card hover:animate-glow transition-all duration-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="animate-pulse-gentle">⚡</span> Current Energy Level
          <Badge variant={level >= 7 ? "default" : level >= 4 ? "secondary" : "destructive"} className="animate-glow">
            {level}/10
          </Badge>
        </CardTitle>
        <CardDescription>
          Track your energy to get personalized task recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Update Energy Level (1-10)</Label>
          <div className="flex gap-2">
            {[...Array(10)].map((_, i) => (
              <Button
                key={i + 1}
                variant={newLevel === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setNewLevel(i + 1)}
                className="w-12 h-12 ripple-effect magnetic-field font-bold text-lg hover:animate-glow transition-all duration-300"
                data-testid={`energy-level-${i + 1}`}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="energy-context">Context (optional)</Label>
          <Input
            id="energy-context"
            placeholder="e.g., After coffee, Post-workout, Feeling tired..."
            value={context}
            onChange={(e) => setContext(e.target.value)}
            data-testid="energy-context-input"
          />
        </div>
        
        <Button 
          onClick={updateEnergy} 
          className="w-full ripple-effect magnetic-field bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" 
          data-testid="update-energy-btn"
        >
          ✨ Update Energy Level
        </Button>
      </CardContent>
    </Card>
  );
};

const TaskCreator = ({ onTaskCreated }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    energy_requirement: 5,
    estimated_duration: 30,
    priority: 'medium',
    category: ''
  });
  const { toast } = useToast();

  const createTask = async () => {
    if (!taskData.title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a task title.",
        variant: "destructive"
      });
      return;
    }

    try {
      await axios.post(`${API}/tasks`, taskData);
      setTaskData({
        title: '',
        description: '',
        energy_requirement: 5,
        estimated_duration: 30,
        priority: 'medium',
        category: ''
      });
      onTaskCreated();
      toast({
        title: "Task created!",
        description: "Your task has been added to your list.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create task. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>📋 Create New Task</CardTitle>
        <CardDescription>
          Add tasks with energy requirements for smart scheduling
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="task-title">Task Title</Label>
          <Input
            id="task-title"
            placeholder="What needs to be done?"
            value={taskData.title}
            onChange={(e) => setTaskData({...taskData, title: e.target.value})}
            data-testid="task-title-input"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="task-description">Description (optional)</Label>
          <Textarea
            id="task-description"
            placeholder="Additional details..."
            value={taskData.description}
            onChange={(e) => setTaskData({...taskData, description: e.target.value})}
            data-testid="task-description-input"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Energy Required (1-10)</Label>
            <Select 
              value={taskData.energy_requirement.toString()} 
              onValueChange={(value) => setTaskData({...taskData, energy_requirement: parseInt(value)})}
            >
              <SelectTrigger data-testid="energy-requirement-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1} - {i < 3 ? 'Low' : i < 7 ? 'Medium' : 'High'} Energy
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Priority</Label>
            <Select 
              value={taskData.priority} 
              onValueChange={(value) => setTaskData({...taskData, priority: value})}
            >
              <SelectTrigger data-testid="priority-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">🔴 High Priority</SelectItem>
                <SelectItem value="medium">🟡 Medium Priority</SelectItem>
                <SelectItem value="low">🟢 Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              min="5"
              value={taskData.estimated_duration}
              onChange={(e) => setTaskData({...taskData, estimated_duration: parseInt(e.target.value) || 30})}
              data-testid="duration-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category (optional)</Label>
            <Input
              id="category"
              placeholder="e.g., Work, Personal, Learning"
              value={taskData.category}
              onChange={(e) => setTaskData({...taskData, category: e.target.value})}
              data-testid="category-input"
            />
          </div>
        </div>

        <Button 
          onClick={createTask} 
          className="w-full ripple-effect magnetic-field bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-white font-semibold" 
          data-testid="create-task-btn"
        >
          ✨ Create Task
        </Button>
      </CardContent>
    </Card>
  );
};

const TaskList = ({ tasks, onTaskUpdate }) => {
  const { toast } = useToast();

  const completeTask = async (taskId) => {
    try {
      await axios.patch(`${API}/tasks/${taskId}/complete`);
      onTaskUpdate();
      toast({
        title: "Task completed! 🎉",
        description: "Great job! Keep up the productive momentum.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to complete task. Please try again.",
        variant: "destructive"
      });
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'secondary';
    }
  };

  if (!tasks || tasks.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="text-center py-8">
          <div className="text-gray-500">
            <p className="text-lg">No tasks yet!</p>
            <p className="text-sm">Create your first task to get started.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id} className={`w-full ${task.completed ? 'opacity-50' : ''}`}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className={`font-semibold ${task.completed ? 'line-through' : ''}`}>
                    {task.title}
                  </h3>
                  <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                    {task.priority}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ⚡ {task.energy_requirement}/10
                  </Badge>
                </div>
                
                {task.description && (
                  <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                )}
                
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>⏱️ {task.estimated_duration} min</span>
                  {task.category && <span>🏷️ {task.category}</span>}
                </div>
              </div>
              
              {!task.completed && (
                <Button 
                  onClick={() => completeTask(task.id)}
                  size="sm"
                  data-testid={`complete-task-${task.id}`}
                >
                  ✓ Complete
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const FocusSession = ({ currentEnergy }) => {
  const [sessionData, setSessionData] = useState({
    duration: 25,
    environment_type: 'silence',
    task_id: null
  });
  const [activeSession, setActiveSession] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    let interval;
    if (activeSession && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && activeSession) {
      // Session completed
      toast({
        title: "Focus session complete! 🎯",
        description: "How did it go? Rate your productivity.",
      });
    }
    return () => clearInterval(interval);
  }, [activeSession, timeLeft, toast]);

  const startSession = async () => {
    try {
      const response = await axios.post(`${API}/focus-sessions`, {
        ...sessionData,
        energy_before: currentEnergy
      });
      
      setActiveSession(response.data);
      setTimeLeft(sessionData.duration * 60);
      
      toast({
        title: "Focus session started! 🚀",
        description: `${sessionData.duration} minutes of focused work time begins now.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start focus session. Please try again.",
        variant: "destructive"
      });
    }
  };

  const endSession = async (productivityRating, energyAfter) => {
    try {
      await axios.patch(`${API}/focus-sessions/${activeSession.id}/complete`, null, {
        params: { energy_after: energyAfter, productivity_rating: productivityRating }
      });
      
      setActiveSession(null);
      setTimeLeft(0);
      
      toast({
        title: "Session logged! 📊",
        description: "Thanks for the feedback. This helps optimize future sessions.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log session. Please try again.",
        variant: "destructive"
      });
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (activeSession) {
    return (
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-mono">{formatTime(timeLeft)}</CardTitle>
          <CardDescription>Focus Session Active - {activeSession.environment_type}</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <Progress value={(1 - timeLeft / (sessionData.duration * 60)) * 100} className="w-full" />
          
          {timeLeft === 0 && (
            <div className="space-y-4 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 font-semibold">Session Complete! 🎉</p>
              
              <div className="space-y-2">
                <Label>How productive was this session? (1-5)</Label>
                <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating}
                      size="sm"
                      onClick={() => endSession(rating, currentEnergy)}
                      data-testid={`productivity-rating-${rating}`}
                    >
                      {rating}⭐
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <Button 
            variant="outline" 
            onClick={() => setActiveSession(null)}
            data-testid="stop-session-btn"
          >
            Stop Session
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>🎯 Start Focus Session</CardTitle>
        <CardDescription>
          Optimized focus sessions with ambient environments
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Duration (minutes)</Label>
            <Select 
              value={sessionData.duration.toString()}
              onValueChange={(value) => setSessionData({...sessionData, duration: parseInt(value)})}
            >
              <SelectTrigger data-testid="session-duration-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 min - Quick burst</SelectItem>
                <SelectItem value="25">25 min - Pomodoro</SelectItem>
                <SelectItem value="45">45 min - Deep work</SelectItem>
                <SelectItem value="90">90 min - Flow state</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Environment</Label>
            <Select 
              value={sessionData.environment_type}
              onValueChange={(value) => setSessionData({...sessionData, environment_type: value})}
            >
              <SelectTrigger data-testid="environment-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="silence">🔇 Complete Silence</SelectItem>
                <SelectItem value="nature">🌿 Nature Sounds</SelectItem>
                <SelectItem value="rain">🌧️ Rain & Thunder</SelectItem>
                <SelectItem value="cafe">☕ Coffee Shop</SelectItem>
                <SelectItem value="binaural">🧠 Binaural Beats</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={startSession} 
          className="w-full ripple-effect magnetic-field bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-white font-semibold" 
          data-testid="start-session-btn"
        >
          🎯 Start Focus Session
        </Button>
      </CardContent>
    </Card>
  );
};

// Real Productivity Analysis Tab
const ProductivityAnalysis = () => {
  const [circadianData, setCircadianData] = useState(null);
  const [environmentData, setEnvironmentData] = useState({
    noise_level: 5,
    lighting_comfort: 7,
    workspace_comfort: 7,
    device_distractions: 3
  });
  const [envAnalysis, setEnvAnalysis] = useState(null);
  const [challenges, setChallenges] = useState(null);
  const [realityCheck, setRealityCheck] = useState(null);
  const [patterns, setPatterns] = useState(null);
  const [loading, setLoading] = useState({ reality: false, challenges: false, environment: false, patterns: false });
  const { toast } = useToast();

  const fetchCircadianData = async () => {
    try {
      const response = await axios.get(`${API}/circadian-optimization`);
      setCircadianData(response.data);
    } catch (error) {
      console.error('Failed to fetch circadian data:', error);
    }
  };

  const logEnvironment = async () => {
    setLoading({ ...loading, environment: true });
    try {
      const response = await axios.post(`${API}/work-environment`, environmentData);
      setEnvAnalysis(response.data);
      toast({
        title: "🌍 Environment Analyzed!",
        description: "Your workspace factors have been evaluated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze environment",
        variant: "destructive"
      });
    }
    setLoading({ ...loading, environment: false });
  };

  const fetchPatterns = async () => {
    setLoading({ ...loading, patterns: true });
    try {
      const response = await axios.get(`${API}/productivity-patterns`);
      setPatterns(response.data);
      toast({
        title: "📊 Patterns Analyzed!",
        description: "Your productivity patterns have been identified.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze patterns",
        variant: "destructive"
      });
    }
    setLoading({ ...loading, patterns: false });
  };

  const fetchChallenges = async () => {
    setLoading({ ...loading, challenges: true });
    try {
      const response = await axios.get(`${API}/ai/productivity-challenges`);
      setChallenges(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch challenges",
        variant: "destructive"
      });
    }
    setLoading({ ...loading, challenges: false });
  };

  const getRealityCheck = async () => {
    setLoading({ ...loading, reality: true });
    try {
      const response = await axios.post(`${API}/ai/reality-check`);
      setRealityCheck(response.data);
      toast({
        title: "💀 Reality Check Complete!",
        description: "Honest assessment of your productivity delivered.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get reality check",
        variant: "destructive"
      });
    }
    setLoading({ ...loading, reality: false });
  };

  useEffect(() => {
    fetchCircadianData();
    fetchChallenges();
  }, []);

  return (
    <div className="space-y-6">
      {/* Circadian Rhythm Optimization */}
      {circadianData && (
        <Card className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌅 Optimal Productivity Timing
              <Badge variant="secondary">{circadianData.phase}</Badge>
            </CardTitle>
            <CardDescription>{circadianData.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Best Tasks for Right Now:</h4>
                <ul className="space-y-1">
                  {circadianData.optimal_tasks?.map((task, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Energy Range:</span>
                  <Badge variant="outline">{circadianData.energy_recommendation}</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Session Length:</span>
                  <Badge variant="outline">{circadianData.focus_duration}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Work Environment Assessment */}
      <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200">
        <CardHeader>
          <CardTitle>🌍 Work Environment Assessment</CardTitle>
          <CardDescription>Rate your current workspace factors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Noise Level (1=quiet, 10=noisy)</Label>
              <Input
                type="number"
                value={environmentData.noise_level}
                onChange={(e) => setEnvironmentData({...environmentData, noise_level: parseInt(e.target.value) || 1})}
                min="1"
                max="10"
              />
            </div>
            <div>
              <Label>Lighting Comfort (1=poor, 10=perfect)</Label>
              <Input
                type="number"
                value={environmentData.lighting_comfort}
                onChange={(e) => setEnvironmentData({...environmentData, lighting_comfort: parseInt(e.target.value) || 1})}
                min="1"
                max="10"
              />
            </div>
            <div>
              <Label>Workspace Comfort (1=uncomfortable, 10=perfect)</Label>
              <Input
                type="number"
                value={environmentData.workspace_comfort}
                onChange={(e) => setEnvironmentData({...environmentData, workspace_comfort: parseInt(e.target.value) || 1})}
                min="1"
                max="10"
              />
            </div>
            <div>
              <Label>Device Distractions (1=none, 10=constant)</Label>
              <Input
                type="number"
                value={environmentData.device_distractions}
                onChange={(e) => setEnvironmentData({...environmentData, device_distractions: parseInt(e.target.value) || 1})}
                min="1"
                max="10"
              />
            </div>
          </div>
          
          <Button
            onClick={logEnvironment}
            disabled={loading.environment}
            className="w-full bg-gradient-to-r from-green-600 to-teal-600"
          >
            {loading.environment ? 'Analyzing...' : '🌍 Analyze My Environment'}
          </Button>
          
          {envAnalysis && (
            <div className="bg-white/80 p-4 rounded-lg border border-green-200">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-green-800">Environment Score:</h4>
                <Badge variant="secondary">{envAnalysis.environment_score}/10</Badge>
              </div>
              <p className="text-sm text-green-700 mb-2">
                Optimal Session Length: {envAnalysis.optimal_session_length}
              </p>
              {envAnalysis.recommendations.length > 0 && (
                <ul className="space-y-1">
                  {envAnalysis.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-green-600">• {rec}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Productivity Pattern Analysis */}
      <Card className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 border-2 border-indigo-200">
        <CardHeader>
          <CardTitle>📊 Productivity Pattern Analysis</CardTitle>
          <CardDescription>Discover your real productivity correlations and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={fetchPatterns}
            disabled={loading.patterns}
            className="mb-4 bg-gradient-to-r from-indigo-600 to-blue-600"
          >
            {loading.patterns ? 'Analyzing...' : '📊 Analyze My Patterns'}
          </Button>
          
          {patterns && (
            <div className="space-y-4">
              {patterns.energy_patterns && (
                <div className="bg-white/80 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Energy Patterns:</h4>
                  <p className="text-sm text-indigo-700">
                    Peak Hours: {patterns.energy_patterns.peak_hours?.join(', ') || 'Not enough data'}
                  </p>
                  <p className="text-sm text-indigo-700">
                    Average Energy: {patterns.energy_patterns.average_energy?.toFixed(1) || 'N/A'}
                  </p>
                </div>
              )}
              
              {patterns.correlations && (
                <div className="bg-white/80 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Key Insights:</h4>
                  <ul className="space-y-1">
                    {patterns.correlations.map((correlation, index) => (
                      <li key={index} className="text-sm text-blue-700">• {correlation}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Reality Check & Challenges remain the same */}
      <Card className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-2 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💀 Honest Productivity Assessment
            <Badge variant="destructive">DIRECT FEEDBACK</Badge>
          </CardTitle>
          <CardDescription>
            Get straightforward analysis of your productivity patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={getRealityCheck}
            disabled={loading.reality}
            className="mb-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold"
          >
            {loading.reality ? 'Analyzing...' : '🎯 Get Honest Assessment'}
          </Button>
          
          {realityCheck && (
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Assessment Results:</h4>
              <div className="text-sm text-gray-700 whitespace-pre-wrap max-h-64 overflow-y-auto">
                {realityCheck.reality_check}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Genetics Lab Tab
const GeneticsLab = () => {
  const [mentorSession, setMentorSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const getMentorSession = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/ai/productivity-mentor`);
      setMentorSession(response.data);
      toast({
        title: "🧙‍♂️ Mentor Session Started!",
        description: "Your AI mentor has analyzed your journey",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start mentor session",
        variant: "destructive"
      });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <ProductivityGenetics />
      <FutureSelfPredictor />
      
      {/* AI Mentor */}
      <Card className="bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 border-2 border-violet-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🧙‍♂️ Personal AI Productivity Mentor
            <Badge variant="secondary">DEEP MEMORY</Badge>
          </CardTitle>
          <CardDescription>
            Get personalized mentorship from AI that remembers your entire journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={getMentorSession}
            disabled={loading}
            className="mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold"
          >
            {loading ? 'Consulting Mentor...' : '🧙‍♂️ Start Mentor Session'}
          </Button>
          
          {mentorSession && (
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-violet-200">
              <h4 className="font-semibold text-violet-800 mb-2">Your Personal Mentor Says:</h4>
              <div className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                {mentorSession.mentor_message}
              </div>
              <div className="text-xs text-violet-600 mt-3">
                Session Type: {mentorSession.session_type}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <AchievementSystem />
    </div>
  );
};

const AICoach = ({ currentEnergy }) => {
  const [question, setQuestion] = useState('');
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);
  const [dailySummary, setDailySummary] = useState(null);
  const { toast } = useToast();

  const askAI = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    try {
      const response = await axios.post(`${API}/ai/insight`, {
        question: question,
        context: `Current energy level: ${currentEnergy}/10`
      });
      
      setInsight(response.data.insight);
      setQuestion('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get AI insight. Please try again.",
        variant: "destructive"
      });
    }
    setLoading(false);
  };

  const getDailySummary = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/ai/daily-summary`);
      setDailySummary(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get daily summary. Please try again.",
        variant: "destructive"
      });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>🤖 AI Productivity Coach</CardTitle>
          <CardDescription>
            Get personalized insights and recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ai-question">Ask your AI coach:</Label>
            <Textarea
              id="ai-question"
              placeholder="e.g., How can I improve my focus? What's the best time for creative work?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              data-testid="ai-question-input"
            />
          </div>
          
          <Button 
            onClick={askAI} 
            disabled={loading || !question.trim()}
            className="w-full ripple-effect magnetic-field bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-white font-semibold"
            data-testid="ask-ai-btn"
          >
            {loading ? 'Thinking...' : 'Get AI Insight'}
          </Button>
          
          {insight && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900 whitespace-pre-wrap">{insight}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>📊 Daily Summary</CardTitle>
          <CardDescription>
            Get AI-powered insights about your day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={getDailySummary} 
            disabled={loading}
            className="w-full mb-4 ripple-effect magnetic-field bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-white font-semibold"
            data-testid="daily-summary-btn"
          >
            {loading ? 'Generating...' : 'Get Daily Summary'}
          </Button>
          
          {dailySummary && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Energy Readings</p>
                  <p className="text-2xl">{dailySummary.data.energy_readings}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Avg Energy</p>
                  <p className="text-2xl">{dailySummary.data.avg_energy.toFixed(1)}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Tasks Created</p>
                  <p className="text-2xl">{dailySummary.data.tasks_created}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Completed</p>
                  <p className="text-2xl">{dailySummary.data.tasks_completed}</p>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-900 whitespace-pre-wrap">
                  {dailySummary.summary}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

function App() {
  const [currentEnergy, setCurrentEnergy] = useState(5);
  const [tasks, setTasks] = useState([]);
  const [recommendedTasks, setRecommendedTasks] = useState([]);
  const [dashboardStats, setDashboardStats] = useState(null);

  const fetchCurrentEnergy = async () => {
    try {
      const response = await axios.get(`${API}/energy/current`);
      setCurrentEnergy(response.data.level);
    } catch (error) {
      console.error('Failed to fetch energy level:', error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const fetchRecommendedTasks = async () => {
    try {
      const response = await axios.get(`${API}/tasks/recommended`);
      setRecommendedTasks(response.data.recommended_tasks || []);
    } catch (error) {
      console.error('Failed to fetch recommended tasks:', error);
    }
  };

  const fetchDashboardStats = async () => {
    try {
      const response = await axios.get(`${API}/dashboard/stats`);
      setDashboardStats(response.data);
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
    }
  };

  useEffect(() => {
    fetchCurrentEnergy();
    fetchTasks();
    fetchRecommendedTasks();
    fetchDashboardStats();
  }, []);

  const handleEnergyUpdate = () => {
    fetchCurrentEnergy();
    fetchRecommendedTasks();
    fetchDashboardStats();
  };

  const handleTaskUpdate = () => {
    fetchTasks();
    fetchRecommendedTasks();
    fetchDashboardStats();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <CustomCursor />
      <FloatingParticles />
      <VoiceCommander />
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 hover:animate-shimmer transition-all duration-500 hover:scale-105">
            ZenTask
          </h1>
          <div className="relative">
            <p className="text-gray-600 text-lg relative z-10">
              Mindful Productivity Through Energy Awareness
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Real Productivity Metrics Dashboard */}
        <ProductivityDashboard />

        {/* Dashboard Stats */}
        {dashboardStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 animate-fade-in-up" data-testid="dashboard-stats">
            <Card className="stats-card morphing-card neon-glow hover-target hover:animate-magnetic">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-blue-600 animate-glow">{dashboardStats.current_energy}/10</div>
                <p className="text-sm text-gray-600 font-medium">Current Energy</p>
              </CardContent>
            </Card>
            <Card className="stats-card morphing-card neon-glow hover-target hover:animate-magnetic">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-green-600 animate-glow">{dashboardStats.completed_tasks}</div>
                <p className="text-sm text-gray-600 font-medium">Completed</p>
              </CardContent>
            </Card>
            <Card className="stats-card morphing-card neon-glow hover-target hover:animate-magnetic">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-orange-600 animate-glow">{dashboardStats.pending_tasks}</div>
                <p className="text-sm text-gray-600 font-medium">Pending</p>
              </CardContent>
            </Card>
            <Card className="stats-card morphing-card neon-glow hover-target hover:animate-magnetic">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-purple-600 animate-glow">{dashboardStats.todays_focus_sessions}</div>
                <p className="text-sm text-gray-600 font-medium">Focus Sessions</p>
              </CardContent>
            </Card>
            <Card className="stats-card morphing-card neon-glow hover-target hover:animate-magnetic">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 animate-glow">{dashboardStats.current_streak || 0}</div>
                <p className="text-sm text-gray-600 font-medium">Current Streak</p>
              </CardContent>
            </Card>
            <Card className="stats-card morphing-card neon-glow hover-target hover:animate-magnetic">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 animate-glow">{dashboardStats.focus_score || 75}%</div>
                <p className="text-sm text-gray-600 font-medium">Focus Score</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Revolutionary Features */}
        <ProductivityGenetics />
        <FutureSelfPredictor />
        <AchievementSystem />

        {/* Main Content */}
        <Tabs defaultValue="energy" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 bg-white/80 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg p-1 text-xs md:text-sm" data-testid="main-tabs">
            <TabsTrigger value="energy" data-testid="energy-tab" className="hover-target magnetic-field font-semibold">⚡ Energy</TabsTrigger>
            <TabsTrigger value="tasks" data-testid="tasks-tab" className="hover-target magnetic-field font-semibold">📋 Tasks</TabsTrigger>
            <TabsTrigger value="recommended" data-testid="recommended-tab" className="hover-target magnetic-field font-semibold">🎯 Smart</TabsTrigger>
            <TabsTrigger value="focus" data-testid="focus-tab" className="hover-target magnetic-field font-semibold">🧘 Focus</TabsTrigger>
            <TabsTrigger value="ai" data-testid="ai-tab" className="hover-target magnetic-field font-semibold">🤖 AI</TabsTrigger>
            <TabsTrigger value="biometric" data-testid="biometric-tab" className="hover-target magnetic-field font-semibold">📊 Analysis</TabsTrigger>
            <TabsTrigger value="genetics" data-testid="genetics-tab" className="hover-target magnetic-field font-semibold">🧬 DNA</TabsTrigger>
            <TabsTrigger value="neural" data-testid="neural-tab" className="hover-target magnetic-field font-semibold">🧠 Neural</TabsTrigger>
          </TabsList>

          <TabsContent value="energy" className="mt-6">
            <EnergyMeter level={currentEnergy} onUpdate={handleEnergyUpdate} />
          </TabsContent>

          <TabsContent value="tasks" className="mt-6 space-y-6">
            <TaskCreator onTaskCreated={handleTaskUpdate} />
            <div>
              <h3 className="text-xl font-semibold mb-4">All Tasks</h3>
              <TaskList tasks={tasks} onTaskUpdate={handleTaskUpdate} />
            </div>
          </TabsContent>

          <TabsContent value="recommended" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>🎯 Smart Task Queue</CardTitle>
                <CardDescription>
                  Tasks optimized for your current energy level ({currentEnergy}/10)
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recommendedTasks.length > 0 ? (
                  <TaskList tasks={recommendedTasks} onTaskUpdate={handleTaskUpdate} />
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No tasks match your current energy level.</p>
                    <p className="text-sm">Create more tasks or adjust your energy level.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="focus" className="mt-6">
            <FocusSession currentEnergy={currentEnergy} />
          </TabsContent>

          <TabsContent value="ai" className="mt-6">
            <AICoach currentEnergy={currentEnergy} />
          </TabsContent>

          <TabsContent value="biometric" className="mt-6">
            <ProductivityAnalysis />
          </TabsContent>

          <TabsContent value="genetics" className="mt-6">
            <GeneticsLab />
          </TabsContent>

          <TabsContent value="neural" className="mt-6">
            <NeuralNetworkVisualizer />
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}

export default App;