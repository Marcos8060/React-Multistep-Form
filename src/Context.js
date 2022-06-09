import React,{useState,createContext} from 'react'
import App from './App'

export const MultiStepContext = createContext();

function Context() {
    const [currentStep,setCurrentStep] = useState(1)
    const [userData,setUserData] = useState([])
    const [finalData,setFinalData] = useState([])

    const submitData = ()=>{
        setFinalData(finalData=>[...finalData, userData])
        setUserData('')
        setCurrentStep(1)
    }
  return (
      <MultiStepContext.Provider value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData
      }}>
          <App />
      </MultiStepContext.Provider>
  )
}

export default Context