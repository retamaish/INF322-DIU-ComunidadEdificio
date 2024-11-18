import React from 'react'
import { LineChart } from '../../../chart/LineChart'
import { useNavigate } from 'react-router-dom'
import { H1, P } from '@typography'
import { PieChart } from '../../../chart/PieChart'

export const HomeGoToCommonExpenses = () => {
  const navigate = useNavigate()

  return (
    <div className='home_common_expenses'>
      <div className='home_common_expenses_left'>
        <div className='home_common_expenses__content'>
          <div>
            <H1 className='bold' style={{ margin: 0 }}>Gastos comunes</H1>
            <P style={{ marginTop: 12 }}>El monto total a pagar es de:</P>
            <P className='text-4xl bold' style={{ margin: 0 }}>$ 123.456</P>
            <P>+ $0 intereses</P>
          </div>
        </div>
        <div className='home_common_expenses__buttons'>
          <button className='button button__submit' style={{ width: '120px' }} onClick={() => navigate('/metodos-pago')}>Pagar</button>
          <button className='button button__submit' style={{ width: '120px' }} onClick={() => navigate('/cartola')}>Ver detalle</button>
        </div>
      </div>
      <LineChart />
      <PieChart />
    </div>
  )
}
