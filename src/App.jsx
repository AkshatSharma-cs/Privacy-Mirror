import { useState } from 'react'
import LandingScreen from './components/LandingScreen'
import ScanScreen from './components/ScanScreen'
import ResultsScreen from './components/ResultsScreen'
import { PROFILES, generateFallback } from './data/profiles'

// Scan animation runs for ~5s — AI calls happen in parallel in ResultsScreen tabs
const SCAN_DURATION = 5200

export default function App() {
  const [phase, setPhase] = useState('landing')
  const [email, setEmail] = useState('')
  const [data, setData] = useState(null)

  function handleScan(inputEmail) {
    setEmail(inputEmail)
    setPhase('scanning')
    const result = PROFILES[inputEmail] || generateFallback(inputEmail)
    setData(result)
    setTimeout(() => setPhase('results'), SCAN_DURATION)
  }

  function handleReset() {
    setPhase('landing')
    setEmail('')
    setData(null)
  }

  return (
    <>
      {phase === 'landing'  && <LandingScreen onScan={handleScan} />}
      {phase === 'scanning' && <ScanScreen email={email} />}
      {phase === 'results'  && data && (
        <ResultsScreen email={email} data={data} onReset={handleReset} />
      )}
    </>
  )
}
