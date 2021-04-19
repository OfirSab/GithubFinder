import React,{useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const {alert} = alertContext
  return (
    (alert !== null && (
        <div className={`alert alert-${alert.idx}`}>
            <i className="fas fa-info-circle i-danger"></i> {alert.msg}
        </div>
    ))||(<div className={`blank-alert`}>
      <br/>
      </div>)
  )
}

export default Alert
