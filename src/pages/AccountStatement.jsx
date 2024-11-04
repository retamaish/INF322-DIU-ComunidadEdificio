import React from 'react'
import { IconDownload } from '@icons'

export const AccountStatement = () => {
  const containerStyle = {
    color: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto'
  }

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem'
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1.5rem'
  }

  const thStyle = {
    padding: '1rem',
    textAlign: 'left',
    backgroundColor: '#444',
    color: '#fff',
    borderBottom: '2px solid #555',
    borderRight: '1px solid #555' // Línea de separación entre columnas
  }

  const tdStyle = {
    padding: '1rem',
    borderBottom: '1px solid #555',
    borderRight: '1px solid #555' // Línea de separación entre columnas
  }

  const downloadStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem'
  }

  const buttonStyle = {
    backgroundColor: '#61677A',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Cartola</h1>
      <div style={downloadStyle}>
        <button style={buttonStyle}>
          Descargar PDF <IconDownload />
        </button>
        <button style={{ ...buttonStyle, marginLeft: '1rem' }}>
          Descargar Excel <IconDownload />
        </button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Fecha Ingreso</th>
            <th style={thStyle}>Cargo</th>
            <th style={thStyle}>Abono</th>
            <th style={thStyle}>Descripción</th>
            <th style={thStyle}>Saldo</th>
            <th style={thStyle}>Documento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>5/08/24</td>
            <td style={tdStyle}>120.000</td>
            <td style={tdStyle} />
            <td style={tdStyle}>Gasto común, Agosto</td>
            <td style={tdStyle}>120.000</td>
            <td style={tdStyle}>
              <IconDownload />
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>10/08/24</td>
            <td style={tdStyle} />
            <td style={tdStyle}>50.000</td>
            <td style={tdStyle}>Pago transferencia</td>
            <td style={tdStyle}>70.000</td>
            <td style={tdStyle}>
              <IconDownload />
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>15/08/24</td>
            <td style={tdStyle}>70.000</td>
            <td style={tdStyle} />
            <td style={tdStyle}>Gasto común, Septiembre</td>
            <td style={tdStyle}>140.000</td>
            <td style={tdStyle}>
              <IconDownload />
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>20/08/24</td>
            <td style={tdStyle} />
            <td style={tdStyle}>30.000</td>
            <td style={tdStyle}>Pago transferencia</td>
            <td style={tdStyle}>110.000</td>
            <td style={tdStyle}>
              <IconDownload />
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>25/08/24</td>
            <td style={tdStyle}>150.000</td>
            <td style={tdStyle} />
            <td style={tdStyle}>Gasto común, Octubre</td>
            <td style={tdStyle}>260.000</td>
            <td style={tdStyle}>
              <IconDownload />
            </td>
          </tr>
        </tbody>
      </table>
      <button style={buttonStyle}>Volver a Inicio</button>
    </div>
  )
}
