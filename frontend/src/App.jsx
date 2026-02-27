import { useState } from 'react'
import LandingScreen from './components/LandingScreen'
import ScanScreen from './components/ScanScreen'
import ResultsScreen from './components/ResultsScreen'
import { PROFILES, generateFallback } from './data/profiles'

// Scan takes ~4.5s to feel real
const SCAN_DURATION = 4600

export default function App() {
  const [phase, setPhase] = useState('landing') // landing | scanning | results
  const [email, setEmail] = useState('')
  const [data, setData] = useState(null)

  function handleScan(inputEmail) {
    setEmail(inputEmail)
    setPhase('scanning')

    setTimeout(() => {
      const result = PROFILES[inputEmail] || generateFallback(inputEmail)
      setData(result)
      setPhase('results')
    }, SCAN_DURATION)
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
