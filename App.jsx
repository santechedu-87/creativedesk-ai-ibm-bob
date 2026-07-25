import React, { useState } from 'react';
import { 
  Sparkles, 
  Wand2, 
  Bot, 
  Video, 
  FileText, 
  Image as ImageIcon, 
  Copy, 
  Code2, 
  Briefcase, 
  Palette, 
  Cpu, 
  Zap, 
  Send, 
  RefreshCw,
  TrendingUp,
  DollarSign,
  Film,
  Layers,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('creative');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Creative Storyboard State
  const [storyPrompt, setStoryPrompt] = useState('An astronaut discovering an ancient crystal library beneath the red dust of Mars.');
  const [genre, setGenre] = useState('Sci-Fi');
  const [storyOutput, setStoryOutput] = useState({
    title: "Echoes of the Martian Library",
    synopsis: "Commander Elena stumbles upon a crystalline vault beneath the red dust of Mars, holding the sonic memory of a forgotten world.",
    scenes: [
      {
        sceneNumber: 1,
        visualDescription: "Wide panoramic shot of Commander Elena walking across a glowing violet Martian cavern toward a monolithic crystal door.",
        dialogueScript: "Elena (V.O.): 'Day 412. The sensors indicated sub-surface radio waves, but nothing could have prepared me for this.'",
        audioSoundtrack: "Deep ambient synth hum with subtle metallic reverb.",
        imagePrompt: "Futuristic astronaut standing at the entrance of a glowing purple crystal vault in a Martian subterranean cave."
      },
      {
        sceneNumber: 2,
        visualDescription: "Close-up shot of Elena touching a translucent interface; glowing musical frequency lines illuminate her helmet visor.",
        dialogueScript: "Elena: 'It's not a database of text... it's a museum of pure sound.'",
        audioSoundtrack: "Harmonic ethereal choir chords building in intensity.",
        imagePrompt: "Close up of astronaut helmet visor reflecting glowing blue and gold audio frequency waves."
      },
      {
        sceneNumber: 3,
        visualDescription: "Medium shot as the vault opens, revealing levitating audio spheres emitting golden light.",
        dialogueScript: "Elena: 'We thought we were alone in the cosmos. In truth, we just weren't listening on the right frequency.'",
        audioSoundtrack: "Triumphant orchestral climax blending acoustic cello with futuristic synth lead.",
        imagePrompt: "Levitating golden light spheres inside a massive alien dome, cinematic 8k."
      }
    ]
  });

  // Concept Art State
  const [imagePrompt, setImagePrompt] = useState('Cinematic shot of an astronaut standing in a glowing crystal library on Mars, 8k, volumetric lighting');

  // Business Monetization State
  const [creatorBudget, setCreatorBudget] = useState('5000');
  const [contentType, setContentType] = useState('Short Film / Web Series');
  const [monetizationOutput, setMonetizationOutput] = useState(`### 💰 Creative Monetization & ROI Forecast

1. **Production Cost Reduction:** Save approx **68%** ($3,400) by replacing manual storyboarding with CreativeDesk AI.
2. **Projected Sponsorship Yield:** Estimated **$8,500 – $14,000** through brand placement and web series licensing.
3. **Distribution Channels:** Direct-to-fan digital passes, YouTube revenue sharing, and Spotify audio narrative syndication.
4. **ROI Multiplier:** Projected **2.8x Return on Investment** within 90 days of release.`);

  // IBM Bob SDLC Co-Pilot State
  const [selectedBobMode, setSelectedBobMode] = useState('Plan');
  const [bobQuery, setBobQuery] = useState('Architect a modular React state management system for real-time audio playback and Web Audio API integration.');
  const [bobLogs, setBobLogs] = useState([
    { mode: 'Plan', time: '10:00 AM', text: 'Analyzed requirements for CreativeDesk AI. Mapped state architecture: App -> StoryboardEngine -> MonetizationAI -> BobSDLCPanel.' },
    { mode: 'Code', time: '10:15 AM', text: 'Generated refactored state hooks and optimized async API calls for live rendering.' },
    { mode: 'Ask', time: '10:30 AM', text: 'Audited codebase for memory optimization and secure API key handling.' }
  ]);
  const [bobResponse, setBobResponse] = useState(`[IBM Bob ${selectedBobMode} Mode Response]\nSuccessfully orchestrated task in local workspace. Refactored modules and validated architecture compliance against IBM SkillsBuild standards.`);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      {/* Top Banner Notice */}
      <div className="bg-indigo-900/80 border-b border-indigo-700/50 px-4 py-2 text-xs md:text-sm text-center flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        <span><strong>IBM AI Builders Challenge 2026</strong> — July Submission Prototype Studio</span>
        <span className="bg-indigo-600 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider">July Track</span>
      </div>

      {/* Main Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                CreativeDesk AI <span className="text-xs font-normal text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full ml-1">Powered by IBM Bob</span>
              </h1>
              <p className="text-xs text-slate-400">All-in-One Co-Creator & Monetization Studio for Independent Artists</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('creative')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'creative' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              Creative Studio
            </button>
            <button
              onClick={() => setActiveTab('monetization')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'monetization' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              Monetization AI
            </button>
            <button
              onClick={() => setActiveTab('bob')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'bob' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              IBM Bob SDLC
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 gap-6">
        
        {/* TAB 1: CREATIVE STUDIO */}
        {activeTab === 'creative' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <Wand2 className="w-4 h-4" />
                <span>AI Storyboard & Narrative Generator</span>
              </div>
              <p className="text-xs text-slate-400">
                Transform creative ideas into structured 3-scene storyboards, character voiceovers, and audio cue maps.
              </p>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Creative Genre</label>
                <select 
                  value={genre} 
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                >
                  <option value="Sci-Fi">Sci-Fi & Cyberpunk</option>
                  <option value="Fantasy">Epic Fantasy</option>
                  <option value="Documentary">Corporate / Documentary</option>
                  <option value="Game Design">Interactive Game Narrative</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Story Concept or Pitch</label>
                <textarea
                  rows={5}
                  value={storyPrompt}
                  onChange={(e) => setStoryPrompt(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
            </div>

            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
                  <Film className="w-4 h-4 text-purple-400" />
                  <span>Cinematic Storyboard Output</span>
                </div>
              </div>

              {storyOutput && (
                <div className="space-y-4">
                  <div className="bg-indigo-950/30 border border-indigo-900/50 rounded-xl p-4">
                    <h2 className="text-base font-bold text-indigo-200">{storyOutput.title}</h2>
                    <p className="text-xs text-slate-300 mt-1">{storyOutput.synopsis}</p>
                  </div>

                  <div className="space-y-3">
                    {storyOutput.scenes?.map((scene, idx) => (
                      <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                          Scene {scene.sceneNumber || idx + 1}
                        </span>
                        <p className="text-xs text-slate-300"><strong>Visual Shot:</strong> {scene.visualDescription}</p>
                        <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800/60">
                          <p className="text-xs italic text-indigo-200">"{scene.dialogueScript}"</p>
                        </div>
                        <p className="text-xs text-slate-400"><strong>Audio Direction:</strong> {scene.audioSoundtrack}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: COMMERCE MONETIZATION AI */}
        {activeTab === 'monetization' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Creative Industry Monetization & Licensing Engine
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Project Budget ($ USD)</label>
                  <input
                    type="number"
                    value={creatorBudget}
                    onChange={(e) => setCreatorBudget(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200"
                  />
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Monetization AI Forecast</h3>
                <div className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {monetizationOutput}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: IBM BOB SDLC PANEL */}
        {activeTab === 'bob' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-cyan-400" />
                  IBM Bob SDLC Agentic Panel
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Developer Prompt ({selectedBobMode} Mode)</label>
                  <textarea
                    rows={4}
                    value={bobQuery}
                    onChange={(e) => setBobQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                {bobResponse && (
                  <div className="bg-cyan-950/30 border border-cyan-800/50 rounded-xl p-4 text-xs text-slate-200 whitespace-pre-wrap">
                    {bobResponse}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </main>

      <footer className="border-t border-slate-800 bg-slate-900 py-3 px-6 text-center text-xs text-slate-500">
        <p>Built for Sanajit Dey • IBM AI Builders Challenge 2026 • Submission Deadline: July 31, 2026</p>
      </footer>
    </div>
  );
}
